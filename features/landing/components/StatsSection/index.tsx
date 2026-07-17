"use client";

import { useRef } from "react";
import { motion, useInView as useInViewFM } from "framer-motion";
import { blueArrowUrl } from "@/constants/assets";
import { CountNumber } from "@/components/common/CountUp";
import { useTheme } from "@/components/providers/ThemeProvider";

const palettes = {
  dark: {
    sectionBg: "bg-black",
    statNumber: "text-neutral-100",
    statText: "text-neutral-100 opacity-40",
    cardBg: "bg-neutral-900 border border-transparent",
    cardTitle: "text-white",
    baseText: "text-white",
    sweepBar: "bg-white",
    overlayText: "text-stone-950",
  },
  light: {
    sectionBg: "bg-slate-50",
    statNumber: "text-neutral-900 font-bold",
    statText: "text-neutral-600 font-medium",
    cardBg: "bg-white border border-neutral-200/80 shadow-xl",
    cardTitle: "text-neutral-900 font-medium",
    baseText: "text-neutral-900",
    sweepBar: "bg-neutral-900",
    overlayText: "text-white",
  },
} as const;

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInViewFM(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const palette = palettes[theme === "light" ? "light" : "dark"];

  // Cursor choreography keyframes (delays start after card appears ~0.6s)
  const cursorKeyframes = {
    opacity: [0, 1, 1, 1, 1],
    x: [100, -125, 35, 115, 115],
    y: [100, -10, -10, 40, 40],
  };

  const cursorTransition = {
    duration: 2.6,
    delay: 0.9,
    times: [0, 0.25, 0.6, 0.85, 1],
    ease: "easeInOut" as const,
  };

  return (
    <section ref={ref} className={`${palette.sectionBg} py-24 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Stat 1 */}
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
        >
          <span className={`text-6xl ${palette.statNumber}`}>
            <CountNumber to={47} start={inView} />%
          </span>
          <p className={`text-2xl max-w-[250px] ${palette.statText}`}>
            of designs build with E-endless Designer
          </p>
        </motion.div>

        {/* Stat 2 */}
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <span className={`text-6xl ${palette.statNumber}`}>
            <CountNumber to={63} start={inView} />%
          </span>
          <p className={`text-2xl max-w-[340px] ${palette.statText}`}>
            of the top AI startups use E-Endless Designer
          </p>
        </motion.div>

        {/* Multiplayer card */}
        <motion.div
          className={`relative ${palette.cardBg} rounded-3xl p-6 sm:p-10 w-full max-w-[570px] overflow-hidden transition-colors duration-500`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <p className={`text-2xl sm:text-4xl leading-snug ${palette.cardTitle}`}>
            We helped{" "}
            <span className="relative inline-block align-baseline px-2 py-1 whitespace-nowrap">
              {/* sweep bar */}
              <motion.span
                aria-hidden
                className={`absolute inset-0 ${palette.sweepBar} rounded-sm origin-left`}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.91, delay: 1.55, ease: "linear" }}
                style={{ transformOrigin: "left center" }}
              />
              {/* base text */}
              <span className={`relative font-medium whitespace-nowrap ${palette.baseText}`}>build marketing</span>
              {/* overlay text revealed in sync with bar */}
              <motion.span
                aria-hidden
                className={`absolute inset-0 px-2 py-1 font-medium whitespace-nowrap ${palette.overlayText}`}
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={inView ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
                transition={{ duration: 0.91, delay: 1.55, ease: "linear" }}
              >
                build marketing
              </motion.span>
            </span>{" "}
            and portfolio products
          </p>
          {/* Animated cursor */}
          <motion.div
            className="absolute pointer-events-none"
            style={{ top: "40%", left: "55%" }}
            initial={{ opacity: 0, x: 100, y: 100 }}
            animate={inView ? cursorKeyframes : { opacity: 0, x: 100, y: 100 }}
            transition={cursorTransition}
          >
            <img src={blueArrowUrl} alt="" width={28} height={28} />
            <span className="absolute top-[22px] left-[18px] whitespace-nowrap bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-tr-md rounded-bl-md rounded-br-md">
              Manager
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
export default StatsSection;

