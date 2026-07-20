"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  // Track scroll position using Motion's value event to avoid re-rendering entire tree on every tick
  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldShow = latest > 500;
    if (shouldShow !== isVisible) {
      setIsVisible(shouldShow);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[90] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-stone-900/40 text-white backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_20px_rgba(0,0,0,0.15)] transition-colors hover:bg-stone-900/60 dark:bg-white/10 dark:text-stone-50 dark:hover:bg-white/20"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
