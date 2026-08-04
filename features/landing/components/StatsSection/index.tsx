"use client";

import { useRef } from "react";
import { motion, useInView as useInViewFM, useReducedMotion } from "framer-motion";
import { blueArrowUrl } from "@/constants/assets";
import { CountNumber } from "@/components/common/CountUp";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

const palettes = {
  dark: {
    sectionBg: "bg-black",
    statNumber: "text-neutral-100",
    cardBg: "bg-neutral-900 border border-transparent",
    cardTitle: "text-white",
    baseText: "text-white",
    sweepBar: "bg-white",
    overlayText: "text-stone-950",
    specBorder: "border-white/10",
    specLabel: "text-white/40",
    specDesc: "text-neutral-500",
    accentBar: "bg-primary-hover",
  },
  light: {
    sectionBg: "bg-slate-50",
    statNumber: "text-neutral-900 font-bold",
    cardBg: "bg-white border border-neutral-200/80 shadow-xl",
    cardTitle: "text-neutral-900 font-medium",
    baseText: "text-neutral-900",
    sweepBar: "bg-neutral-900",
    overlayText: "text-white",
    specBorder: "border-neutral-200",
    specLabel: "text-neutral-400",
    specDesc: "text-neutral-500",
    accentBar: "bg-primary",
  },
} as const;

