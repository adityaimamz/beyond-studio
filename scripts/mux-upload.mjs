// Upload satu film ke Mux (master HLS untuk lightbox) dan catat playback ID-nya di
// scripts/mux-manifest.json. Preview loop TIDAK diunggah ke Mux (Free plan dibatasi
// 10 asset): preview berupa file di public/videos/previews/<slug>.mp4.
//
//   node --env-file=.env.local scripts/mux-upload.mjs <film.mp4> --slug satu-frame --title "Satu Frame"
//   node --env-file=.env.local scripts/mux-upload.mjs --asset <ASSET_ID> --slug satu-frame --title "Satu Frame"   # master sudah ada di Mux
//
// Lalu: node scripts/mux-apply.mjs   (menyalin playback ID ke constants/landing.ts)
// Butuh MUX_TOKEN_ID dan MUX_TOKEN_SECRET (Video: read + write).

import { openAsBlob } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const API = "https://api.mux.com/video/v1";
const MANIFEST = join(dirname(fileURLToPath(import.meta.url)), "mux-manifest.json");

const { MUX_TOKEN_ID, MUX_TOKEN_SECRET } = process.env;
if (!MUX_TOKEN_ID || !MUX_TOKEN_SECRET) {
  console.error("MUX_TOKEN_ID / MUX_TOKEN_SECRET belum di-set. Jalankan dengan --env-file=.env.local");
  process.exit(1);
}
const AUTH = "Basic " + Buffer.from(`${MUX_TOKEN_ID}:${MUX_TOKEN_SECRET}`).toString("base64");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function parseArgs(argv) {
  const args = { file: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) args[a.slice(2)] = argv[++i];
    else args.file = a;
  }
  return args;
}

async function mux(method, path, body) {
  // GET aman diulang kalau jaringan putus sesaat ("fetch failed"). POST tidak,
  // supaya tidak membuat upload ganda.
  const attempts = method === "GET" ? 6 : 1;
  let res;
  for (let i = 1; ; i++) {
    try {
      res = await fetch(API + path, {
        method,
        headers: { Authorization: AUTH, "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : undefined,
      });
      break;
    } catch (err) {
      if (i >= attempts) throw err;
      await sleep(2000 * i);
    }
  }
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`${method} ${path} → ${res.status}: ${JSON.stringify(json.error ?? json)}`);
  }
  return json.data;
}

async function waitFor(label, check, intervalMs = 5000) {
  for (;;) {
    const result = await check();
    if (result) return result;
    process.stdout.write(`  menunggu ${label}...\r`);
    await sleep(intervalMs);
  }
}

async function uploadFilm(file, title, slug) {
  const upload = await mux("POST", "/uploads", {
    cors_origin: "*",
    new_asset_settings: {
      playback_policies: ["public"],
      meta: { title, external_id: slug },
    },
  });

  const blob = await openAsBlob(file);
  console.log(`Upload ${basename(file)} (${(blob.size / 1024 / 1024).toFixed(0)} MB)...`);
  const started = Date.now();
  const put = await fetch(upload.url, { method: "PUT", body: blob, duplex: "half" });
  if (!put.ok) throw new Error(`PUT upload gagal: ${put.status} ${await put.text()}`);
  console.log(`  selesai dalam ${((Date.now() - started) / 1000).toFixed(0)} s`);

  return waitFor("asset dibuat", async () => (await mux("GET", `/uploads/${upload.id}`)).asset_id);
}

async function waitReady(assetId) {
  return waitFor(`asset ${assetId} siap`, async () => {
    const asset = await mux("GET", `/assets/${assetId}`);
    if (asset.status === "errored") throw new Error(`Asset ${assetId} gagal: ${JSON.stringify(asset.errors)}`);
    return asset.status === "ready" ? asset : null;
  });
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const slug = args.slug;
  if (!slug || (!args.file && !args.asset)) {
    console.error("Pakai: mux-upload.mjs <film.mp4> --slug <slug> [--title <judul>]");
    console.error("   atau: mux-upload.mjs --asset <ASSET_ID> --slug <slug> [--title <judul>]");
    process.exit(1);
  }
  const title = args.title ?? slug;

  const assetId = args.asset ?? (await uploadFilm(args.file, title, slug));
  const asset = await waitReady(assetId);
  const entry = {
    title,
    assetId,
    playbackId: asset.playback_ids[0].id,
    duration: Number(asset.duration.toFixed(2)),
    aspectRatio: asset.aspect_ratio,
  };
  console.log(`\nSiap: playbackId=${entry.playbackId} (${entry.duration} s, ${entry.aspectRatio})`);

  const manifest = JSON.parse(await readFile(MANIFEST, "utf8").catch(() => "{}"));
  manifest[slug] = entry;
  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`Dicatat di scripts/mux-manifest.json → "${slug}"`);
}

main().catch((err) => {
  console.error("\n" + err.message);
  process.exit(1);
});
