"use client";

import type * as React from "react";
import { motion } from "framer-motion";
import { macDotUrl, whiteCursorUrl, copyUrl, plusUrl, bgAsset } from "@/constants/assets";
import { WordsReveal, Typewriter } from "@/components/common";

function ToolIcon({ src }: { src: string }) {
  return (
    <div className="size-9 bg-white/10 rounded-lg flex items-center justify-center">
      <img src={src} alt="" width={20} height={20} />
    </div>
  );
}

export function DeveloperSection() {
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-5 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          <WordsReveal
            as="h2"
            className="text-5xl lg:text-6xl leading-tight text-white"
            text="Mad for designer by developers"
            step={0.08}
            duration={0.6}
          />
          <WordsReveal
            as="p"
            className="text-2xl opacity-60 text-neutral-100 max-w-[500px]"
            text="Anchor provides all you need to build, embed and launch banking and payment products."
            step={0.05}
            delay={0.3}
            duration={0.5}
          />
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <button className="bg-white text-black px-7 py-4 rounded-xl font-medium hover:bg-neutral-200 transition-colors cursor-pointer">
              How it work
            </button>
            <button className="bg-white/10 text-white px-7 py-4 rounded-xl font-medium hover:bg-white/20 transition-colors cursor-pointer">
              View code
            </button>
          </motion.div>
        </div>

        {/* Right column - macOS window */}
        <motion.div
          className="rounded-3xl border border-white/10 overflow-hidden flex flex-col"
          style={{ backgroundColor: "#0F0D0F" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Top bar */}
          <div className="flex justify-between items-center px-4 sm:px-5 py-4 gap-2">
            <div className="hidden sm:block">
              <img src={macDotUrl} alt="" width={60} height={12} />
            </div>
            <motion.div
              className="flex gap-1.5 sm:gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.5 }}
            >
              {[whiteCursorUrl, copyUrl, plusUrl].map((src, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <ToolIcon src={src} />
                </motion.div>
              ))}
            </motion.div>
            <motion.button
              className="bg-white text-black text-sm px-2.5 sm:px-4 py-1.5 rounded-lg font-medium hover:bg-neutral-200 transition-colors whitespace-nowrap cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
            >
              Export code
            </motion.button>
          </div>

          {/* Inner tab */}
          <div className="mx-3 sm:mx-[20px] mb-3 sm:mb-[20px] relative rounded-2xl overflow-hidden">
            <img src={bgAsset.url} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/80" />
            <div className="relative p-5 sm:p-10">
              <div className="flex justify-between items-start gap-4">
                <WordsReveal
                  as="h3"
                  className="text-3xl sm:text-5xl text-white max-w-[400px] leading-tight"
                  text="Code and design togather"
                  step={0.08}
                  delay={0.5}
                  duration={0.6}
                />
                <motion.button
                  className="size-10 bg-zinc-800 rounded-lg flex items-center justify-center shrink-0 mt-2 sm:mt-6 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                >
                  <img src={copyUrl} alt="" width={16} height={16} />
                </motion.button>
              </div>
              <Typewriter
                className="mt-6 sm:mt-12 text-xs sm:text-sm md:text-base opacity-60 text-neutral-100 leading-relaxed whitespace-pre-wrap font-mono"
                delay={1.2}
                speed={18}
                text={`color: var(--Black-on-White, #1A1A1A);
font-variant-numeric: lining-nums proportional-nums;
font-family: Manrope;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default DeveloperSection;
