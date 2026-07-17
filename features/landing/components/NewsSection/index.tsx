"use client";

import type * as React from "react";
import { motion } from "framer-motion";
import { cardAsset, whiteArrowUpRightUrl } from "@/constants/assets";
import { WordsReveal } from "@/components/common";

export function NewsSection() {
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-5 py-24 flex flex-col gap-16 relative">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="flex flex-col gap-8 max-w-2xl">
            <WordsReveal
              as="h2"
              className="text-5xl lg:text-6xl text-neutral-100 leading-tight block"
              text="E-Endless designer updated and news"
              step={0.08}
              duration={0.6}
            />
            <WordsReveal
              as="p"
              className="text-xl lg:text-2xl opacity-60 text-neutral-100 leading-8 block"
              text="With its latest update, E-Endless pushes the boundaries of creativity even further, offering an array of new features and enhancements to elevate your design experience."
              step={0.04}
              delay={0.3}
              duration={0.5}
            />
          </div>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="inline-flex shrink-0 bg-white text-black px-7 py-4 rounded-xl font-medium text-lg hover:bg-neutral-200 transition-colors"
          >
            I want to learn more
          </motion.a>
        </div>

        {/* Content row */}
        <div className="flex flex-col lg:flex-row gap-16 relative">
          {/* Left column - card image */}
          <motion.div
            className="w-full lg:w-[35%] shrink-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="rounded-3xl overflow-hidden bg-neutral-900">
              <img src={cardAsset.url} alt="" className="w-full h-auto block" />
            </div>
          </motion.div>

          {/* Right column - Announcement */}
          <div className="w-full lg:w-[65%] flex flex-col relative pb-20">
            <div className="flex justify-between items-center mb-6">
              <WordsReveal as="h3" className="text-4xl text-neutral-100 block" text="Announcement" step={0.1} duration={0.6} />
              <img src={whiteArrowUpRightUrl} alt="" width={28} height={28} />
            </div>
            <WordsReveal
              as="p"
              className="text-xl lg:text-2xl text-neutral-100 opacity-60 leading-8 mb-6 block"
              text="Revolutionize your design process with our latest AI design tool feature announcement! Introducing a groundbreaking addition to our toolkit that will transform the way you create."
              step={0.03}
              delay={0.2}
              duration={0.5}
            />
            <WordsReveal
              as="p"
              className="text-xl lg:text-2xl text-neutral-100 opacity-60 leading-8 mb-6 block"
              text="Packed with innovative features and enhancements, this release marks a significant milestone in revolutionizing the way you design and create."
              step={0.03}
              delay={0.4}
              duration={0.5}
            />
            <WordsReveal
              as="p"
              className="text-xl lg:text-2xl text-neutral-100 opacity-40 leading-8 block"
              text="Experience enhanced user experience, advanced AI capabilities, collaboration tools, an expanded asset library, performance improvements, customization options, integration with popular tools, enhanced security, and comprehensive tutorials and support – all in one update!"
              step={0.025}
              delay={0.6}
              duration={0.5}
            />
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default NewsSection;
