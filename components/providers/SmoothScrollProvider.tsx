'use client';

import { useEffect, useState, createContext, useContext, ReactNode } from 'react';
import Lenis from 'lenis';
import { useAnimationFrame } from 'framer-motion';

// Membuat Context untuk membagikan instance Lenis
const SmoothScrollContext = createContext<Lenis | null>(null);

// Custom hook agar komponen lain bisa menggunakan Lenis (misal: untuk event scroll)
export const useSmoothScroll = () => useContext(SmoothScrollContext);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = 'manual';
    }
    const lenis = new Lenis({
      autoRaf: false,
      anchors: true, // Otomatis meng-handle smooth scroll untuk href="#id"
    });

    setLenisInstance(lenis);

    return () => {
      lenis.destroy();
    };
  }, []);

  useAnimationFrame(() => {
    if (lenisInstance) {
      lenisInstance.raf(performance.now());
    }
  });

  return (
    <SmoothScrollContext.Provider value={lenisInstance}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

