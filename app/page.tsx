import * as React from "react";
import { Navbar, Footer } from "@/components/layout";

import {
  HeroSection,
  LayananSection,
  CraftsmanshipSection,
  StatsSection,
  PillTagsSection,
  PaketHargaSection,
  ContactSection,
  ReelTheaterSection,
  MotionGallerySection
} from "@/features/landing/components";

import { AuroraTestimoniFaqSection } from "@/features/landing/components/AuroraTestimoniFaqSection";
import { PortfolioSection } from "@/components/ui/portfolio-section";

export default function Index() {
  return (
    <div className="relative w-full bg-background transition-colors duration-500 overflow-x-clip">
      <Navbar />
      <HeroSection />
      <ReelTheaterSection />
      <LayananSection />
      <CraftsmanshipSection />
      <PortfolioSection />
      <StatsSection />
      <MotionGallerySection />
      <PillTagsSection />
      <PaketHargaSection />
      <AuroraTestimoniFaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
