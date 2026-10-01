"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AutoplayVideoProps {
  src: string;
  poster: string;
  label: string; // nama video untuk tombol pause/play
  className?: string;
  buttonClassName?: string;
}

// Video preview muted loop. File baru di-fetch saat mendekati viewport, hanya
// diputar saat minimal setengahnya terlihat, dan tidak autoplay kalau user
// memilih reduced motion. Tombol pause wajib ada (WCAG 2.2.2: konten bergerak > 5 s).
export function AutoplayVideo({ src, poster, label, className, buttonClassName }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  // null = ikuti default (autoplay kecuali reduced motion), true/false = pilihan user.
  const [manual, setManual] = useState<boolean | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const nearObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          nearObs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    const visibleObs = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.5,
    });
    nearObs.observe(el);
    visibleObs.observe(el);
    return () => {
      nearObs.disconnect();
      visibleObs.disconnect();
    };
  }, []);

  const wantPlay = near && visible && (manual ?? !reduceMotion);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (wantPlay) el.play().catch(() => setPlaying(false));
    else el.pause();
  }, [wantPlay]);

  const toggle = () => {
    setNear(true);
    setManual(!playing);
  };

  return (
    <>
      <video
        ref={videoRef}
        src={near ? src : undefined}
        poster={poster}
        muted
        loop
        playsInline
        preload={near ? "auto" : "none"}
        aria-hidden
        className={className}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Jeda preview ${label}` : `Putar preview ${label}`}
        className={cn(
          "absolute bottom-3 right-3 z-20 grid size-9 place-items-center rounded-full bg-black/55 text-white backdrop-blur-sm cursor-pointer",
          "transition-[background-color,transform] duration-[var(--duration-fast)] hover:bg-black/75 active:scale-95",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          buttonClassName
        )}
      >
        {playing ? <Pause className="size-4" /> : <Play className="size-4 translate-x-px" />}
      </button>
    </>
  );
}
