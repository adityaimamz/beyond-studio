"use client";

import { useState, useEffect } from "react";

export function useHeroReady(delay = 2100) {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return heroReady;
}
export default useHeroReady;
