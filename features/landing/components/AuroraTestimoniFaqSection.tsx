"use client";

import * as React from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { getAuroraStyle } from "@/components/ui/faq-monocrhome";
import { TestimoniSection } from "@/features/landing/components/TestimoniSection";
import { FaqSection } from "@/features/landing/components/FaqSection";

export function AuroraTestimoniFaqSection() {
  const { theme } = useTheme();
  const aurora = React.useMemo(() => getAuroraStyle(theme, true), [theme]);

  return (
    <div className={`relative w-full z-[5] overflow-visible transition-colors duration-700 ${theme === "dark" ? "text-neutral-100" : "text-neutral-900"}`}>
      <div className="pointer-events-none absolute inset-x-0 -top-56 bottom-0 z-0 md:-top-80 lg:-top-96" style={{ maskImage: "linear-gradient(to bottom, transparent, black 15%, black)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black)" }}>
        <div className="absolute inset-0" style={{ background: aurora.background }} />
        <div
          className="absolute inset-0 opacity-60"
          style={{ background: aurora.overlay }}
        />
      </div>
      <TestimoniSection transparent />
      <FaqSection hideBackground />
    </div>
  );
}
