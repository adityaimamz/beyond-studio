"use client";

import type * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { checkMarkUrl } from "@/constants/assets";
import { bsPaketHargaList, bsPaketHargaHeader, type PaketHarga } from "@/constants/landing";
import { WordsReveal } from "@/components/common";
import { useTheme } from "@/components/providers/ThemeProvider";

interface PaketHargaCardProps {
  plan: PaketHarga;
}

function PaketHargaCard({ plan }: PaketHargaCardProps) {
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const isSkripsi = plan.title.toLowerCase().includes("skripsi") || plan.ctaLabel === "Tanya Detail";

  let pricePrefix = "";
  let priceAmount = plan.price;

  if (plan.price.includes("Rp")) {
    const parts = plan.price.split("Rp");
    if (parts[0].trim() !== "") {
      pricePrefix = parts[0].trim();
      priceAmount = "Rp" + parts[1];
    }
  }

  return (
    <motion.div
      className={`relative overflow-hidden flex flex-col justify-between bg-white/40 backdrop-blur-sm p-8 rounded-2xl h-full transition-[transform,box-shadow,border-color,background-color] duration-300 hover:scale-[1.01] hover:shadow-md ${plan.featured
          ? "border-2 border-stone-950/20 bg-white/60"
          : "border border-stone-950/5"
        }`}
      variants={item}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {/* Premium Corner Label */}
      {plan.badge && (
        <div className="absolute top-0 right-0 bg-stone-950 text-stone-50 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] rounded-bl-2xl z-10 transition-colors hover:bg-stone-800 cursor-default">
          {plan.badge}
        </div>
      )}

      {plan.featured && !plan.badge && (
        <div className="absolute top-0 right-0 bg-stone-950 text-stone-50 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] rounded-bl-2xl z-10 transition-colors hover:bg-stone-800 cursor-default">
          Populer
        </div>
      )}

      <div>
        {/* Title */}
        <h3 className="text-xl font-bold text-stone-900 mb-2 mt-2">{plan.title}</h3>

        {/* Price Row */}
        <div className="flex items-baseline gap-1.5 mt-3 flex-wrap">
          {pricePrefix && (
            <span className="text-lg font-semibold text-stone-950/70">{pricePrefix}</span>
          )}
          <span className="text-3xl font-extrabold text-stone-950">{priceAmount}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-stone-950/70 mt-3 leading-relaxed min-h-[40px]">
          {plan.description}
        </p>

        {/* Divider */}
        <div className="border-t border-black/10 my-6" />

        {/* Features Checklist */}
        <div className="flex flex-col gap-4">
          {plan.features.map((feat) => (
            <div key={feat} className="flex items-start gap-4">
              <div className="size-5 bg-stone-950 rounded-full flex justify-center items-center shrink-0 mt-0.5">
                <img src={checkMarkUrl} alt="" width={12} height={12} className="brightness-150" />
              </div>
              <span className="text-sm text-stone-950/85 font-medium leading-tight">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        <a
          href="#contact"
          className={`flow-hover w-full py-3.5 px-4 rounded-xl font-semibold text-center block active:scale-[0.97] cursor-pointer text-sm shadow-xs ${isSkripsi
              ? "bg-transparent text-stone-950 border border-stone-950 hover:text-white before:bg-stone-950"
              : "bg-stone-950 text-white hover:text-stone-950 before:bg-white"
            }`}
        >
          {plan.ctaLabel}
        </a>
      </div>
    </motion.div>
  );
}

export function PaketHargaSection() {
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="paket-harga" className="relative z-10 p-5 transition-colors duration-500">
      <div className="rounded-3xl px-6 py-12 sm:px-12 sm:py-20 max-w-7xl mx-auto" style={{ backgroundColor: "#D8D0BC" }}>
        {/* Header container */}
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col gap-4">
          <WordsReveal
            as="h2"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-950 block leading-tight"
            text={bsPaketHargaHeader.headline}
            step={0.06}
            duration={0.6}
          />
          <WordsReveal
            as="p"
            className="text-base sm:text-lg lg:text-xl text-stone-950/80 max-w-2xl mx-auto leading-relaxed mt-2"
            text={bsPaketHargaHeader.subheadline}
            step={0.02}
            duration={0.5}
          />
        </div>

        {/* Grid layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {bsPaketHargaList.map((plan, index) => (
            <PaketHargaCard key={index} plan={plan} />
          ))}
        </motion.div>

        {/* TODO: replace with 'Dipercaya oleh' client/partner logos once available */}
      </div>
    </section>
  );
}

export default PaketHargaSection;

