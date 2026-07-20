"use client";

import type * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  bgAsset,
  macDotUrl,
  typeUrl,
  imagePlusUrl,
  mousePointerUrl,
  squareUrl,
  plusUrl,
  srUrl,
  nmUrl,
  searchUrl,
  dash01,
  dash02,
  dashLine,
  dashCard3Pink,
  dashCard3,
  dashCard4,
  dashCard5,
} from "@/constants/assets";
import { useHeroReady } from "@/features/landing/hooks/useHeroReady";
import {
  StaggeredWords,
  TypingPlaceholderInput,
  WordsReveal,
} from "@/components/common";
import { CountNumber } from "@/components/common/CountUp";

import { useTheme } from "@/components/providers/ThemeProvider";

function ToolIcon({ src, className, style }: { src: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`size-9 relative bg-white/10 rounded-lg flex items-center justify-center ${className ?? ""}`} style={style}>
      <img src={src} alt="" width={20} height={20} />
    </div>
  );
}

export function HeroSection() {
  const heroReady = useHeroReady(2100);
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative">
      {/* Macbook window */}
      <div className="relative mt-[10px] mx-[20px] rounded-2xl overflow-hidden anim-rise" style={{ backgroundColor: "#0F0D0F", animationDelay: "0ms" }}>
        <div className="relative">
          {/* Top bar */}
          <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 gap-2">
            <div className="hidden sm:flex flex-1 items-center">
              <img src={macDotUrl} alt="" width={60} height={12} />
            </div>
            <div className="flex items-center gap-1.5 sm:gap-4">
              <ToolIcon src={typeUrl} className="anim-rise" style={{ animationDelay: "1140ms" }} />
              <ToolIcon src={imagePlusUrl} className="anim-rise" style={{ animationDelay: "1200ms" }} />
              <ToolIcon src={mousePointerUrl} className="anim-rise" style={{ animationDelay: "1260ms" }} />
              <ToolIcon src={squareUrl} className="anim-rise" style={{ animationDelay: "1320ms" }} />
              <ToolIcon src={plusUrl} className="anim-rise" style={{ animationDelay: "1380ms" }} />
            </div>
            <div className="flex flex-1 sm:flex-initial items-center justify-end gap-2 sm:gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-[10px] px-3 sm:px-4 py-1.5 transition-colors anim-pop cursor-pointer" style={{ animationDelay: "1440ms" }}>
                Share
              </button>
              <div className="hidden sm:flex items-center space-x-[-10px]">
                <img src={srUrl} alt="Sr" width={36} height={36} className="relative z-0 outline outline-2 outline-stone-950 rounded-full anim-pop" style={{ animationDelay: "1500ms" }} />
                <img src={nmUrl} alt="Nm" width={36} height={36} className="relative z-10 outline outline-2 outline-stone-950 rounded-full anim-pop" style={{ animationDelay: "1560ms" }} />
              </div>
            </div>
          </div>

          {/* Hero content */}
          <div className="relative overflow-hidden mx-4 mb-0 border border-white/10 rounded-2xl flex flex-col items-center text-center pt-[64px] px-6 pb-0">
            <img
              src={bgAsset.url}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/80 z-0" />
            <span className="relative z-10 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs sm:text-sm font-medium text-neutral-100 mb-[20px] anim-pop" style={{ animationDelay: "180ms" }}>
              PRICELIST LENGKAP & TRANSPARAN
            </span>
            <h1 className="relative z-10 text-[34px] leading-[38px] sm:text-6xl sm:leading-[68px] font-medium text-neutral-100 max-w-5xl tracking-tight mb-[24px] sm:mb-[32px] word-stagger">
              <StaggeredWords text="Solusi Website Custom untuk Bisnis, Skripsi, dan Personal" baseDelay={300} step={54} />
            </h1>
            <p className="relative z-10 text-base sm:text-2xl opacity-60 text-neutral-100 w-[634px] max-w-full leading-snug mb-[24px] sm:mb-[30px] word-stagger">
              <StaggeredWords text="Proses cepat, harga transparan, dan konsultasi gratis sebelum anda order." baseDelay={900} step={33} />
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 mb-[25px]">
              <a
                href="#layanan"
                className="flow-hover before:bg-white bg-blue-500 hover:text-blue-600 text-white text-sm sm:text-[15px] font-medium rounded-xl h-12 px-6 flex items-center justify-center w-full sm:w-auto cursor-pointer anim-reveal-right"
                style={{ animationDelay: "400ms", clipPath: "inset(0 100% 0 0)" }}
              >
                Lihat Layanan
              </a>
              <a
                href="#paket-harga"
                className="flow-hover before:bg-neutral-100 bg-white/5 hover:text-stone-950 outline outline-[1.30px] outline-white/10 text-neutral-100 text-sm sm:text-[15px] font-medium rounded-xl h-12 px-6 flex items-center justify-center w-full sm:w-auto cursor-pointer anim-reveal-right"
                style={{ animationDelay: "550ms", clipPath: "inset(0 100% 0 0)" }}
              >
                Lihat Paket Harga
              </a>
            </div>
            <div
              className="w-full max-w-[1124px] h-[465px] mx-auto bg-black rounded-[20px] outline outline-[1.4px] outline-neutral-100/10 flex overflow-x-auto md:overflow-hidden relative z-10 anim-rise scrollbar-none"
              style={{ animationDelay: "2100ms" }}
            >
              {/* Left sidebar */}
              <aside className="w-56 shrink-0 h-full relative bg-black">
                <motion.div
                  className="flex items-center gap-5 px-4 py-5"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  animate={heroReady && !shouldReduceMotion ? { opacity: 1, y: 0 } : (shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })}
                  transition={{ duration: 0.36, delay: 0.06, ease: "easeOut" }}
                >
                  <span className="text-sm font-medium text-neutral-100">Layers</span>
                  <span className="text-sm font-medium text-neutral-100 opacity-30">Assets</span>
                </motion.div>
                <div className="flex flex-col gap-4 p-4 w-[calc(100%+1rem)] -ml-4 pl-8 border-t border-white/10">
                  {[
                    <img key="d1" src={dash01.url} alt="Headlines" className="h-[34px] w-auto object-contain object-left ml-2" />,
                    <img key="d2" src={dash02.url} alt="Images and fill" className="h-[34px] w-auto object-contain object-left ml-2" />,
                    <div key="tools" className="flex items-center gap-3 h-9 px-2 text-neutral-300 text-sm">
                      <span className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m14.7 6.3 3 3" /><path d="M3 21v-3l11-11 3 3L6 21z" /></svg>
                      </span>
                      Tools
                    </div>,
                    <div key="cards" className="flex items-center gap-3 h-[46px] px-1 rounded-lg bg-white/[0.08] outline outline-1 outline-white/5">
                      <span className="w-9 h-9 ml-1 rounded-lg bg-blue-500 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>
                      </span>
                      <span className="text-sm text-neutral-100">Cards</span>
                    </div>,
                    <div key="add" className="flex items-center gap-3 h-9 px-2 text-neutral-300 text-sm">
                      <span className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                      </span>
                      Add more
                    </div>,
                  ].map((node, i) => (
                    <motion.div
                      key={i}
                      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                      animate={heroReady && !shouldReduceMotion ? { opacity: 1, y: 0 } : (shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })}
                      transition={{ duration: 0.72, delay: 0.12 + i * 0.2, ease: "easeOut" }}
                    >
                      {node}
                    </motion.div>
                  ))}
                </div>
              </aside>

              {/* Right grid */}
              <div className="flex-1 min-w-[850px] md:min-w-0 p-5 flex flex-wrap gap-x-4 gap-y-5 content-start">
                {/* Card 1 - Beige */}
                <motion.div
                  className="w-96 h-60 relative bg-[#D0C9B9] rounded-2xl overflow-hidden p-5 flex flex-col text-[#131113]"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  animate={heroReady && !shouldReduceMotion ? { opacity: 1, y: 0 } : (shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })}
                  transition={{ duration: 0.36, delay: 0.18, ease: "easeOut" }}
                >
                  <div className="flex justify-between relative z-10">
                    <div className="flex flex-col">
                      <WordsReveal as="span" className="text-xs opacity-40 -ml-[20px] block" text="Design token style" delay={0.66} step={0.048} duration={0.3} active={heroReady} />
                      <WordsReveal as="span" className="text-2xl font-medium mt-1 block" text="17 Updated" delay={0.75} step={0.048} duration={0.3} active={heroReady} />
                    </div>
                    <div className="flex flex-col items-end">
                      <WordsReveal as="span" className="text-xs opacity-40 block" text="Status" delay={0.66} step={0.048} duration={0.3} active={heroReady} />
                      <span className="text-2xl font-medium mt-1">
                        <CountNumber to={93} duration={1.2} delay={780} start={heroReady} />%
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between w-full mt-3 relative z-10">
                    <WordsReveal as="span" className="text-xs text-stone-950" text="Pr" delay={0.9} step={0.048} duration={0.3} active={heroReady} />
                    <WordsReveal as="span" className="text-xs opacity-40" text="Sec" delay={0.9} step={0.048} duration={0.3} active={heroReady} />
                  </div>
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none"
                    initial={shouldReduceMotion ? undefined : { clipPath: "inset(0 100% 0 0)" }}
                    animate={heroReady && !shouldReduceMotion ? { clipPath: "inset(0 0% 0 0)" } : (shouldReduceMotion ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" })}
                    transition={{ duration: 0.72, delay: 0.48, ease: "easeInOut" }}
                  >
                    <img src={dashLine.url} alt="" className="absolute inset-0 w-full h-full object-cover scale-[1.015] origin-center pointer-events-none" />
                  </motion.div>
                </motion.div>

                {/* Card 2 - Pink */}
                <motion.div
                  className="w-36 h-60 relative rounded-2xl overflow-hidden flex flex-col justify-center items-center"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  animate={heroReady && !shouldReduceMotion ? { opacity: 1, y: 0 } : (shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })}
                  transition={{ duration: 0.36, delay: 0.24, ease: "easeOut" }}
                >
                  <img src={dashCard3Pink.url} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-3xl font-medium text-neutral-900">
                      <CountNumber to={8000} duration={1.2} delay={360} start={heroReady} />
                    </span>
                    <motion.span
                      className="text-sm text-neutral-900/60 mt-1"
                      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
                      animate={heroReady && !shouldReduceMotion ? { opacity: 1, y: 0 } : (shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 })}
                      transition={{ duration: 0.3, delay: 0.42, ease: "easeOut" }}
                    >
                      Components
                    </motion.span>
                  </div>
                </motion.div>

                {/* Card 3 - Custom AI */}
                <motion.div
                  className="w-72 h-60 rounded-2xl overflow-hidden"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  animate={heroReady && !shouldReduceMotion ? { opacity: 1, y: 0 } : (shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })}
                  transition={{ duration: 0.36, delay: 0.3, ease: "easeOut" }}
                >
                  <img src={dashCard3.url} alt="" className="w-full h-full object-cover" />
                </motion.div>

                {/* Card 4 - Its Magic */}
                <motion.div
                  className="w-96 h-60 rounded-2xl overflow-hidden -mt-[56px]"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  animate={heroReady && !shouldReduceMotion ? { opacity: 1, y: 0 } : (shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })}
                  transition={{ duration: 0.36, delay: 0.36, ease: "easeOut" }}
                >
                  <img src={dashCard4.url} alt="" className="w-full h-full object-cover object-left" />
                </motion.div>

                {/* Card 5 - AI Created */}
                <motion.div
                  className="w-[448px] h-60 rounded-2xl overflow-hidden -mt-[56px]"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  animate={heroReady && !shouldReduceMotion ? { opacity: 1, y: 0 } : (shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 })}
                  transition={{ duration: 0.36, delay: 0.42, ease: "easeOut" }}
                >
                  <img src={dashCard5.url} alt="" className="w-full h-full object-cover" />
                </motion.div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Dynamic bottom gradient */}
      <div
        className={`absolute bottom-0 left-0 w-full h-[300px] pointer-events-none z-50 transition-colors duration-500 ${theme === "light"
            ? "bg-gradient-to-t from-white via-white/90 to-transparent"
            : "bg-gradient-to-t from-black via-black/90 to-transparent"
          }`}
      />
    </div>
  );
}

export default HeroSection;


