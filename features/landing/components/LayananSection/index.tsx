"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WordsReveal, ServiceVisual, type ServiceVisualVariant } from "@/components/common";
import { bsLayananHeader, bsLayananCards, type LayananCard } from "@/constants/landing";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  Layers,
  LayoutTemplate,
  Building2,
  ShoppingCart,
  GraduationCap,
} from "lucide-react";

// One entry per service: the icon + accent color that identify it, the
// ServiceVisual mockup variant that tells its visual story, and how tall
// that mockup gets inside the card (bigger grid cells get a bigger preview).
const CARD_META: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    accent: string;
    visual: ServiceVisualVariant;
    imageHeight: string;
  }
> = {
  "web-application": {
    icon: LayoutDashboard,
    accent: "#D0C9B9",
    visual: "web",
    imageHeight: "h-[220px] md:h-[260px]",
  },
  "portfolio": {
    icon: Layers,
    accent: "#F7C8FF",
    visual: "folio",
    imageHeight: "h-[200px] md:h-[230px]",
  },
  "e-commerce": {
    icon: ShoppingCart,
    accent: "#81FFBD",
    visual: "shop",
    imageHeight: "h-[190px] md:h-[210px]",
  },
  "business-website": {
    icon: Building2,
    accent: "#3B82F6",
    visual: "biz",
    imageHeight: "h-[160px] md:h-[180px]",
  },
  "custom-solution": {
    icon: LayoutTemplate,
    accent: "#3B82F6",
    visual: "custom",
    imageHeight: "h-[160px] md:h-[180px]",
  },
  "academic-project": {
    icon: GraduationCap,
    accent: "#3B82F6",
    visual: "academic",
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
    <div className="flex flex-col md:flex-row items-end justify-between mb-10 md:mb-12 gap-8">
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-4 w-full md:max-w-[640px]"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-500">
          {bsLayananHeader.eyebrow}
        </span>
        <WordsReveal
          as="h2"
          className="text-4xl md:text-[46px] leading-[1.1] text-neutral-900 dark:text-neutral-100 font-medium tracking-tight"
          text={bsLayananHeader.headline}
        />
      </motion.div>
      <motion.p
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 40 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="text-[15px] leading-relaxed text-neutral-500 md:text-right max-w-[280px] shrink-0"
      >
        {bsLayananHeader.subheadline}
      </motion.p>
    </div>
  );
}

function LayananChip({ label }: { label: string }) {
  const isMore = label.startsWith("+");
  return (
    <span
      className={
        isMore
          ? "text-[11px] text-neutral-500 px-2.5 py-1 rounded-full border border-dashed border-white/15"
          : "text-[11px] text-neutral-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/10"
      }
    >
      {label}
    </span>
  );
}

function LayananCardComponent({ card, index }: { card: LayananCard; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const meta = CARD_META[card.id];
  if (!meta) return null;

  const Icon = meta.icon;
  const delay = CARD_DELAYS[card.id] ?? 0.1;
  const number = String(index + 1).padStart(2, "0");
  const isWide = card.gridArea === "custom";

  if (isWide) {
    return (
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 50 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
        className="relative h-full min-h-[380px] md:min-h-0 rounded-3xl overflow-hidden bg-neutral-950 border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-7 md:p-9 text-left"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Icon className="size-[18px]" style={{ color: meta.accent }} />
            </div>
            <span className="text-[11px] font-semibold tracking-widest text-neutral-600">{number}</span>
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
          <div className="flex flex-wrap gap-2 mt-1">
            {card.chips.map((chip) => (
              <LayananChip key={chip} label={chip} />
            ))}
          </div>
        </div>
        <div className="relative h-[200px] md:h-[240px]">
          <ServiceVisual variant={meta.visual} />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 50 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="group relative h-full min-h-[380px] md:min-h-0 md:h-full rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 flex flex-col text-left"
    >
      <div className="p-6 md:p-7 pb-5 flex flex-col gap-3 shrink-0">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Icon className="size-[18px]" style={{ color: meta.accent }} />
            </div>
            <span className="text-[11px] font-semibold tracking-widest text-neutral-600">{number}</span>
          </div>
          {card.badge && (
            <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0 text-[10px]">
              {card.badge}
            </Badge>
          )}
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

        {/* Mobile: chips shown statically (no hover on touch), same treatment as the Custom Solution card */}
        <div className="flex md:hidden flex-wrap gap-2 mt-1">
          {card.chips.map((chip) => (
            <LayananChip key={chip} label={chip} />
          ))}
        </div>
      </div>

      <motion.div
        className={`relative mx-4 md:mx-5 mb-4 md:mb-5 mt-auto pt-4 pr-2 ${meta.imageHeight} shrink-0`}
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: delay + 0.25 }}
      >
        <ServiceVisual variant={meta.visual} />
        {/* Desktop: chips revealed on hover, sliding up over the visual */}
        <div className="hidden md:flex absolute inset-x-0 bottom-0 rounded-b-xl overflow-hidden translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-neutral-950/95 backdrop-blur-sm border-t border-white/10 px-4 py-3.5 flex-wrap gap-1.5">
          <span className="w-full text-[10px] font-semibold tracking-widest uppercase text-neutral-500 mb-0.5">
            Cocok untuk
          </span>
          {card.chips.map((chip) => (
            <LayananChip key={chip} label={chip} />
          ))}
        </div>
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
            "web web web folio folio folio"
            "shop shop biz biz academic academic"
            "custom custom custom custom custom custom"
          `,
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "minmax(420px, auto) minmax(380px, auto) minmax(260px, auto)",
        }}
      >
        {bsLayananCards.map((card, index) => (
          <div key={card.id} style={{ gridArea: card.gridArea }}>
            <LayananCardComponent card={card} index={index} />
          </div>
        ))}
      </div>

      {/* Mobile fallback: simple stacked column, ignore grid areas entirely */}
      <div className="grid grid-cols-1 gap-5 md:hidden">
        {bsLayananCards.map((card, index) => (
          <LayananCardComponent key={card.id} card={card} index={index} />
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