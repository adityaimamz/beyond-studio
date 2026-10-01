"use client";

import { useRef, useState } from "react";
import { motion, transform, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Play } from "lucide-react";
import { bsReelTheaterContent, type MotionFilm } from "@/constants/landing";
import { WordsReveal } from "@/components/common";
import { hasMuxVideo } from "@/lib/mux";
import { cn } from "@/lib/utils";
import { FilmMedia, MotionLightbox, visibleMotionFilms } from "../MotionGallerySection";

const content = bsReelTheaterContent;

// Opacity dari useTransform biasa diakselerasi Framer lewat ScrollTimeline native,
// yang mengabaikan offset section ini (nilainya melompat-lompat). Mapping berbentuk
// fungsi memaksa perhitungan di JS, sama seperti scale dan y.
function useOpacityRange(progress: MotionValue<number>, input: number[], output: number[]) {
  const map = transform(input, output);
  return useTransform(progress, (v) => map(v));
}

function Eyebrow({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border px-4 py-1 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground",
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-red-500 animate-pulse motion-reduce:animate-none" />
      {content.eyebrow}
    </span>
  );
}

function WatchButton({ onClick, className }: { onClick: () => void; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flow-hover before:bg-white bg-primary hover:text-primary text-white text-sm sm:text-[15px] font-medium rounded-xl h-12 px-6 inline-flex items-center justify-center gap-2 cursor-pointer",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className
      )}
    >
      <Play className="size-4 fill-current" />
      {content.cta}
    </button>
  );
}

// Desktop: bingkai kecil membesar jadi full-bleed sambil "lampu theater" meredup.
// Seluruh gerak diturunkan dari progress scroll section (sticky + useScroll).
function PinnedTheater({ film, onOpen }: { film: MotionFilm; onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const scale = useTransform(scrollYProgress, [0, 0.5, 0.82, 1], [0.5, 1, 1, 0.92]);
  const radius = useTransform(scrollYProgress, [0, 0.5], [48, 0]);
  const dim = useOpacityRange(scrollYProgress, [0.08, 0.45], [0, 1]);
  const introOpacity = useOpacityRange(scrollYProgress, [0.02, 0.25], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.25], [0, -80]);
  const hintY = useTransform(scrollYProgress, [0, 0.25], [0, 80]);
  const captionOpacity = useOpacityRange(scrollYProgress, [0.5, 0.62], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.5, 0.62], [24, 0]);

  return (
    <div ref={ref} className="relative hidden lg:block h-[260vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div aria-hidden className="absolute inset-0 bg-black" style={{ opacity: dim }} />

        <motion.div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 flex h-1/4 flex-col items-center justify-end gap-4 pb-6 text-center"
          style={{ opacity: introOpacity, y: introY }}
        >
          <Eyebrow />
          <WordsReveal
            as="h2"
            text={content.headline}
            className="text-4xl xl:text-5xl font-bold leading-[1.15] text-foreground"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-20 overflow-hidden bg-black will-change-transform"
          style={{ scale, borderRadius: radius }}
        >
          {/* contain: full-bleed tidak boleh memotong isi video di rasio layar selain 16:9. */}
          <FilmMedia video={film.video} label={film.title} className="absolute inset-0 size-full object-contain" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"
          />
          {/* Klik di mana saja pada bingkai membuka video penuh; tombol pause ada di atasnya (z-20). */}
          <button
            type="button"
            onClick={onOpen}
            aria-label={`${content.cta}: ${film.title}`}
            className="absolute inset-0 z-10 cursor-pointer"
            tabIndex={-1}
          />
          <motion.div
            className="pointer-events-none absolute bottom-12 left-12 right-24 z-10 flex items-end justify-between gap-8"
            style={{ opacity: captionOpacity, y: captionY }}
          >
            <div className="text-white">
              <p className="text-xs uppercase tracking-[0.08em] text-white/60">{content.caption}</p>
              <p className="mt-2 text-3xl font-semibold">{film.title}</p>
            </div>
            <WatchButton onClick={onOpen} className="pointer-events-auto" />
          </motion.div>
        </motion.div>

        <motion.p
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex h-1/4 items-start justify-center pt-6 text-center text-lg text-muted-foreground"
          style={{ opacity: introOpacity, y: hintY }}
        >
          {content.subheadline}
        </motion.p>
      </div>
    </div>
  );
}

// Mobile/tablet dan reduced motion: tanpa pin, bingkai langsung tampil.
function StaticTheater({ film, onOpen, className }: { film: MotionFilm; onOpen: () => void; className?: string }) {
  const portrait = film.portrait;

  return (
    <div className={cn("px-5 py-16 md:px-12 md:py-20", className)}>
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <Eyebrow />
        <WordsReveal
          as="h2"
          text={content.headline}
          className="text-[34px] leading-[1.15] md:text-5xl font-bold text-foreground"
        />
        <p className="text-base md:text-lg leading-[1.6] text-muted-foreground">{content.subheadline}</p>
      </div>

      <div className="mt-10">
        {portrait && (
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-border md:hidden">
            <FilmMedia
              video={hasMuxVideo(portrait) ? portrait : film.video}
              label={film.title}
              className="absolute inset-0 size-full"
            />
          </div>
        )}
        <div
          className={cn(
            "relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-border",
            portrait && "hidden md:block"
          )}
        >
          <FilmMedia video={film.video} label={film.title} className="absolute inset-0 size-full" />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 text-center">
        <WatchButton onClick={onOpen} className="w-full sm:w-auto" />
        <p className="text-xs uppercase tracking-[0.08em] text-muted-foreground">{content.caption}</p>
      </div>
    </div>
  );
}

export function ReelTheaterSection() {
  const [active, setActive] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const index = visibleMotionFilms.findIndex((f) => f.slug === content.filmSlug);
  if (index === -1) return null;

  const film = visibleMotionFilms[index];
  const open = () => setActive(index);

  return (
    <section id="showreel" aria-label="Showreel" className="relative bg-background scroll-mt-24">
      {!reduceMotion && <PinnedTheater film={film} onOpen={open} />}
      <StaticTheater film={film} onOpen={open} className={reduceMotion ? undefined : "lg:hidden"} />
      <MotionLightbox films={visibleMotionFilms} index={active} onIndexChange={setActive} />
    </section>
  );
}
