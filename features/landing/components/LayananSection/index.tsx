"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { typeUrl, imagePlusUrl, squareUrl, threeDotUrl, portfolioIllustrationAsset, layananMockups } from "@/constants/assets";
import { WordsReveal, CountUp } from "@/components/common";
import { bsLayananHeader, bsLayananCards, type LayananCard } from "@/constants/landing";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LayoutTemplate,
  Building2,
  ShoppingCart,
  GraduationCap,
  TrendingUp
} from "lucide-react";

const IconMap: Record<string, React.ComponentType<any>> = {
  LayoutTemplate,
  Building2,
  ShoppingCart,
  GraduationCap,
};

function FloatingBadge({
  value,
  label,
  trend,
  className = "",
  size = "normal"
}: {
  value: string;
  label: string;
  trend?: string;
  className?: string;
  size?: "normal" | "small";
}) {
  return (
    <div
      className={`absolute z-20 bg-neutral-900/95 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col items-start text-left ${
        size === "small"
          ? "p-2.5 rounded-xl min-w-[110px] sm:min-w-[130px]"
          : "p-3.5 rounded-2xl min-w-[140px] sm:min-w-[170px]"
      } ${className}`}
    >
      <div className="flex items-center gap-1.5 flex-wrap">
        <span
          className={`font-semibold text-neutral-100 tracking-tight ${
            size === "small" ? "text-lg sm:text-xl" : "text-2xl sm:text-3xl"
          }`}
        >
          {value}
        </span>
        {trend && (
          <span
            className={`inline-flex items-center gap-0.5 font-semibold text-emerald-400 bg-emerald-500/10 rounded-full ${
              size === "small" ? "text-[8px] px-1 py-0.5" : "text-[10px] px-1.5 py-0.5"
            }`}
          >
            <TrendingUp className="size-2.5 shrink-0" />
            {trend}
          </span>
        )}
      </div>
      <span
        className={`text-neutral-400 font-medium leading-normal mt-0.5 ${
          size === "small" ? "text-[9px] sm:text-[10px]" : "text-[10px] sm:text-xs"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function ListItem({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl ${
        active
          ? "bg-white/5 bg-gradient-to-r from-[#999999]/20 via-transparent to-transparent border border-white/10 border-r-transparent border-b-transparent"
          : "border border-transparent"
      }`}
    >
      <div
        className={`size-8 rounded-md flex items-center justify-center ${
          active ? "bg-white/80" : "bg-white/5 border border-white/10"
        }`}
      >
        <img
          src={icon}
          alt=""
          width={16}
          height={16}
          style={active ? { filter: "invert(1)" } : undefined}
        />
      </div>
      <span className={`text-sm text-neutral-100 ${active ? "" : "opacity-60"}`}>{label}</span>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between mb-12 md:mb-16 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-6 w-full md:max-w-[690px]"
      >
        <WordsReveal
          as="h2"
          className="text-4xl leading-tight text-neutral-900 dark:text-neutral-100 font-normal"
          text={bsLayananHeader.headline}
        />
        <div className="flex items-center gap-4">
          <Button variant="primary" href={bsLayananHeader.cta.href}>
            {bsLayananHeader.cta.label}
          </Button>
          <span className="md:hidden text-base text-neutral-500">{bsLayananHeader.eyebrow}</span>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="hidden md:block text-xl text-neutral-500 text-right shrink-0"
      >
        {bsLayananHeader.eyebrow}
      </motion.p>
    </div>
  );
}

