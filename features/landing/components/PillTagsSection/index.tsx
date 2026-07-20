"use client";

import type * as React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MessageSquare,
  FileText,
  Terminal,
  Rocket,
  GitPullRequest,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Badge } from "@/components/ui/badge";
import { useReducedMotion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    label: "Konsultasi",
    description: "Diskusi kebutuhan awal",
    icon: MessageSquare,
    bg: "#D0C9B9",
    text: "text-neutral-900",
    desc: "text-neutral-900/60",
    iconBg: "bg-black/5",
  },
  {
    number: "02",
    label: "Penawaran",
    description: "Proposal & kesepakatan harga",
    icon: FileText,
    bg: "#131113",
    text: "text-white",
    desc: "text-neutral-400",
    iconBg: "bg-white/10",
  },
  {
    number: "03",
    label: "Pengerjaan",
    description: "Development website",
    icon: Terminal,
    bg: "#F7C8FF",
    text: "text-neutral-900",
    desc: "text-neutral-900/60",
    iconBg: "bg-black/5",
  },
  {
    number: "04",
    label: "Go Live",
    description: "Peluncuran & optimalisasi",
    icon: Rocket,
    bg: "#131113",
    text: "text-white",
    desc: "text-neutral-400",
    iconBg: "bg-white/10",
  },
  {
    number: "05",
    label: "Revisi",
    description: "Penyesuaian hasil akhir",
    icon: GitPullRequest,
    bg: "#131113",
    text: "text-white",
    desc: "text-neutral-400",
    iconBg: "bg-white/10",
  },
  {
    number: "06",
    label: "Maintenance",
    description: "Dukungan jangka panjang",
    icon: Wrench,
    bg: "#81FFBD",
    text: "text-neutral-900",
    desc: "text-neutral-900/60",
    iconBg: "bg-black/5",
  },
] as const;

function Row({
  step,
  index,
  isDark,
}: {
  step: (typeof STEPS)[number];
  index: number;
  isDark: boolean;
}) {
  const Icon = step.icon;
  const isLast = index === STEPS.length - 1;
  const accentColor = isDark ? "#FFFFFF" : "#131113";

  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative flex gap-5 md:gap-7"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
    >
      {/* Rail column */}
      <div className="relative flex flex-col items-center shrink-0 w-11 md:w-12">
        <div
          className="relative z-10 flex items-center justify-center size-11 md:size-12 rounded-full font-mono font-bold text-[13px] md:text-sm shrink-0 transition-colors duration-300"
          style={{
            backgroundColor: isDark ? "#171717" : "#FFFFFF",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
            color: isDark ? "#A3A3A3" : "#737373",
          }}
        >
          {step.number}
        </div>
        {!isLast && (
          <div
            className="w-[2px] md:w-[3px] flex-1 mt-1 mb-[-4px]"
            style={{
              backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
              minHeight: "100%",
            }}
          />
        )}
        {/* Mask to hide the animated fill line below the last step */}
        {isLast && (
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-11 md:top-12 -bottom-32 w-8 z-[5] transition-colors duration-500 ${isDark ? "bg-black" : "bg-slate-50"}`}
          />
        )}
      </div>

      {/* Content card */}
      <div
        className={`group flex-1 min-w-0 mb-4 md:mb-5 rounded-2xl px-5 py-5 md:px-6 md:py-6 flex flex-col sm:flex-row sm:items-center gap-4 transition-[transform,background-color] duration-300 hover:-translate-y-0.5 ${step.text}`}
        style={{ backgroundColor: step.bg }}
      >
        <div
          className={`flex items-center justify-center size-11 md:size-12 rounded-xl shrink-0 transition-colors duration-300 ${step.iconBg}`}
        >
          <Icon className={`size-5 ${step.text}`} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-semibold leading-tight">
            {step.label}
          </h3>
          <p className={`text-sm md:text-[15px] mt-0.5 ${step.desc}`}>
            {step.description}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 pl-0 sm:pl-2">
          <ArrowRight
            className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block"
            style={{ color: accentColor }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function PillTagsSection() {
  const { theme } = useTheme();
  const isDark = theme !== "light";
  const sectionBg = isDark ? "bg-black" : "bg-slate-50";
  const accentColor = isDark ? "#FFFFFF" : "#131113";

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.6"],
  });
  const railScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={`${sectionBg} pb-24 md:pb-32 transition-colors duration-500`}>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-5 mb-16 md:mb-20 flex flex-col md:items-center md:text-center">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl flex flex-col md:items-center gap-5"
        >
          <Badge className="tracking-[0.08em] uppercase">
            Alur Kerja Kami
          </Badge>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            Proses Transparan dari Awal Hingga Live.
          </h2>
          <p
            className={`text-lg md:text-xl leading-relaxed max-w-[65ch] mt-2 ${
              isDark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            Setiap proyek mengikuti alur kerja yang jelas. Kamu selalu tahu apa
            yang sedang dikerjakan, kapan target selesai, dan apa langkah
            selanjutnya.
          </p>
        </motion.div>
      </div>

      {/* Pipeline */}
      <div className="max-w-3xl mx-auto px-5" ref={containerRef}>
        <div className="relative">
          {/* animated fill line, sits behind the per-row baseline lines */}
          <motion.div
            className="absolute left-[22px] md:left-[24px] top-0 w-[2px] md:w-[3px] origin-top -translate-x-1/2"
            style={{
              scaleY: railScale,
              height: "100%",
              backgroundColor: accentColor,
              boxShadow: `0 0 8px ${accentColor}`,
            }}
          />
          {STEPS.map((step, index) => (
            <Row key={step.number} step={step} index={index} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PillTagsSection;