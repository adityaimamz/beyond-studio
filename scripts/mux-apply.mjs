// Salin playback ID dari scripts/mux-manifest.json ke bsMotionFilms di constants/landing.ts.
//   node scripts/mux-apply.mjs
import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(await readFile(join(root, "scripts/mux-manifest.json"), "utf8"));
const file = join(root, "constants/landing.ts");
let src = await readFile(file, "utf8");

const idRe = /playbackId: "[^"]*"/;
for (const [slug, entry] of Object.entries(manifest)) {
  const at = src.indexOf(`slug: "${slug}"`);
  if (at === -1) {
    console.warn(`- ${slug}: tidak ada di bsMotionFilms, dilewati`);
    continue;
  }
  const match = idRe.exec(src.slice(at));
  if (!match) {
    console.warn(`- ${slug}: baris playbackId tidak ditemukan, dilewati`);
    continue;
  }
  const start = at + match.index;
  src = src.slice(0, start) + `playbackId: "${entry.playbackId}"` + src.slice(start + match[0].length);
  console.log(`✓ ${slug}`);
}
await writeFile(file, src);