function LayananCardComponent({ card, countActive }: { card: LayananCard; countActive: boolean }) {
  const cardDelays: Record<string, number> = {
    "sistem-informasi": 0.1,
    "portofolio": 0.2,
    "landing-page": 0.3,
    "company-profile": 0.4,
    "e-commerce": 0.5,
    "paket-skripsi": 0.6,
  };

  const delay = cardDelays[card.id] || 0.1;

  const cardAnim = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  };

  if (card.id === "sistem-informasi") {
    return (
      <motion.div
        {...cardAnim}
        className="relative h-full min-h-[380px] md:min-h-0 md:h-full rounded-3xl overflow-visible bg-neutral-950 flex flex-col items-center text-center pt-8 px-6 pb-6"
        style={{ backgroundImage: "radial-gradient(ellipse at 31% -7%, rgba(255,255,255,0.05), transparent)" }}
      >
        <WordsReveal as="h3" className="text-3xl text-neutral-100 leading-tight" text={card.title} delay={0.2} />
        <WordsReveal as="p" className="mt-3 text-sm opacity-40 text-neutral-100 max-w-[300px]" text={card.description} delay={0.5} step={0.04} duration={0.6} />
        
        {card.floatingStat && (
          <FloatingBadge
            value={card.floatingStat.value}
            label={card.floatingStat.label}
            trend={card.floatingStat.trend}
            className="bottom-[145px] -right-[5px]"
          />
        )}

        <motion.div
          className="absolute bottom-0 left-5 right-5 h-[170px] rounded-t-2xl overflow-hidden border border-white/10 border-b-0 mt-auto"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-neutral-950/80 p-2.5 pt-4 flex flex-col justify-end gap-1">
            {[
              { icon: typeUrl, label: "Booking", active: true },
              { icon: imagePlusUrl, label: "Inventaris" },
              { icon: squareUrl, label: "Absensi" },
            ].map((it) => (
              <ListItem key={it.label} icon={it.icon} label={it.label} active={it.active} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  if (card.id === "portofolio") {
    return (
      <motion.div
        {...cardAnim}
        className="relative h-full min-h-[380px] md:min-h-0 md:h-full rounded-3xl overflow-visible bg-neutral-900 flex flex-col items-center text-center pt-8 px-6 pb-6"
      >
        <WordsReveal as="h3" className="text-3xl text-neutral-100 leading-tight" text={card.title} delay={0.3} />
        <WordsReveal as="p" className="mt-3 text-sm opacity-40 text-neutral-100 max-w-[320px]" text={card.description} delay={0.6} step={0.04} duration={0.6} />
        
        {card.floatingStat && (
          <FloatingBadge
            value={card.floatingStat.value}
            label={card.floatingStat.label}
            trend={card.floatingStat.trend}
            className="bottom-[145px] -right-[5px]"
          />
        )}

        <motion.div
          className="absolute bottom-0 w-[85%] max-w-[320px] left-1/2 h-[170px] mt-auto"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          style={{ x: "-50%" }}
        >
          {/* Split device metaphor: Laptop on the left, Phone overlapping on the right */}
          <div className="relative w-full h-full flex items-end">
            {/* Laptop Mockup */}
            <div className="w-[72%] h-[150px] bg-zinc-950 border border-white/15 rounded-t-2xl overflow-hidden shadow-2xl flex flex-col">
              {/* Laptop Header */}
              <div className="h-6 bg-zinc-900 border-b border-white/5 flex items-center px-3 gap-1.5 shrink-0 justify-between">
                <div className="flex gap-1">
                  <div className="size-1.5 rounded-full bg-red-500/80" />
                  <div className="size-1.5 rounded-full bg-yellow-500/80" />
                  <div className="size-1.5 rounded-full bg-green-500/80" />
                </div>
                <div className="w-24 h-3 bg-zinc-800/80 rounded border border-white/5 flex items-center justify-center text-[5px] text-zinc-500 font-mono scale-[0.85]">
                  beyond-studio.com/portfolio
                </div>
                <div className="size-1.5 opacity-0" />
              </div>
              {/* Laptop Screen Content */}
              <div className="flex-1 p-3 flex flex-col gap-2 bg-gradient-to-b from-zinc-900 to-zinc-950 text-left">
                <div className="h-2 w-12 bg-blue-500/20 rounded border border-blue-500/30 flex items-center justify-center text-[5px] font-bold text-blue-400">
                  CREATIVE DIR
                </div>
                <div className="text-[10px] font-bold text-white/90 leading-tight">
                  Design & Code<br />Showcase 2026
                </div>
                {/* Simulated work grid */}
                <div className="grid grid-cols-3 gap-1.5 mt-1">
                  <div className="h-10 bg-zinc-800/60 border border-white/5 rounded p-1 flex flex-col justify-between">
                    <div className="size-2 rounded-full bg-blue-500" />
                    <div className="h-1.5 w-full bg-white/15 rounded" />
                  </div>
                  <div className="h-10 bg-zinc-800/60 border border-white/5 rounded p-1 flex flex-col justify-between">
                    <div className="size-2 rounded-full bg-amber-500" />
                    <div className="h-1.5 w-full bg-white/15 rounded" />
                  </div>
                  <div className="h-10 bg-zinc-800/60 border border-white/5 rounded p-1 flex flex-col justify-between">
                    <div className="size-2 rounded-full bg-emerald-500" />
                    <div className="h-1.5 w-full bg-white/15 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Mobile Phone Mockup */}
            <div className="absolute right-0 bottom-0 w-[35%] h-[130px] bg-zinc-950 border-2 border-zinc-800 rounded-t-xl overflow-hidden shadow-2xl flex flex-col z-20">
              {/* Phone Status Bar */}
              <div className="h-4 bg-zinc-900 border-b border-white/5 flex justify-between items-center px-2 shrink-0">
                <div className="text-[5px] text-zinc-400 font-bold scale-[0.85]">9:41</div>
                <div className="size-1 rounded-full bg-zinc-700" />
                <div className="w-3 h-1 bg-zinc-700 rounded-full scale-[0.85]" />
              </div>
              {/* Phone Content */}
              <div className="flex-1 p-2 flex flex-col gap-2 bg-zinc-900 text-left">
                <div className="flex items-center gap-1">
                  <div className="size-4 rounded-full bg-neutral-700 flex items-center justify-center text-[5px] font-bold text-white font-mono scale-[0.85]">
                    JD
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[5px] font-bold text-white scale-[0.85] origin-left">Jane Doe</div>
                    <div className="text-[4px] text-zinc-400 scale-[0.85] origin-left">UI Designer</div>
                  </div>
                </div>
                <div className="h-1 w-full bg-white/10 rounded" />
                <div className="h-1 w-[80%] bg-white/10 rounded" />
                <div className="grid grid-cols-2 gap-1 mt-1">
                  <div className="h-12 bg-zinc-800/80 border border-white/5 rounded flex flex-col justify-end p-0.5">
                    <div className="h-1.5 w-full bg-white/20 rounded" />
                  </div>
                  <div className="h-12 bg-zinc-800/80 border border-white/5 rounded flex flex-col justify-end p-0.5">
                    <div className="h-1.5 w-full bg-white/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  if (card.id === "landing-page") {
    return (
      <motion.div
        {...cardAnim}
        className="relative h-full min-h-[380px] md:min-h-0 md:h-full rounded-3xl overflow-visible bg-neutral-950 border border-white/5 flex flex-col pt-6 px-6 pb-6 text-center items-center"
      >
        <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-3 shrink-0">
          <LayoutTemplate className="size-5 text-blue-500" />
        </div>
        <WordsReveal as="h3" className="text-xl text-neutral-100 leading-tight mb-2 font-normal" text={card.title} delay={0.4} />
        <WordsReveal as="p" className="text-xs opacity-40 text-neutral-100 leading-relaxed max-w-[280px]" text={card.description} delay={0.6} step={0.04} duration={0.6} />

        {card.floatingStat && (
          <FloatingBadge
            value={card.floatingStat.value}
            label={card.floatingStat.label}
            trend={card.floatingStat.trend}
            size="small"
            className="bottom-[105px] -right-[4px]"
          />
        )}

        <motion.div
          className="absolute bottom-0 w-[75%] max-w-[280px] left-1/2 aspect-video h-[120px] border border-white/10 border-b-0 rounded-t-xl overflow-hidden mt-auto bg-zinc-950 flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          style={{ x: "-50%" }}
        >
          <img
            src={layananMockups.landingPage}
            alt="Landing Page Mockup"
            className="w-full h-full object-cover object-top select-none pointer-events-none"
          />
        </motion.div>
      </motion.div>
    );
  }

  if (card.id === "company-profile") {
    return (
      <motion.div
        {...cardAnim}
        className="relative h-full min-h-[380px] md:min-h-0 md:h-full rounded-3xl overflow-visible bg-neutral-950 border border-white/5 flex flex-col pt-6 px-6 pb-6 text-center items-center"
      >
        <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-3 shrink-0">
          <Building2 className="size-5 text-blue-500" />
        </div>
        <WordsReveal as="h3" className="text-xl text-neutral-100 leading-tight mb-2 font-normal" text={card.title} delay={0.5} />
        <WordsReveal as="p" className="text-xs opacity-40 text-neutral-100 leading-relaxed max-w-[280px]" text={card.description} delay={0.7} step={0.04} duration={0.6} />

        {card.floatingStat && (
          <FloatingBadge
            value={card.floatingStat.value}
            label={card.floatingStat.label}
            trend={card.floatingStat.trend}
            size="small"
            className="bottom-[105px] -right-[4px]"
          />
        )}

        <motion.div
          className="absolute bottom-0 w-[80%] h-[120px] border border-white/10 border-b-0 rounded-t-xl overflow-hidden mt-auto bg-zinc-950 flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Browser Window Header */}
          <div className="h-5 bg-zinc-900 border-b border-white/5 flex items-center px-2 gap-1.5 shrink-0 justify-between">
            <div className="flex gap-1">
              <div className="size-1.5 rounded-full bg-red-500/80" />
              <div className="size-1.5 rounded-full bg-yellow-500/80" />
              <div className="size-1.5 rounded-full bg-green-500/80" />
            </div>
            <div className="w-32 h-3.5 bg-zinc-800/80 rounded border border-white/5 flex items-center justify-center text-[5px] text-zinc-500 font-mono scale-[0.85]">
              company-profile.co.id
            </div>
            <div className="size-1.5 opacity-0" />
          </div>

          {/* Horizontal Tab Bar */}
          <div className="h-5.5 bg-zinc-900/40 border-b border-white/5 flex items-center px-3 justify-between shrink-0">
            <div className="text-[6px] font-bold text-white/90 scale-[0.85] origin-left">CORP_LOGO</div>
            <div className="flex items-center gap-2.5">
              <div className="text-[5px] font-bold text-blue-400 border-b border-blue-400 pb-0.5 scale-[0.85] flex items-center gap-0.5">
                <span>Beranda</span>
              </div>
              <div className="text-[5px] text-zinc-400 font-medium scale-[0.85] flex items-center gap-0.5">
                <span>Layanan</span>
              </div>
              <div className="text-[5px] text-zinc-400 font-medium scale-[0.85] flex items-center gap-0.5">
                <span>Tentang</span>
              </div>
              <div className="text-[5px] text-zinc-400 font-medium scale-[0.85] flex items-center gap-0.5">
                <span>Kontak</span>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 p-2.5 flex flex-col gap-2 bg-zinc-950 text-left">
            <div className="text-[9px] font-bold text-white/95 leading-tight">
              Inovasi Tanpa Batas untuk Bisnis Anda
            </div>
            <div className="h-1.5 w-[90%] bg-white/10 rounded" />
            <div className="h-1.5 w-[75%] bg-white/10 rounded" />
            {/* Grid layout */}
            <div className="grid grid-cols-2 gap-2 mt-0.5">
              <div className="p-1 bg-zinc-900 border border-white/5 rounded flex flex-col gap-1">
                <div className="h-1 w-8 bg-white/25 rounded" />
                <div className="h-1.5 w-full bg-white/10 rounded" />
              </div>
              <div className="p-1 bg-zinc-900 border border-white/5 rounded flex flex-col gap-1">
                <div className="h-1 w-8 bg-white/25 rounded" />
                <div className="h-1.5 w-full bg-white/10 rounded" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  if (card.id === "e-commerce") {
    return (
      <motion.div
        {...cardAnim}
        className="relative h-full min-h-[380px] md:min-h-0 md:h-full rounded-3xl overflow-hidden flex flex-col"
        style={{ backgroundColor: "#D0C9B9" }}
      >
        <div className="flex items-start justify-between p-5 pb-0">
          <div>
            <WordsReveal as="p" className="text-[10px] uppercase tracking-wider font-semibold opacity-40 text-neutral-900 mb-0.5" text="Estimasi Penjualan" delay={0.6} step={0.08} />
            <WordsReveal
              as="h3"
              className="text-xl text-neutral-900 leading-tight font-normal [font-family:'Inter_Tight',sans-serif]"
              text={card.title}
              delay={0.75}
              step={0.07}
            />
            <WordsReveal as="p" className="mt-1.5 text-[11px] opacity-60 text-neutral-900 leading-normal max-w-[240px]" text={card.description} delay={0.9} />
          </div>
          <img src={threeDotUrl} alt="" className="mt-2 shrink-0" />
        </div>
        <motion.div
          className="absolute bottom-[55px] left-0 w-full h-[125px] px-6 flex items-end justify-between gap-2 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.7 }}
        >
          {["33%", "16%", "72%", "36%", "88%", "22%"].map((h, i) => (
            <motion.div
              key={i}
              className="relative w-full flex items-end"
              style={{ height: h }}
              variants={{ hidden: {}, visible: {} }}
            >
              <motion.div
                className="relative w-full h-full flex flex-col"
                variants={{
                  hidden: { y: "100%" },
                  visible: { y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                }}
              >
                <div className="w-full h-1 bg-black shrink-0 z-20" />
                <div className="relative w-full flex-1 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 w-full z-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(-45deg, rgba(0,0,0,0.06) 0, rgba(0,0,0,0.06) 8px, rgba(0,0,0,0.12) 8px, rgba(0,0,0,0.12) 16px)",
                      backgroundSize: "22.63px 22.63px",
                    }}
                    animate={{ backgroundPosition: ["0px 0px", "22.63px 0px"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black z-10"
                    variants={{
                      hidden: { y: "0%" },
                      visible: { y: "-100%", transition: { duration: 0.4, delay: 0.4, ease: "easeOut" } },
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-[55px] flex items-end pb-3 px-5 justify-between flex-wrap gap-2">
          <div className="flex items-end gap-1.5">
            <span className="text-2xl text-neutral-900 font-medium leading-none">
              <CountUp end={1250} duration={2500} active={countActive} />
            </span>
            <span className="text-[10px] text-neutral-900/80 leading-none pb-0.5 font-medium">pesanan/bulan</span>
          </div>
          {card.floatingStat?.trend && (
            <span className="inline-flex items-center gap-0.5 text-[9px] font-semibold text-neutral-900 bg-black/10 px-1.5 py-0.5 rounded-full mb-0.5">
              <TrendingUp className="size-2 shrink-0" />
              {card.floatingStat.trend}
            </span>
          )}
        </div>
      </motion.div>
    );
  }

  if (card.id === "paket-skripsi") {
    return (
      <motion.div
        {...cardAnim}
        className="relative h-full min-h-[380px] md:min-h-0 md:h-full rounded-3xl overflow-visible bg-neutral-950 border border-white/5 flex flex-col pt-6 px-6 pb-6 text-center items-center"
      >
        {card.badge && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0 text-[10px]">{card.badge}</Badge>
          </div>
        )}
        <div className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-3 shrink-0">
          <GraduationCap className="size-5 text-blue-500" />
        </div>
        <WordsReveal as="h3" className="text-xl text-neutral-100 leading-tight mb-2 font-normal" text={card.title} delay={0.6} />
        <WordsReveal as="p" className="text-xs opacity-40 text-neutral-100 leading-relaxed max-w-[280px]" text={card.description} delay={0.8} step={0.04} duration={0.6} />

        {card.floatingStat && (
          <FloatingBadge
            value={card.floatingStat.value}
            label={card.floatingStat.label}
            trend={card.floatingStat.trend}
            size="small"
            className="bottom-[105px] -right-[4px]"
          />
        )}

        <motion.div
          className="absolute bottom-0 w-[80%] h-[120px] border border-white/10 border-b-0 rounded-t-xl overflow-hidden mt-auto bg-zinc-900 p-2.5 flex flex-col gap-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Header & Progress Bar */}
          <div className="flex flex-col gap-1 text-left w-full">
            <div className="flex justify-between items-center w-full">
              <span className="text-[7px] font-bold text-zinc-400 tracking-wider font-sans">LOG TUGAS AKHIR / SKRIPSI</span>
              <span className="text-[7px] font-bold text-blue-400 font-mono">80%</span>
            </div>
            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full w-[80%] bg-blue-500 rounded-full" />
            </div>
          </div>

          {/* Chapters Checklist */}
          <div className="flex-1 flex flex-col gap-1 text-left w-full">
            {[
              { id: "BAB I", title: "Pendahuluan", checked: true },
              { id: "BAB II", title: "Tinjauan Pustaka", checked: true },
              { id: "BAB III", title: "Metodologi", checked: true },
              { id: "BAB IV", title: "Implementasi", checked: true },
              { id: "BAB V", title: "Kesimpulan & Saran", checked: false },
            ].map((ch) => (
              <div key={ch.id} className="flex items-center gap-1.5">
                <div className={`size-2.5 rounded-sm flex items-center justify-center border ${
                  ch.checked 
                    ? "bg-blue-600 border-blue-600 text-white" 
                    : "border-white/15 bg-zinc-950"
                }`}>
                  {ch.checked && <span className="text-[6px] scale-[0.8] font-bold leading-none -mt-[0.5px]">✓</span>}
                </div>
                <div className="flex items-center gap-1 overflow-hidden">
                  <span className="text-[6px] font-bold text-white/90 font-mono shrink-0">{ch.id}:</span>
                  <span className="text-[5.5px] text-zinc-400 font-medium truncate font-sans">{ch.title}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return null;
}

function LayananCards() {
  const [countActive, setCountActive] = useState(false);

  return (
    <motion.div
      className="flex flex-col gap-5"
      onViewportEnter={() => setCountActive(true)}
    >
      {/* Desktop layout: Asymmetric area pattern */}
      <div
        className="hidden md:grid gap-5"
        style={{
          gridTemplateAreas: `
            "step account account"
            "step trusted loan"
            "deals deals track"
          `,
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "minmax(330px, auto) minmax(310px, auto) minmax(320px, auto)",
        }}
      >
        {bsLayananCards.map((card) => (
          <div key={card.id} style={{ gridArea: card.gridArea }}>
            <LayananCardComponent card={card} countActive={countActive} />
          </div>
        ))}
      </div>

      {/* Mobile fallback: simple stacked column, ignore grid areas entirely */}
      <div className="grid grid-cols-1 gap-5 md:hidden">
        {bsLayananCards.map((card) => (
          <LayananCardComponent key={card.id} card={card} countActive={countActive} />
        ))}
      </div>
    </motion.div>
  );
}

export function LayananSection() {
  return (
    <section className="px-[20px] py-16 md:py-20" id="layanan">
      <SectionHeader />
      <LayananCards />
    </section>
  );
}

export default LayananSection;