const METRICS = [
  {
    label: "Kepercayaan Pertama",
    value: 94,
    suffix: "%",
    progress: 94,
    desc: "Kesan pertama soal kredibilitas bisnis dibentuk dari tampilan website, sebelum orang baca satu kalimat pun.",
  },
  {
    label: "Respon Lebih Cepat",
    value: 2,
    suffix: "x",
    progress: 100,
    desc: "Klien kami rata-rata dapat pertanyaan atau chat masuk lebih cepat setelah website live, karena orang nggak perlu nanya-nanya dulu, semua sudah jelas di website.",
  },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInViewFM(ref, { once: true, amount: 0 });
  const { theme } = useTheme();
  const isLight = theme === "light";
  const palette = palettes[isLight ? "light" : "dark"];
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  // Cursor choreography keyframes (delays start after card appears ~0.6s).
  // On mobile the card is much narrower, so both the anchor point and the
  // travel distance shrink to keep the "Beyond Team" label from clipping
  // against the card's right edge (card has overflow-hidden).
  const cursorAnchor = isMobile ? { top: "40%", left: "45%" } : { top: "35%", left: "55%" };
  const cursorKeyframes = isMobile
    ? {
        opacity: [0, 1, 1, 1, 1],
        x: [40, -50, 15, 45, 45],
        y: [40, -10, -10, 30, 30],
      }
    : {
        opacity: [0, 1, 1, 1, 1],
        x: [100, -125, 35, 115, 115],
        y: [100, -10, -10, 40, 40],
      };
  const cursorRestPosition = isMobile ? { x: 45, y: 30 } : { x: 115, y: 40 };

  const cursorTransition = {
    duration: 2.6,
    delay: 0.9,
    times: [0, 0.25, 0.6, 0.85, 1],
    ease: "easeInOut" as const,
  };

  return (
    <section ref={ref} className={`${palette.sectionBg} py-24 md:py-32 transition-colors duration-500`}>
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-5 mb-16 md:mb-20 flex flex-col items-center text-center">
        <motion.div
          className="flex flex-col items-center gap-5 max-w-3xl"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge className="w-fit tracking-[0.08em] uppercase">
            Mengapa Beyond Studio
          </Badge>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] ${theme === "light" ? "text-neutral-900" : "text-white"}`}>
            Website yang Dibangun untuk Jangka Panjang.
          </h2>
        </motion.div>

        <motion.p
          className={`max-w-3xl text-lg md:text-xl leading-relaxed mt-6 ${theme === "light" ? "text-neutral-600" : "text-neutral-400"}`}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Kami memahami bahwa setiap bisnis memiliki kebutuhan yang berbeda. Oleh karena itu, kami mengutamakan komunikasi yang transparan dan proses pengembangan yang disesuaikan, guna menghasilkan website yang benar-benar mendukung tujuan bisnis Anda.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-5 flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-12">
        {/* Metrics   spec-sheet rows, no card chrome: label left, number right, hairline dividers */}
        <div className={`w-full lg:w-[380px] shrink-0 border-t ${palette.specBorder} self-center`}>
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              className={`flex items-start justify-between gap-6 py-7 border-b ${palette.specBorder}`}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.1 }}
            >
              <div className="flex flex-col gap-2 max-w-[20ch]">
                <span className={`text-[11px] font-mono tracking-[0.15em] uppercase ${palette.specLabel}`}>
                  {m.label}
                </span>
                <p className={`text-sm leading-snug ${palette.specDesc}`}>{m.desc}</p>
              </div>

              <div className="flex flex-col items-end shrink-0">
                <span className={`text-4xl md:text-5xl leading-none tabular-nums ${palette.statNumber}`}>
                  <CountNumber to={m.value} start={inView} />{m.suffix}
                </span>
                <div className={`mt-3 h-[2px] w-16 rounded-full ${isLight ? "bg-neutral-200" : "bg-white/10"} overflow-hidden`}>
                  <motion.div
                    className={`h-full rounded-full ${palette.accentBar} origin-left`}
                    initial={shouldReduceMotion ? undefined : { scaleX: 0 }}
                    animate={inView ? { scaleX: m.progress / 100 } : { scaleX: 0 }}
                    transition={{ duration: 0.9, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex-1 flex lg:items-center">
          {/* Multiplayer card */}
          <motion.div
            className={`relative ${palette.cardBg} rounded-[2rem] p-8 sm:p-12 w-full max-w-[570px] overflow-hidden transition-colors duration-500`}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            <p className={`text-2xl sm:text-3xl lg:text-4xl leading-snug tracking-tight ${palette.cardTitle}`}>
              Kami nggak cuma serah terima file terus menghilang. Begitu website live,{" "}
              <span className="relative inline-block align-baseline px-2 py-1 whitespace-nowrap">
                {/* sweep bar */}
                <motion.span
                  aria-hidden
                  className={`absolute inset-0 ${palette.sweepBar} rounded-md origin-left`}
                  initial={shouldReduceMotion ? undefined : { scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.91, delay: 1.55, ease: [0.23, 1, 0.32, 1] }}
                  style={{ transformOrigin: "left center" }}
                />
                {/* base text */}
                <span className={`relative font-semibold whitespace-nowrap ${palette.baseText}`}>kami masih di sini</span>
                {/* overlay text revealed in sync with bar */}
                <motion.span
                  aria-hidden
                  className={`absolute inset-0 px-2 py-1 font-semibold whitespace-nowrap ${palette.overlayText}`}
                  initial={shouldReduceMotion ? undefined : { clipPath: "inset(0 100% 0 0)" }}
                  animate={inView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
                  transition={{ duration: 0.91, delay: 1.55, ease: [0.23, 1, 0.32, 1] }}
                >
                  kami masih di sini
                </motion.span>
              </span>
              siap membantu berkembang sesuai bisnis anda tumbuh.
            </p>
            {/* Animated cursor */}
            <motion.div
              className="absolute pointer-events-none"
              style={cursorAnchor}
              initial={shouldReduceMotion ? undefined : { opacity: 0, x: cursorKeyframes.x[0], y: cursorKeyframes.y[0] }}
              animate={inView && !shouldReduceMotion ? cursorKeyframes : (shouldReduceMotion ? { opacity: 1, ...cursorRestPosition } : { opacity: 0, x: cursorKeyframes.x[0], y: cursorKeyframes.y[0] })}
              transition={cursorTransition}
            >
              <img src={blueArrowUrl} alt="" width={28} height={28} />
              <span className="absolute top-[22px] left-[18px] whitespace-nowrap bg-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-sm">
                Beyond Team
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default StatsSection;