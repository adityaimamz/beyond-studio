"use client";

import { motion, useReducedMotion } from "framer-motion";
import { layananMockups } from "@/constants/assets";
import { WordsReveal } from "@/components/common";
import { bsLayananHeader, bsLayananCards, type LayananCard } from "@/constants/landing";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  Layers,
  LayoutTemplate,
  Building2,
  ShoppingCart,
  GraduationCap,
} from "lucide-react";

// One entry per service: the icon + accent color that identify it, the hero
// screenshot that tells its visual story, and how tall that screenshot gets
// to be inside the card (bigger grid cells get a bigger, more legible preview).
const CARD_META: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    accent: string;
    image: string;
    imageHeight: string;
  }
> = {
  "web-application": {
    icon: LayoutDashboard,
    accent: "#D0C9B9",
    image: layananMockups.sistemInformasi,
    imageHeight: "h-[220px] md:h-[260px]",
  },
  "portfolio": {
    icon: Layers,
    accent: "#F7C8FF",
    image: layananMockups.portofolio,
    imageHeight: "h-[200px] md:h-[230px]",
  },
  "e-commerce": {
    icon: ShoppingCart,
    accent: "#81FFBD",
    image: layananMockups.ecommerce,
    imageHeight: "h-[190px] md:h-[210px]",
  },
  "business-website": {
    icon: Building2,
    accent: "#3B82F6",
    image: layananMockups.companyProfile,
    imageHeight: "h-[160px] md:h-[180px]",
  },
  "custom-solution": {
    icon: LayoutTemplate,
    accent: "#3B82F6",
    image: layananMockups.landingPage,
    imageHeight: "h-[160px] md:h-[180px]",
  },
  "academic-project": {
    icon: GraduationCap,
    accent: "#3B82F6",
    image: layananMockups.skripsi,
    imageHeight: "h-[150px] md:h-[170px]",
  },
};

const CARD_DELAYS: Record<string, number> = {
  "web-application": 0.1,
  "portfolio": 0.2,
  "custom-solution": 0.3,
  "business-website": 0.4,
  "e-commerce": 0.5,
  "academic-project": 0.6,
};

function SectionHeader() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col md:flex-row items-start justify-between mb-12 md:mb-16 gap-8">
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-6 w-full md:max-w-[690px]"
      >
        <WordsReveal
          as="h2"
          className="text-4xl leading-tight text-neutral-900 dark:text-neutral-100 font-normal"
          text={bsLayananHeader.headline}
        />
        <div className="flex items-center gap-4">
          <Button variant="primary" href={bsLayananHeader.cta.href}>
            {bsLayananHeader.cta.label}
          </Button>
          <span className="md:hidden text-base text-neutral-500">{bsLayananHeader.eyebrow}</span>
        </div>
      </motion.div>
      <motion.p
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="hidden md:block text-xl text-neutral-500 text-right shrink-0"
      >
        {bsLayananHeader.eyebrow}
      </motion.p>
    </div>
  );
}

function LayananCardComponent({ card }: { card: LayananCard }) {
  const shouldReduceMotion = useReducedMotion();
  const meta = CARD_META[card.id];
  if (!meta) return null;

  const Icon = meta.icon;
  const delay = CARD_DELAYS[card.id] ?? 0.1;

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 50 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="relative h-full min-h-[380px] md:min-h-0 md:h-full rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 flex flex-col text-left"
    >
      {card.badge && (
        <div className="absolute top-5 right-5 z-10">
          <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0 text-[10px]">
            {card.badge}
          </Badge>
        </div>
      )}

      <div className="p-6 md:p-7 pb-5 flex flex-col gap-3 shrink-0">
        <div className="size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
          <Icon className="size-[18px]" style={{ color: meta.accent }} />
        </div>
        <div className="flex flex-col gap-1.5">
          <WordsReveal
            as="h3"
            className="text-xl md:text-2xl text-neutral-100 font-medium leading-tight"
            text={card.title}
            delay={delay + 0.15}
          />
          <WordsReveal
            as="p"
            className="text-sm text-neutral-400 leading-relaxed"
            text={card.description}
            delay={delay + 0.3}
            step={0.03}
            duration={0.5}
          />
        </div>
      </div>

      <motion.div
        className={`relative mx-4 md:mx-5 mb-4 md:mb-5 mt-auto ${meta.imageHeight} rounded-xl overflow-hidden border border-white/10 bg-black shrink-0`}
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: delay + 0.25 }}
      >
        <img
          src={meta.image}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}

function LayananCards() {
  return (
    <div className="flex flex-col gap-5">
      {/* Desktop layout: asymmetric bento grid */}
      <div
        className="hidden md:grid gap-5"
        style={{
          gridTemplateAreas: `
            "step account account"
            "step trusted loan"
            "deals deals track"
          `,
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "minmax(330px, auto) minmax(310px, auto) minmax(320px, auto)",
        }}
      >
        {bsLayananCards.map((card) => (
          <div key={card.id} style={{ gridArea: card.gridArea }}>
            <LayananCardComponent card={card} />
          </div>
        ))}
      </div>

      {/* Mobile fallback: simple stacked column, ignore grid areas entirely */}
      <div className="grid grid-cols-1 gap-5 md:hidden">
        {bsLayananCards.map((card) => (
          <LayananCardComponent key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export function LayananSection() {
  return (
    <section className="px-[20px] py-16 md:py-20" id="layanan">
      <SectionHeader />
      <LayananCards />
    </section>
  );
}

export default LayananSection;