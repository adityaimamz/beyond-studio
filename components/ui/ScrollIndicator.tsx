"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export interface ScrollIndicatorProps {
  /**
   * Warna atau gradient background untuk scroll indicator.
   * Default: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)"
   */
  color?: string;
  /**
   * Ketebalan garis progress bar.
   * Default: "2px"
   */
  height?: string;
  /**
   * Z-index agar progress bar selalu berada di atas elemen lain.
   * Default: 100
   */
  zIndex?: number;
}

export function ScrollIndicator({
  color = "linear-gradient(90deg, #3B82F6 0%, #1D4ED8 100%)", // Menggunakan gradasi primary blue sesuai warna Beyond Studio
  height = "3px",
  zIndex = 100,
}: ScrollIndicatorProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height,
        zIndex,
        background: color,
        scaleX,
        transformOrigin: "left",
      }}
    />
  );
}
