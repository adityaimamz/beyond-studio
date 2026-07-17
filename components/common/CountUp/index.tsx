"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useInView as useInViewFM } from "framer-motion";

export interface CountUpProps {
  end: number;
  duration?: number;
  active: boolean;
  format?: (n: number) => string;
}

export function CountUp({
  end,
  duration = 1500,
  active,
  format = (n: number) => n.toLocaleString("en-US"),
}: CountUpProps) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, end, duration]);

  return <>{format(val)}</>;
}

export interface CountUpInViewProps {
  end: number;
  duration?: number;
  delay?: number;
  format?: (n: number) => string;
  active?: boolean;
}

export function CountUpInView({
  end,
  duration = 1500,
  delay = 0,
  format,
  active,
}: CountUpInViewProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInViewFM(ref, { once: true, margin: "-100px" });
  const trigger = active === undefined ? inView : active;
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    const t = setTimeout(() => setStart(true), delay);
    return () => clearTimeout(t);
  }, [trigger, delay]);

  return (
    <span ref={ref}>
      <CountUp end={end} duration={duration} active={start} format={format} />
    </span>
  );
}

export interface CountNumberProps {
  to: number;
  duration?: number;
  start: boolean;
}

export function CountNumber({ to, duration = 1.5, start }: CountNumberProps) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!start) return;
    const controls = animate(mv, to, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [start, to, duration, mv]);

  return <motion.span>{rounded}</motion.span>;
}
