import { useEffect, useRef, useState } from "react";

export interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

export function useInView<T extends HTMLElement = HTMLElement>(
  options: UseInViewOptions = { threshold: 0 }
) {
  const { once = true, ...observerOptions } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) {
            obs.disconnect();
            break;
          }
        } else if (!once) {
          setInView(false);
        }
      }
    }, observerOptions);
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [once]);

  return { ref, inView };
}
