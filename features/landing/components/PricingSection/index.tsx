"use client";

import type * as React from "react";
import { motion } from "framer-motion";
import { checkMarkUrl, figmaLogoUrl, logo2Url, logo3Url } from "@/constants/assets";
import { pricingPlans } from "@/constants/landing";
import { WordsReveal } from "@/components/common";

interface PricingPlanProps {
  price: string;
  description: string;
  features: { label: string; dim?: boolean }[];
  cta: string;
  ctaClass: string;
}

function PricingPlan({ price, description, features, cta, ctaClass }: PricingPlanProps) {
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
    >
      <motion.div className="flex items-baseline gap-3" variants={item} transition={{ duration: 0.55, ease: "easeOut" }}>
        <span className="text-4xl font-medium text-stone-950">{price}</span>
        <span className="text-2xl text-stone-950/50">/ Per Month</span>
      </motion.div>
      <motion.p className="text-2xl text-stone-950 mt-6" variants={item} transition={{ duration: 0.55, ease: "easeOut" }}>
        {description}
      </motion.p>
      <motion.div className="border-t border-black/10 my-8" variants={item} transition={{ duration: 0.5, ease: "easeOut" }} />
      <div className="flex flex-col gap-6">
        {features.map((f) => (
          <motion.div key={f.label} className="flex items-center gap-5" variants={item} transition={{ duration: 0.55, ease: "easeOut" }}>
            <div className={`size-6 bg-stone-950 rounded-full flex justify-center items-center shrink-0 ${f.dim ? "opacity-20" : ""}`}>
              <img src={checkMarkUrl} alt="" width={20} height={20} />
            </div>
            <span className="text-lg text-stone-950">{f.label}</span>
          </motion.div>
        ))}
      </div>
      <motion.button
        className={`w-full py-4 rounded-xl font-medium mt-10 cursor-pointer ${ctaClass}`}
        variants={item}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {cta}
      </motion.button>
    </motion.div>
  );
}

export function PricingSection() {
  return (
    <section className="bg-black p-5">
      <div className="rounded-3xl px-8 py-12 sm:px-20 sm:py-20 max-w-7xl mx-auto" style={{ backgroundColor: "#D8D0BC" }}>
        <WordsReveal
          as="h2"
          className="text-5xl lg:text-6xl text-stone-950 text-center mb-20 block"
          text="Plans and Pricing"
          step={0.1}
          duration={0.6}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {pricingPlans.map((plan, index) => (
            <PricingPlan
              key={index}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              cta={plan.cta}
              ctaClass={plan.ctaClass}
            />
          ))}
        </div>

        {/* Partners footer */}
        <motion.div
          className="mt-24 border-t border-black/10 pt-12 flex flex-wrap justify-center items-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
        >
          {[
            <span key="t" className="text-3xl font-medium text-stone-950">Partners</span>,
            <div key="bar" className="w-64 h-3 bg-stone-400/40 rounded-full relative overflow-hidden">
              <div className="w-16 h-full bg-stone-950 rounded-full" />
            </div>,
            <div key="logos" className="px-6 py-2 bg-stone-200/60 rounded-xl flex gap-10 items-center">
              <img src={figmaLogoUrl} alt="Figma" className="h-8 w-auto" />
              <img src={logo2Url} alt="Partner" className="h-8 w-auto" />
              <img src={logo3Url} alt="Partner" className="h-8 w-auto" />
            </div>,
          ].map((child, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export default PricingSection;
