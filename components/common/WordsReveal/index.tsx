"use client";

import type * as React from "react";
import { motion } from "framer-motion";

export interface WordsRevealProps {
  text: string;
  className?: string;
  as?: "span" | "h2" | "h3" | "p";
  step?: number;
  delay?: number;
  duration?: number;
  active?: boolean;
}

export function WordsReveal({
  text,
  className,
  as = "span",
  step = 0.06,
  delay = 0,
  duration = 0.7,
  active,
}: WordsRevealProps) {
  const words = text.split(" ");
  const MotionTag = motion[as] as typeof motion.span;
  const triggerProps =
    active === undefined
      ? { whileInView: "visible" as const, viewport: { once: true, amount: 0 } }
      : { animate: active ? ("visible" as const) : ("hidden" as const) };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      {...triggerProps}
      transition={{ staggerChildren: step, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          variants={{
            hidden: { opacity: 0, y: 18 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration, ease: "easeOut" }}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
