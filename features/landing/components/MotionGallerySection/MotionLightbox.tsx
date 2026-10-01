"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import type { MotionFilm } from "@/constants/landing";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";
import { useIsMobile } from "@/hooks/use-mobile";
import { hasMuxVideo } from "@/lib/mux";
import { cn } from "@/lib/utils";

// Mux Player cukup besar, jadi baru di-load saat lightbox pertama kali dibuka.
const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
  loading: () => <div className="size-full animate-pulse bg-white/5" />,
});

const noopSubscribe = () => () => {};

interface MotionLightboxProps {
  films: MotionFilm[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
}

export function MotionLightbox({ films, index, onIndexChange }: MotionLightboxProps) {
  // true hanya di client, supaya portal ke document.body tidak jalan saat SSR.
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const lenis = useSmoothScroll();
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;

  // Kunci scroll halaman, kembalikan fokus ke pemicu saat ditutup.
  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      previousFocus?.focus();
    };
  }, [open, lenis]);

  useEffect(() => {
    if (!open) return;
    const step = (delta: number) =>
      onIndexChange(((index ?? 0) + delta + films.length) % films.length);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onIndexChange(null);
      // Panah di dalam player dipakai untuk seek, jangan diambil alih.
      const inPlayer = (e.target as HTMLElement | null)?.closest?.("mux-player");
      if (inPlayer || films.length < 2) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    // Focus trap sederhana: fokus yang keluar dialog dikembalikan ke tombol tutup.
    const onFocusIn = (e: FocusEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
        closeRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, [open, index, films.length, onIndexChange]);

  if (!mounted) return null;

  const film = open ? films[index] : null;
  const video = film && isMobile && hasMuxVideo(film.portrait) ? film.portrait : film?.video;
  const portrait = !!film && (film.aspect === "9:16" || video === film.portrait);
  const step = (delta: number) =>
    onIndexChange(((index ?? 0) + delta + films.length) % films.length);

  return createPortal(
    <AnimatePresence>
      {film && video && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={film.title}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 px-4 py-16 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onIndexChange(null);
          }}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => onIndexChange(null)}
            aria-label="Tutup video"
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
          >
            <X className="size-5" />
          </button>

          <motion.div
            key={film.slug}
            className={cn(
              "relative overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10",
              portrait
                ? "aspect-[9/16] h-[min(72svh,calc(92vw*16/9))]"
                : "aspect-video w-[min(92vw,calc(72svh*16/9))]"
            )}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            {hasMuxVideo(video) ? (
              <MuxPlayer
                playbackId={video.playbackId}
                streamType="on-demand"
                autoPlay
                accentColor="#3B82F6"
                metadata={{ video_title: film.title, video_id: film.slug }}
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <div className="grid size-full place-items-center text-sm text-white/40">
                Video belum diunggah ke Mux
              </div>
            )}
          </motion.div>

          <div className="mt-5 flex w-full max-w-3xl items-center justify-between gap-4 text-white">
            {films.length > 1 ? (
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Video sebelumnya"
                className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
              >
                <ChevronLeft className="size-5" />
              </button>
            ) : (
              <span className="size-11" />
            )}
            <div className="min-w-0 text-center">
              <p className="text-xs uppercase tracking-[0.08em] text-white/50">
                {film.category} · {film.duration} · {film.aspect}
              </p>
              <h3 className="mt-1 truncate text-lg font-semibold md:text-2xl">{film.title}</h3>
              {film.tiktokUrl && (
                <a
                  href={film.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
                >
                  Tonton di TikTok <ExternalLink className="size-3.5" />
                </a>
              )}
            </div>
            {films.length > 1 ? (
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Video berikutnya"
                className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
              >
                <ChevronRight className="size-5" />
              </button>
            ) : (
              <span className="size-11" />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
