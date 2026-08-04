"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { macDotUrl, whiteCursorUrl, copyUrl, plusUrl, bgAsset } from "@/constants/assets";
import { WordsReveal, Typewriter } from "@/components/common";
import { Button, Badge } from "@/components/ui";
import { bsCraftsmanshipContent } from "@/constants/landing";
import { useTheme } from "@/components/providers/ThemeProvider";

const palettes = {
  dark: {
    sectionBg: "bg-black",
    headline: "text-white",
    subheadline: "opacity-60 text-neutral-100",
    ctaPrimary: "bg-white text-black hover:bg-neutral-200 border-0",
    ctaSecondary: "bg-white/10 text-white hover:bg-white/20 border border-white/10",
    macBg: "#0F0D0F",
    macBorder: "border-white/10",
    topBarBorder: "border-white/5",
    toolIconBg: "bg-white/10",
    toolIconInvert: "",
    badge: "bg-white/10 border-white/10 text-white/85",
  },
  light: {
    sectionBg: "bg-slate-50",
    headline: "text-neutral-900",
    subheadline: "text-neutral-600",
    ctaPrimary: "bg-neutral-900 text-white hover:bg-neutral-800 border-0",
    ctaSecondary: "bg-neutral-900/5 text-neutral-900 hover:bg-neutral-900/10 border border-neutral-900/10",
    macBg: "#FFFFFF",
    macBorder: "border-neutral-200 shadow-xl",
    topBarBorder: "border-neutral-200/80",
    toolIconBg: "bg-neutral-900/5",
    toolIconInvert: "invert opacity-70",
    badge: "bg-neutral-100 border-neutral-200 text-neutral-800",
  },
} as const;

function ToolIcon({ src, toolIconBg, toolIconInvert }: { src: string; toolIconBg: string; toolIconInvert: string }) {
  return (
    <div className={`size-9 ${toolIconBg} rounded-lg flex items-center justify-center`}>
      <img src={src} alt="" width={20} height={20} className={toolIconInvert} />
    </div>
  );
}

export function CraftsmanshipSection() {
  const [copied, setCopied] = React.useState(false);
  const { theme } = useTheme();
  const palette = palettes[theme === "light" ? "light" : "dark"];
  const shouldReduceMotion = useReducedMotion();

  const handleCopy = () => {
    navigator.clipboard.writeText(bsCraftsmanshipContent.codeSnippet.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="craftsmanship" className={`${palette.sectionBg} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-5 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          <WordsReveal
            as="h2"
            className={`text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold ${palette.headline}`}
            text={bsCraftsmanshipContent.headline}
            step={0.04}
            duration={0.6}
          />
          <WordsReveal
            as="p"
            className={`text-lg sm:text-xl max-w-[540px] leading-relaxed ${palette.subheadline}`}
            text={bsCraftsmanshipContent.subheadline}
            step={0.02}
            delay={0.3}
            duration={0.5}
          />
          <motion.div
            className="flex flex-wrap gap-4"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <Button
              variant="none"
              href={bsCraftsmanshipContent.ctaPrimary.href}
              className={`inline-flex items-center justify-center font-medium transition-colors cursor-pointer px-7 py-4 rounded-xl text-base h-auto ${palette.ctaPrimary}`}
            >
              {bsCraftsmanshipContent.ctaPrimary.label}
            </Button>
            <Button
              variant="none"
              href={bsCraftsmanshipContent.ctaSecondary.href}
              className={`inline-flex items-center justify-center font-medium transition-colors cursor-pointer px-7 py-4 rounded-xl text-base h-auto ${palette.ctaSecondary}`}
            >
              {bsCraftsmanshipContent.ctaSecondary.label}
            </Button>
          </motion.div>
        </div>

        {/* Right column - macOS window */}
        <motion.div
          className={`rounded-3xl border ${palette.macBorder} overflow-hidden flex flex-col w-full transition-colors duration-500`}
          style={{ backgroundColor: palette.macBg }}
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Top bar */}
          <div className={`flex justify-between items-center px-4 sm:px-5 py-4 gap-2 border-b ${palette.topBarBorder}`}>
            <div className="hidden sm:block">
              <img src={macDotUrl} alt="" width={60} height={12} />
            </div>
            <motion.div
              className="flex gap-1.5 sm:gap-3"
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.5 }}
            >
              {[whiteCursorUrl, copyUrl, plusUrl].map((src, i) => (
                <motion.div
                  key={i}
                  variants={shouldReduceMotion ? {} : {
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <ToolIcon src={src} toolIconBg={palette.toolIconBg} toolIconInvert={palette.toolIconInvert} />
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
            >
              <Badge className={`${palette.badge} px-3 py-1.5 rounded-lg whitespace-nowrap text-xs font-semibold`}>
                {bsCraftsmanshipContent.techBadge}
              </Badge>
            </motion.div>
          </div>

          {/* Inner tab */}
          <div className="mx-3 sm:mx-[20px] my-3 sm:my-[20px] relative rounded-2xl overflow-hidden min-h-[300px]">
            <img src={bgAsset.url} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/80" />
            <div className="relative p-5 sm:p-8 flex flex-col h-full justify-between">
              <div className="flex justify-between items-center gap-4">
                <span className="font-mono text-sm opacity-50 text-neutral-300">
                  {"// Contoh implementasi"}
                </span>
                <motion.button
                  onClick={handleCopy}
                  className="size-10 bg-zinc-800 rounded-lg flex items-center justify-center shrink-0 cursor-pointer text-white/70 hover:text-white transition-colors"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                  title="Copy code"
                >
                  {copied ? (
                    <span className="text-xs font-sans font-medium text-green-400">Done</span>
                  ) : (
                    <img src={copyUrl} alt="" width={16} height={16} />
                  )}
                </motion.button>
              </div>
              <Typewriter
                className="mt-6 text-xs sm:text-sm opacity-70 text-neutral-100 leading-relaxed whitespace-pre-wrap font-mono block text-left"
                delay={1.2}
                speed={18}
                text={bsCraftsmanshipContent.codeSnippet.join("\n")}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CraftsmanshipSection;

