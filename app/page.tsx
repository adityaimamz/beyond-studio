"use client";

import type * as React from "react";
import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  LayananSection,
  CraftsmanshipSection,
  StatsSection,
  PillTagsSection,
  PaketHargaSection,
  TestimoniSection,
  FaqSection,
} from "@/features/landing/components";

export default function Index() {
  return (
    <div className="relative w-full bg-background transition-colors duration-500 overflow-hidden">
      <div className="relative">
        <Navbar />
        <HeroSection />
      </div>
      <LayananSection />
      <CraftsmanshipSection />
      <StatsSection />
      <PillTagsSection />
      <PaketHargaSection />
      <TestimoniSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
