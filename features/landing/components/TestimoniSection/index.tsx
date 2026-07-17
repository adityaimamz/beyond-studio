"use client";

import type * as React from "react";
import { motion } from "framer-motion";
import { bsTestimoniList, bsTestimoniHeader } from "@/constants/landing";
import { WordsReveal } from "@/components/common";
import { Button, Card } from "@/components/ui";
import { useTheme } from "@/components/providers/ThemeProvider";

const palettes = {
  dark: {
    sectionBg: "bg-black",
    headline: "text-neutral-100",
    subheadline: "opacity-60 text-neutral-100",
    ctaBtn: "bg-transparent text-white border border-white/15 hover:bg-white/10",
    cardBg: "bg-zinc-900/40 border border-white/5 hover:border-white/10",
    avatarBg: "bg-stone-800 text-stone-100 border border-white/10",
    cardName: "text-neutral-100",
    cardCategory: "text-neutral-400",
    cardQuote: "text-neutral-300",
    featuredName: "text-neutral-100",
    quoteIcon: "text-neutral-600",
    part0: "text-neutral-100 opacity-100",
    part1: "text-neutral-100 opacity-80",
    part2: "text-neutral-100 opacity-50",
    gradientBottom: "from-black",
  },
  light: {
    sectionBg: "bg-slate-50",
    headline: "text-neutral-900",
    subheadline: "text-neutral-600",
    ctaBtn: "bg-transparent text-neutral-900 border border-neutral-300 hover:bg-neutral-900/5",
    cardBg: "bg-white border border-neutral-200/80 shadow-sm hover:border-neutral-300",
    avatarBg: "bg-neutral-200 text-neutral-800 border border-neutral-300",
    cardName: "text-neutral-900",
    cardCategory: "text-neutral-500",
    cardQuote: "text-neutral-700",
    featuredName: "text-neutral-900",
    quoteIcon: "text-neutral-300",
    part0: "text-neutral-900 opacity-100",
    part1: "text-neutral-900 opacity-80",
    part2: "text-neutral-900 opacity-50",
    gradientBottom: "from-slate-50",
  },
} as const;

function getInitials(name: string) {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  // Filter out any placeholders or system names, just get standard letters
  const validParts = parts.filter(p => p.toLowerCase() !== "placeholder");
  const activeParts = validParts.length > 0 ? validParts : parts;
  
  if (activeParts.length === 1) return activeParts[0].substring(0, 2).toUpperCase();
  return (activeParts[0][0] + activeParts[activeParts.length - 1][0]).toUpperCase();
}

export function TestimoniSection() {
  const { theme } = useTheme();
  const palette = palettes[theme === "light" ? "light" : "dark"];
  const nonFeaturedTestimonials = bsTestimoniList.filter(t => !t.featured);
  const featuredTestimonial = bsTestimoniList.find(t => t.featured) || bsTestimoniList[0];

  return (
    <section id="testimoni" className={`relative z-10 overflow-visible ${palette.sectionBg} pb-8 md:pb-12 transition-colors duration-500`}>
      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-5 py-24">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="flex flex-col gap-8 max-w-2xl">
            <WordsReveal
              as="h2"
              className={`text-5xl lg:text-6xl leading-tight block font-bold ${palette.headline}`}
              text={bsTestimoniHeader.headline}
              step={0.06}
              duration={0.6}
            />
            <WordsReveal
              as="p"
              className={`text-xl lg:text-2xl leading-8 block ${palette.subheadline}`}
              text={bsTestimoniHeader.subheadline}
              step={0.03}
              delay={0.3}
              duration={0.5}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="shrink-0"
          >
            <Button
              variant="outline"
              href={bsTestimoniHeader.cta.href}
              className={`px-7 py-4 rounded-xl font-medium text-lg h-auto whitespace-nowrap ${palette.ctaBtn}`}
            >
              {bsTestimoniHeader.cta.label}
            </Button>
          </motion.div>
        </div>

        {/* Content row */}
        <div className="flex flex-col lg:flex-row gap-16 relative">
          {/* Left column - compact stacked testimonials */}
          <div className="w-full lg:w-[45%] shrink-0">
            <div className="flex flex-col gap-4">
              {nonFeaturedTestimonials.map((t, idx) => (
                <motion.div
                  key={t.name + idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.15 * idx, ease: "easeOut" }}
                >
                  <Card className={`p-6 rounded-2xl flex flex-col gap-4 transition-colors ${palette.cardBg}`}>
                    <div className="flex items-center gap-4">
                      <div className={`size-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${palette.avatarBg}`}>
                        {getInitials(t.name)}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className={`font-bold text-base truncate ${palette.cardName}`}>{t.name}</span>
                        <span className={`text-xs truncate ${palette.cardCategory}`}>{t.category}</span>
                      </div>
                    </div>
                    <p className={`text-sm leading-relaxed italic ${palette.cardQuote}`}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column - featured testimonial with 3-paragraph opacity-fade */}
          <div className="w-full lg:w-[55%] flex flex-col relative pb-20">
            <div className="flex justify-between items-center mb-6">
              <WordsReveal
                as="h3"
                className={`text-2xl sm:text-3xl block font-bold ${palette.featuredName}`}
                text={`${featuredTestimonial.name} — ${featuredTestimonial.category}`}
                step={0.06}
                duration={0.6}
              />
              <svg className={`size-8 shrink-0 ${palette.quoteIcon}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-4.765 2.627-4.765 5.91h5.77v10h-11zm-12 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-4.765 2.627-4.765 5.91h5.77v10h-11z" />
              </svg>
            </div>
            {featuredTestimonial.quoteParts && (
              <>
                <WordsReveal
                  as="p"
                  className={`text-xl lg:text-2xl leading-8 mb-6 block ${palette.part0}`}
                  text={featuredTestimonial.quoteParts[0]}
                  step={0.03}
                  delay={0.2}
                  duration={0.5}
                />
                <WordsReveal
                  as="p"
                  className={`text-xl lg:text-2xl leading-8 mb-6 block ${palette.part1}`}
                  text={featuredTestimonial.quoteParts[1]}
                  step={0.03}
                  delay={0.4}
                  duration={0.5}
                />
                <WordsReveal
                  as="p"
                  className={`text-xl lg:text-2xl leading-8 block ${palette.part2}`}
                  text={featuredTestimonial.quoteParts[2]}
                  step={0.025}
                  delay={0.6}
                  duration={0.5}
                />
              </>
            )}
            <div className={`absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t ${palette.gradientBottom} to-transparent pointer-events-none transition-colors duration-500`} />
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 md:h-96"
        style={{
          background:
            theme === "light"
              ? "radial-gradient(ellipse 85% 120% at 8% 100%, rgba(15, 23, 42, 0.05), transparent 68%)"
              : "radial-gradient(ellipse 85% 120% at 8% 100%, rgba(226, 232, 240, 0.11), transparent 68%)",
        }}
        aria-hidden
      />
    </section>
  );
}

export default TestimoniSection;

