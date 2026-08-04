import type { CSSProperties } from "react";

export type ServiceVisualVariant = "web" | "folio" | "shop" | "biz" | "custom" | "academic";

const FONT: CSSProperties = { fontFamily: "'Inter', system-ui, sans-serif" };

function WebVisual() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 rounded-[14px] bg-white overflow-hidden grid"
        style={{ border: "1px solid #D8DCE3", gridTemplateColumns: "112px 1fr", boxShadow: "0 14px 34px rgba(0,0,0,.45)" }}
      >
        <div className="flex flex-col gap-1 p-2.5" style={{ borderRight: "1px solid #E7EAEF", background: "#F7F8FA" }}>
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-4 h-4 rounded-[5px]" style={{ background: "#2563EB" }} />
            <div className="text-[9.5px] font-bold" style={{ color: "#111827", letterSpacing: "-.01em" }}>Nusatek</div>
          </div>
          <div className="flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[9px] font-semibold text-white" style={{ background: "#2563EB" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect></svg>
            <span>Ringkasan</span>
          </div>
          <div className="flex items-center gap-1.5 px-1.5 py-1 text-[9px]" style={{ color: "#4B5563" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.2"><path d="M5 7h14l-1.5 12H6.5L5 7z"></path><path d="M9 7V5a3 3 0 0 1 6 0v2"></path></svg>
            <span>Pesanan</span>
            <span className="ml-auto rounded-full px-1 text-[7.5px] font-bold text-white" style={{ background: "#EF4444" }}>6</span>
          </div>
          <div className="flex items-center gap-1.5 px-1.5 py-1 text-[9px]" style={{ color: "#4B5563" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.2"><path d="M4 8l8-4 8 4v8l-8 4-8-4V8z"></path></svg>
            <span>Stok Barang</span>
          </div>
          <div className="flex items-center gap-1.5 px-1.5 py-1 text-[9px]" style={{ color: "#4B5563" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.2"><circle cx="12" cy="8" r="3.5"></circle><path d="M5 20c0-3.5 3.1-5.5 7-5.5s7 2 7 5.5"></path></svg>
            <span>Pengguna</span>
          </div>
          <div className="flex items-center gap-1.5 px-1.5 py-1 text-[9px]" style={{ color: "#4B5563" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.2"><path d="M5 19V9M12 19V5M19 19v-7"></path></svg>
            <span>Laporan</span>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 p-3 min-w-0">
          <div className="flex items-center justify-between gap-2.5">
            <div className="text-[11.5px] font-bold" style={{ color: "#111827", letterSpacing: "-.01em" }}>Dashboard Operasional</div>
            <div className="text-[8.5px]" style={{ color: "#6B7280" }}>1–7 Agu 2026</div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: "Pesanan", value: "1.284" },
              { label: "Stok siap", value: "96%" },
              { label: "Staf aktif", value: "42" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg p-1.5" style={{ border: "1px solid #E7EAEF", background: "#FBFCFD" }}>
                <div className="text-[7.5px] uppercase" style={{ color: "#6B7280", letterSpacing: ".08em" }}>{s.label}</div>
                <div className="text-[14px] font-bold mt-0.5" style={{ color: "#111827", letterSpacing: "-.02em" }}>{s.value}</div>
              </div>
            ))}
          </div>
          <div className="rounded-[9px] overflow-hidden" style={{ border: "1px solid #E7EAEF" }}>
            <div
              className="grid gap-2 px-2.5 py-1.5 text-[7.5px] font-semibold uppercase"
              style={{ gridTemplateColumns: "1fr 62px 54px", background: "#F7F8FA", borderBottom: "1px solid #E7EAEF", color: "#6B7280", letterSpacing: ".06em" }}
            >
              <span>Pesanan</span>
              <span>Nilai</span>
              <span>Status</span>
            </div>
            {[
              { initials: "RA", bg: "#DBEAFE", fg: "#1D4ED8", name: "#2481 · Rina Ayu", value: "Rp 480rb", status: "Lunas", statusFg: "#047857", statusBg: "#ECFDF5", statusBorder: "#A7F3D0" },
              { initials: "TM", bg: "#FEF3C7", fg: "#B45309", name: "#2480 · Toko Mekar", value: "Rp 1,2jt", status: "Proses", statusFg: "#92400E", statusBg: "#FFFBEB", statusBorder: "#FDE68A" },
              { initials: "BS", bg: "#DCFCE7", fg: "#15803D", name: "#2479 · Budi S.", value: "Rp 215rb", status: "Lunas", statusFg: "#047857", statusBg: "#ECFDF5", statusBorder: "#A7F3D0", last: true },
            ].map((row) => (
              <div
                key={row.name}
                className="grid gap-2 px-2.5 py-1.5 text-[9px] items-center"
                style={{ gridTemplateColumns: "1fr 62px 54px", borderBottom: row.last ? undefined : "1px solid #F1F3F6", color: "#1F2937" }}
              >
                <span className="flex items-center gap-1.5 min-w-0">
                  <span className="w-[15px] h-[15px] rounded-full grid place-items-center text-[7px] font-bold shrink-0" style={{ background: row.bg, color: row.fg }}>{row.initials}</span>
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap">{row.name}</span>
                </span>
                <span style={{ fontVariantNumeric: "tabular-nums" }}>{row.value}</span>
                <span className="rounded-full px-1.5 py-0.5 text-[8px] font-semibold justify-self-start" style={{ color: row.statusFg, background: row.statusBg, border: `1px solid ${row.statusBorder}` }}>{row.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2"
        style={{ right: "-6px", bottom: "-12px", transform: "rotate(-3deg)", border: "1px solid #D8DCE3", boxShadow: "0 18px 32px rgba(0,0,0,.5)" }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: "#10B981", boxShadow: "0 0 0 3px #D1FAE5" }} />
        <div>
          <div className="text-[8.5px] uppercase" style={{ color: "#6B7280", letterSpacing: ".06em" }}>Sinkron data</div>
          <div className="text-[12.5px] font-bold" style={{ color: "#111827" }}>Realtime</div>
        </div>
      </div>
    </div>
  );
}

function FolioVisual() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute rounded-xl bg-white overflow-hidden"
        style={{ left: 0, right: 56, top: 4, bottom: 12, border: "1px solid #D8DCE3", boxShadow: "0 14px 34px rgba(0,0,0,.45)" }}
      >
        <div className="flex items-center gap-1.5 px-2.5 py-2" style={{ borderBottom: "1px solid #EEF0F4", background: "#F7F8FA" }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#FF5F57" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#FEBC2E" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#28C840" }} />
          <div className="ml-auto flex gap-2.5 text-[8px] font-medium" style={{ color: "#4B5563" }}>
            <span>Karya</span>
            <span>Tentang</span>
            <span>Kontak</span>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 px-[15px] py-4">
          <div className="flex items-baseline justify-between gap-2.5">
            <div className="leading-none" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 24, color: "#111827" }}>
              Dinda R<span style={{ color: "#C026D3" }}>.</span>
            </div>
            <div className="text-right text-[8px] leading-snug" style={{ color: "#6B7280" }}>Product Designer<br />Yogyakarta</div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { title: "Kasir Kopi", sub: "UI Design" },
              { title: "Rasa App", sub: "Branding" },
              { title: "Bank Tani", sub: "Web" },
            ].map((p) => (
              <div key={p.title} className="h-10 rounded-lg flex flex-col justify-end p-1.5" style={{ border: "1px solid #E7EAEF", background: "#F3F4F7" }}>
                <div className="text-[7.5px] font-semibold" style={{ color: "#111827" }}>{p.title}</div>
                <div className="text-[7px]" style={{ color: "#6B7280" }}>{p.sub}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-[7px] px-2.5 py-1.5 text-[8.5px] font-semibold text-white" style={{ background: "#111827" }}>Lihat semua karya</div>
            <div className="flex items-center gap-1.5 text-[8.5px]" style={{ color: "#4B5563" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10B981", boxShadow: "0 0 0 2.5px #D1FAE5" }} />
              <span>Tersedia untuk proyek baru</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute right-0 bottom-0 rounded-[18px] bg-white overflow-hidden px-2 py-2.5"
        style={{ width: 90, height: 154, border: "1px solid #D8DCE3", boxShadow: "0 20px 36px rgba(0,0,0,.5)", transform: "rotate(4deg)" }}
      >
        <div className="w-[26px] h-1 rounded mx-auto mb-2.5" style={{ background: "#E5E7EB" }} />
        <div className="w-[38px] h-[38px] rounded-full mx-auto grid place-items-center text-[13px] font-bold" style={{ background: "#FAE8FF", border: "1px solid #E9D5FF", color: "#A21CAF" }}>DR</div>
        <div className="text-center mt-1.5 text-[9px] font-bold" style={{ color: "#111827" }}>Dinda R.</div>
        <div className="text-center text-[7.5px] mt-0.5" style={{ color: "#6B7280" }}>Product Designer</div>
        <div className="mt-2.5 text-center text-[8px] font-semibold text-white rounded-md py-1.5" style={{ background: "#111827" }}>Hubungi</div>
      </div>
    </div>
  );
}

function ShopVisual() {
  const bars = [38, 62, 30, 88, 54, 44, 24];
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 rounded-[14px] bg-white flex flex-col gap-2.5 px-3.5 py-3"
        style={{ border: "1px solid #D8DCE3", boxShadow: "0 14px 34px rgba(0,0,0,.45)" }}
      >
        <div className="flex items-center gap-2" style={{ paddingRight: 70 }}>
          <div className="text-[11px] font-bold shrink-0" style={{ color: "#111827", letterSpacing: "-.01em" }}>Penjualan minggu ini</div>
          <div className="rounded-full px-1.5 py-0.5 text-[8.5px] font-semibold shrink-0" style={{ color: "#047857", border: "1px solid #A7F3D0", background: "#ECFDF5" }}>+18%</div>
        </div>
        <div className="flex items-baseline gap-1.5">
          <div className="text-[19px] font-bold" style={{ color: "#111827", letterSpacing: "-.03em", fontVariantNumeric: "tabular-nums" }}>Rp 24.860.000</div>
          <div className="text-[8px]" style={{ color: "#6B7280" }}>dari 312 pesanan</div>
        </div>
        <div className="relative flex-1" style={{ minHeight: 56 }}>
          <div className="absolute inset-0 flex flex-col justify-between">
            <div style={{ borderTop: "1px dashed #EEF0F4" }} />
            <div style={{ borderTop: "1px dashed #EEF0F4" }} />
            <div style={{ borderTop: "1px dashed #EEF0F4" }} />
            <div style={{ borderTop: "1px solid #E7EAEF" }} />
          </div>
          <div className="absolute inset-0 flex items-end gap-1.5">
            {bars.map((h, i) => {
              const isPeak = h === 88;
              return (
                <div key={i} className="flex-1 relative flex items-end h-full">
                  {isPeak && (
                    <div
                      className="absolute whitespace-nowrap rounded text-white font-bold px-1.5 py-0.5"
                      style={{ left: "50%", bottom: "calc(88% + 5px)", transform: "translateX(-50%)", fontSize: 7.5, background: "#111827" }}
                    >
                      Rp 6,4jt
                    </div>
                  )}
                  <div className="w-full rounded-t" style={{ height: `${h}%`, background: isPeak ? "#10B981" : "#E3E7EE" }} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between text-[7.5px] font-medium" style={{ color: "#6B7280" }}>
          {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </div>
      <div
        className="absolute rounded-xl bg-white px-3 py-2"
        style={{ left: -8, bottom: 34, transform: "rotate(-4deg)", border: "1px solid #D8DCE3", boxShadow: "0 18px 32px rgba(0,0,0,.5)", minWidth: 124 }}
      >
        <div className="text-[8px] uppercase" style={{ color: "#6B7280", letterSpacing: ".06em" }}>Checkout baru</div>
        <div className="text-[13.5px] font-bold mt-0.5" style={{ color: "#111827", fontVariantNumeric: "tabular-nums" }}>Rp 349.000</div>
        <div className="text-[7.5px] mt-0.5" style={{ color: "#047857" }}>Kemeja Linen · 2 item</div>
      </div>
      <div
        className="absolute flex items-center gap-2 rounded-[10px] bg-white px-2.5 py-1.5"
        style={{ right: -6, top: -14, transform: "rotate(3deg)", border: "1px solid #D8DCE3", boxShadow: "0 14px 26px rgba(0,0,0,.45)" }}
      >
        <div className="w-5 h-5 rounded-[5px] grid place-items-center text-[9px]" style={{ background: "#F3F4F7", border: "1px solid #E7EAEF" }}>👕</div>
        <div className="text-[9.5px] font-semibold" style={{ color: "#111827" }}>142 produk aktif</div>
      </div>
    </div>
  );
}

function BizVisual() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 rounded-[14px] bg-white overflow-hidden flex flex-col"
        style={{ border: "1px solid #D8DCE3", boxShadow: "0 14px 34px rgba(0,0,0,.45)" }}
      >
        <div className="flex items-center gap-2 px-2.5 py-2" style={{ borderBottom: "1px solid #EEF0F4", background: "#F7F8FA" }}>
          <div className="w-4 h-4 rounded-[5px]" style={{ background: "#2563EB" }} />
          <div className="text-[9.5px] font-bold" style={{ color: "#111827" }}>CV Sinar Jaya</div>
          <div className="ml-auto flex gap-2.5 text-[8px] font-medium" style={{ color: "#4B5563" }}>
            <span>Profil</span>
            <span>Layanan</span>
            <span>Kontak</span>
          </div>
        </div>
        <div className="flex flex-col gap-0.5 px-[13px] pt-[13px]">
          <div className="text-[13px] font-bold leading-tight" style={{ color: "#111827", letterSpacing: "-.02em" }}>Kontraktor baja ringan sejak 1998</div>
          <div className="text-[8.5px]" style={{ color: "#6B7280" }}>Melayani Jawa Tengah &amp; DIY</div>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-1.5 px-[13px] pb-[13px] pt-2.5">
          {[
            { value: "27", label: "Tahun\npengalaman" },
            { value: "340", label: "Proyek\nselesai" },
          ].map((s) => (
            <div key={s.value} className="rounded-[9px] p-2 flex flex-col gap-1" style={{ border: "1px solid #E7EAEF", background: "#FBFCFD" }}>
              <div className="text-[15px] font-bold" style={{ color: "#2563EB", letterSpacing: "-.02em" }}>{s.value}</div>
              <div className="text-[7.5px] leading-snug whitespace-pre-line" style={{ color: "#4B5563" }}>{s.label}</div>
            </div>
          ))}
          <div className="rounded-[9px] p-2 flex flex-col gap-1" style={{ border: "1px solid #E7EAEF", background: "#FBFCFD" }}>
            <div className="flex items-baseline gap-1">
              <div className="text-[15px] font-bold" style={{ color: "#2563EB", letterSpacing: "-.02em" }}>4,9</div>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l2.9 6.3 6.9.8-5 4.7 1.3 6.8L12 17.3 5.9 20.6 7.2 13.8 2.2 9.1l6.9-.8L12 2z"></path></svg>
            </div>
            <div className="text-[7.5px] leading-snug" style={{ color: "#4B5563" }}>Rating<br />Google</div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center gap-2.5 rounded-xl bg-white px-3 py-2"
        style={{ right: -6, bottom: -12, transform: "rotate(-3deg)", border: "1px solid #D8DCE3", boxShadow: "0 18px 32px rgba(0,0,0,.5)" }}
      >
        <div className="flex">
          <div className="w-[21px] h-[21px] rounded-full grid place-items-center text-[8px] font-bold" style={{ background: "#DBEAFE", border: "2px solid #FFFFFF", color: "#1D4ED8" }}>AS</div>
          <div className="w-[21px] h-[21px] rounded-full grid place-items-center text-[8px] font-bold -ml-2" style={{ background: "#FEF3C7", border: "2px solid #FFFFFF", color: "#B45309" }}>TW</div>
          <div className="w-[21px] h-[21px] rounded-full grid place-items-center text-[8px] font-bold -ml-2" style={{ background: "#DCFCE7", border: "2px solid #FFFFFF", color: "#15803D" }}>RH</div>
        </div>
        <div className="text-[9px] leading-snug" style={{ color: "#4B5563" }}>Dipercaya<br /><span style={{ color: "#111827", fontWeight: 700 }}>120+ UMKM</span></div>
      </div>
    </div>
  );
}

function CustomVisual() {
  const chips: { label: string; rotate: number; bg: string; border: string; color: string; weight: number; shadow?: boolean }[] = [
    { label: "AI Integration", rotate: -5, bg: "#EFF6FF", border: "#BFDBFE", color: "#1D4ED8", weight: 600, shadow: true },
    { label: "Automation", rotate: 3, bg: "#FFFFFF", border: "#DDE1E8", color: "#1F2937", weight: 500, shadow: true },
    { label: "API Development", rotate: 2, bg: "#F7F8FA", border: "#E7EAEF", color: "#4B5563", weight: 400 },
    { label: "WhatsApp API", rotate: -3, bg: "#ECFDF5", border: "#A7F3D0", color: "#047857", weight: 600, shadow: true },
    { label: "Payment Gateway", rotate: 4, bg: "#F7F8FA", border: "#E7EAEF", color: "#4B5563", weight: 400 },
    { label: "Dashboard Analytics", rotate: -2, bg: "#F7F8FA", border: "#E7EAEF", color: "#4B5563", weight: 400 },
    { label: "Integrasi ERP", rotate: 5, bg: "#F7F8FA", border: "#E7EAEF", color: "#4B5563", weight: 400 },
  ];
  return (
    <div
      className="absolute inset-0 rounded-[14px] bg-white overflow-hidden flex flex-col"
      style={{ border: "1px solid #D8DCE3", boxShadow: "0 14px 34px rgba(0,0,0,.45)" }}
    >
      <div className="flex-1 flex flex-wrap content-center justify-center gap-2 px-3.5 py-3.5">
        {chips.map((c) => (
          <div
            key={c.label}
            className="rounded-[10px] px-2.5 py-1.5 text-[10.5px]"
            style={{
              transform: `rotate(${c.rotate}deg)`,
              background: c.bg,
              border: `1px solid ${c.border}`,
              color: c.color,
              fontWeight: c.weight,
              boxShadow: c.shadow ? "0 8px 16px rgba(15,23,42,.12)" : undefined,
            }}
          >
            {c.label}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 px-3.5 py-2" style={{ borderTop: "1px solid #EEF0F4", background: "#F7F8FA" }}>
        <div className="w-[7px] h-[7px] rounded-full shrink-0" style={{ background: "#2563EB" }} />
        <div className="text-[8.5px]" style={{ color: "#4B5563", fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace", letterSpacing: ".04em" }}>
          brief → rancang → bangun → rilis
        </div>
        <div className="ml-auto rounded-full px-1.5 py-0.5 text-[8px] font-semibold" style={{ color: "#1D4ED8", background: "#EFF6FF", border: "1px solid #BFDBFE" }}>30+ integrasi</div>
      </div>
    </div>
  );
}

function AcademicVisual() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 rounded-[14px] bg-white flex flex-col gap-2 px-3.5 py-3"
        style={{ border: "1px solid #D8DCE3", boxShadow: "0 14px 34px rgba(0,0,0,.45)" }}
      >
        <div className="text-[11px] font-bold" style={{ color: "#111827", letterSpacing: "-.01em" }}>Sistem Informasi Perpustakaan</div>
        <div className="text-[8px] -mt-1" style={{ color: "#6B7280" }}>Skripsi · Teknik Informatika</div>
        {[
          { label: "Bab I", title: "Pendahuluan", done: true },
          { label: "Bab II", title: "Tinjauan Pustaka", done: true },
          { label: "Bab III", title: "Metodologi Penelitian", done: false },
        ].map((b) => (
          <div key={b.label} className="flex items-center gap-2.5">
            {b.done ? (
              <div className="w-4 h-4 rounded-[5px] grid place-items-center text-white text-[9px] font-bold shrink-0" style={{ background: "#059669" }}>✓</div>
            ) : (
              <div className="w-4 h-4 rounded-[5px] shrink-0" style={{ border: "1px solid #D8DCE3", background: "#F7F8FA" }} />
            )}
            <div className="flex-1">
              <div className="text-[7.5px] uppercase" style={{ color: "#6B7280", letterSpacing: ".08em" }}>{b.label}</div>
              <div className="text-[9.5px] font-medium" style={{ color: b.done ? "#111827" : "#4B5563" }}>{b.title}</div>
            </div>
            <div className="text-[7.5px] font-semibold" style={{ color: b.done ? "#047857" : "#6B7280" }}>{b.done ? "Selesai" : "Revisi"}</div>
          </div>
        ))}
        <div className="mt-auto flex flex-col gap-1" style={{ paddingRight: 104 }}>
          <div className="flex justify-between text-[7px] uppercase" style={{ color: "#6B7280", letterSpacing: ".06em" }}>
            <span>Progres keseluruhan</span>
            <span className="font-bold" style={{ color: "#111827" }}>66%</span>
          </div>
          <div className="h-[5px] rounded-full overflow-hidden" style={{ background: "#EEF0F4" }}>
            <div className="h-full rounded-full" style={{ width: "66%", background: "#2563EB" }} />
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2.5"
        style={{ right: -10, bottom: -12, transform: "rotate(-3deg)", border: "1px solid #D8DCE3", boxShadow: "0 18px 32px rgba(0,0,0,.5)" }}
      >
        <div
          className="w-[34px] h-[34px] rounded-full grid place-items-center"
          style={{ background: "conic-gradient(#2563EB 0 66%, #E7EAEF 66% 100%)" }}
        >
          <div className="w-[25px] h-[25px] rounded-full bg-white grid place-items-center text-[8px] font-bold" style={{ color: "#111827" }}>66%</div>
        </div>
        <div className="text-[9px] leading-snug" style={{ color: "#4B5563" }}>Menuju<br /><span style={{ color: "#111827", fontWeight: 700 }}>sidang</span></div>
      </div>
    </div>
  );
}

const VISUALS: Record<ServiceVisualVariant, () => React.JSX.Element> = {
  web: WebVisual,
  folio: FolioVisual,
  shop: ShopVisual,
  biz: BizVisual,
  custom: CustomVisual,
  academic: AcademicVisual,
};

export function ServiceVisual({ variant, className }: { variant: ServiceVisualVariant; className?: string }) {
  const Visual = VISUALS[variant];
  return (
    <div className={`relative w-full h-full min-w-[200px] min-h-[144px] ${className ?? ""}`} style={FONT}>
      <Visual />
    </div>
  );
}

export default ServiceVisual;
