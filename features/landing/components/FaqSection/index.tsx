"use client";

import { FAQ1 } from "@/components/ui/faq-monocrhome";
import { bsFaqList } from "@/constants/landing";

/**
 * FaqSection
 */
export function FaqSection({ hideBackground = false }: { hideBackground?: boolean }) {
  return (
    <FAQ1
      id="faq"
      seamlessTop
      hideBackground={hideBackground}
      items={bsFaqList}
      introLabel="FAQ"
      eyebrow="Pertanyaan"
      title="Jawaban yang jelas sebelum kamu mulai."
      description="Hal-hal yang sering ditanyakan tentang paket, timeline, revisi, dan proses kerja Beyond Studio   ringkas dan transparan."
    />
  );
}

export default FaqSection;
