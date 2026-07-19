"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  LayoutTemplate,
  Building2,
  LayoutDashboard,
  ShoppingCart,
  Lock,
} from "lucide-react";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

// ---------------------------------------------------------------------------
// Data   semua masih DUMMY, ganti title/description/domain/imageUrl dengan
// data proyek asli sebelum publish.
// ---------------------------------------------------------------------------
type Project = {
  id: string;
  icon: typeof LayoutTemplate;
  category: string;
  title: string;
  description: string;
  domain: string;
  imageUrl: string;
  imageAlt: string;
};

const PROJECTS: Project[] = [
  {
    id: "landing-page",
    icon: LayoutTemplate,
    category: "Landing Page",
    title: "Landing Page Promo Produk Skincare Lokal",
    description:
      "Halaman promosi satu produk dengan fokus konversi   dari headline sampai CTA checkout, semua dirancang buat mempercepat keputusan beli.",
    domain: "skincarelokal.id",
    imageUrl: "/assets/Landing Page.png",
    imageAlt:
      "Screenshot landing page produk skincare dengan hero section dan tombol checkout",
  },
  {
    id: "company-profile",
    icon: Building2,
    category: "Company Profile",
    title: "Company Profile Studio Fotografi",
    description:
      "Website multi halaman menampilkan portofolio jasa, paket harga, dan galeri karya   dibangun supaya klien percaya sejak kunjungan pertama.",
    domain: "studiofotografi.id",
    imageUrl: "/assets/Company Profile.png",
    imageAlt:
      "Screenshot company profile studio fotografi dengan galeri portofolio dan paket layanan",
  },
  {
    id: "sistem-informasi",
    icon: LayoutDashboard,
    category: "Sistem Informasi",
    title: "Sistem Booking Studio Musik",
    description:
      "Sistem reservasi ruang latihan dengan kalender real-time, login multi-role, dan dashboard admin buat pantau jadwal harian.",
    domain: "app.studiomusik.id",
    imageUrl: "/assets/Sistem Informasi.png",
    imageAlt:
      "Screenshot dashboard sistem booking studio musik dengan kalender jadwal dan manajemen ruangan",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    category: "E-Commerce",
    title: "Toko Online Fashion Lokal",
    description:
      "Toko online lengkap dengan payment gateway, manajemen stok, dan ongkir otomatis   dari checkout sampai konfirmasi pembayaran.",
    domain: "fashionlokal.co.id",
    imageUrl: "/assets/Portofolio Ui.png",
    imageAlt:
      "Screenshot toko online fashion dengan katalog produk, keranjang belanja, dan payment gateway",
  },
];

// ---------------------------------------------------------------------------
// Scroll-entrance hook   cuma dipakai buat fade-in pertama kali tiap kartu
// muncul di layar. Tidak ada scroll-math lain: efek tumpuk sepenuhnya CSS
// (position: sticky), sama seperti komponen referensi aslinya.
// ---------------------------------------------------------------------------
function useScrollAnimation() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
}

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------
function AnimatedHeader() {
  const [ref, inView] = useScrollAnimation();

  return (
    <div ref={ref} className="text-center max-w-2xl mx-auto">
      <div
        className={`inline-flex items-center justify-center px-4 py-1 mb-6
          rounded-full border border-border
          text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground
          transition-all duration-500 ease-out motion-reduce:transition-none
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        Hasil Kerja Nyata
      </div>
      <h2
        className={`text-4xl md:text-5xl font-bold leading-[1.15] text-foreground mb-4
          transition-all duration-500 ease-out delay-100 motion-reduce:transition-none
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        Proyek yang Sudah Kami Kerjakan
      </h2>
      <p
        className={`text-lg leading-[1.6] text-muted-foreground
          transition-all duration-500 ease-out delay-200 motion-reduce:transition-none
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        Beberapa contoh nyata dari layanan yang sudah kami kerjakan   dari
        UMKM sampai bisnis yang butuh sistem custom.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Browser-chrome mockup
// ---------------------------------------------------------------------------
function BrowserFrame({
  domain,
  imageUrl,
  imageAlt,
}: {
  domain: string;
  imageUrl: string;
  imageAlt: string;
}) {
  return (
    <div
      className="rounded-2xl p-px"
      style={{
        background:
          "linear-gradient(135deg, color-mix(in srgb, var(--primary) 55%, transparent), color-mix(in srgb, var(--border) 80%, transparent) 45%, transparent 80%)",
      }}
    >
      <div className="rounded-[15px] overflow-hidden bg-surface border border-border shadow-2xl">
        <div className="flex items-center gap-2.5 h-11 px-4 border-b border-border bg-surface">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "var(--primary)" }}
          />
          <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <div className="ml-2 flex-1 max-w-[260px] h-6 rounded-md bg-background border border-border flex items-center px-2.5 gap-1.5">
            <Lock className="w-3 h-3 text-muted-foreground shrink-0" />
            <span className="text-xs text-muted-foreground truncate">
              {domain}
            </span>
          </div>
        </div>
        <div className="relative aspect-[16/10] bg-background">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Satu kartu yang bertumpuk   position: sticky dengan `top` yang SAMA di
// semua kartu adalah kuncinya: kartu berikutnya (lebih akhir di DOM) akan
// menutupi kartu sebelumnya begitu ia sampai di titik sticky yang sama,
// menciptakan efek tumpukan kertas. Tidak ada JS yang menghitung posisi
// scroll   murni CSS, sama seperti komponen referensi.
// ---------------------------------------------------------------------------
function StackedCard({ project, index }: { project: Project; index: number }) {
  const [ref, inView] = useScrollAnimation();
  const Icon = project.icon;

  return (
    <div ref={ref} className="sticky top-0">
      <div
        className={`relative overflow-hidden bg-surface border-t border-border shadow-2xl flex flex-col justify-center
          min-h-[100svh] md:min-h-[100vh]
          transition-all duration-500 ease-out motion-reduce:transition-none
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        {/* Grid backdrop, memudar di tepi */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 90%)",
            opacity: 0.5,
          }}
        />
        {/* Glow lembut di belakang screenshot */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 72% 50%, color-mix(in srgb, var(--primary) 16%, transparent), transparent 70%)",
          }}
        />

        <div
          className="relative max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20
            grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]
            items-center gap-10 lg:gap-16 w-full"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full border border-border w-fit">
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
                {project.category}
              </span>
            </div>
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold leading-[1.15] text-foreground mb-5">
              {project.title}
            </h3>
            <p className="text-base xl:text-lg leading-[1.6] text-muted-foreground max-w-md">
              {project.description}
            </p>
            <span className="inline-block mt-6 text-xs font-mono text-muted-foreground">
              {String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
            </span>
          </div>

          <BrowserFrame
            domain={project.domain}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
          />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Root section
// ---------------------------------------------------------------------------
export function PortfolioSection() {
  const lenis = useSmoothScroll();

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = (e: any) => {
    };

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis]);

  return (
    <section id="portfolio" className="relative bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 lg:pt-32 pb-12">
        <AnimatedHeader />
      </div>
      <div className="relative">
        {PROJECTS.map((project, i) => (
          <StackedCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;