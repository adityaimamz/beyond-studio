"use client";

import { useEffect, useRef, useState } from "react";
import { useInView as useInViewFM } from "framer-motion";

export interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function Typewriter({ text, className, speed = 20, delay = 0 }: TypewriterProps) {
  const ref = useRef<HTMLPreElement>(null);
  const inView = useInViewFM(ref, { once: true, amount: 0 });
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    let raf = 0;
    const start = setTimeout(() => {
      const tick = () => {
        i += 1;
        setShown(text.slice(0, i));
        if (i < text.length) raf = window.setTimeout(tick, speed) as unknown as number;
      };
      tick();
    }, delay * 1000);
    return () => {
      clearTimeout(start);
      clearTimeout(raf);
    };
  }, [inView, text, speed, delay]);

  return (
    <pre ref={ref} className={className}>
      {shown}
      <span className="inline-block w-[0.5ch] -mb-0.5 bg-white/60 animate-pulse" style={{ height: "1em" }} />
    </pre>
  );
}

export interface TypingPlaceholderInputProps {
  placeholder: string;
  startDelay?: number;
  speed?: number;
}

export function TypingPlaceholderInput({
  placeholder,
  startDelay = 0,
  speed = 70,
}: TypingPlaceholderInputProps) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let i = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const start = setTimeout(() => {
      const tick = () => {
        if (cancelled) return;
        i += 1;
        setShown(placeholder.slice(0, i));
        if (i < placeholder.length) {
          timer = setTimeout(tick, speed);
        } else {
          setDone(true);
        }
      };
      tick();
    }, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(start);
      if (timer) clearTimeout(timer);
    };
  }, [placeholder, startDelay, speed]);

  return (
    <input
      type="text"
      placeholder={done ? placeholder : shown}
      className="flex-1 min-w-0 bg-transparent text-sm text-neutral-100 placeholder:text-transparent sm:placeholder:text-neutral-400 outline-none"
    />
  );
}
