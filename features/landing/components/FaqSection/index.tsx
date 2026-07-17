"use client";

import { FAQ1 } from "@/components/ui/faq-monocrhome";
import { bsFaqList } from "@/constants/landing";

export function FaqSection() {
  return (
    <FAQ1
      id="faq"
      seamlessTop
      items={bsFaqList}
      introLabel="Beyond FAQ"
      eyebrow="Pertanyaan"
      title="Jawaban yang jelas sebelum kamu mulai."
      description="Hal-hal yang sering ditanyakan tentang paket, timeline, revisi, dan proses kerja Beyond Studio — ringkas dan transparan."
    />
  );
}
