"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { bsKontakContent, bsMotionHeader, type MotionFilm } from "@/constants/landing";
import { useInView } from "@/hooks/use-in-view";
import { muxPosterUrl, hasMuxVideo } from "@/lib/mux";
import { cn } from "@/lib/utils";
import { FilmMedia, visibleMotionFilms } from "./FilmMedia";
import { MotionLightbox } from "./MotionLightbox";

export { MotionLightbox } from "./MotionLightbox";
export { FilmMedia, visibleMotionFilms } from "./FilmMedia";

function reveal(inView: boolean) {
  return cn(
    "transition-all duration-500 ease-out motion-reduce:transition-none",
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  );
}

function GalleryHeader() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="text-center max-w-2xl mx-auto">
      <div
        className={cn(
          "inline-flex items-center justify-center px-4 py-1 mb-6 rounded-full border border-border text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground",
          reveal(inView)
        )}
      >
        {bsMotionHeader.eyebrow}
      </div>
      <h2 className={cn("text-4xl md:text-5xl font-bold leading-[1.15] text-foreground mb-4 delay-100", reveal(inView))}>
        {bsMotionHeader.headline}
      </h2>
      <p className={cn("text-lg leading-[1.6] text-muted-foreground delay-200", reveal(inView))}>
        {bsMotionHeader.subheadline}
      </p>
    </div>
  );
}

function FilmCard({ film, onOpen }: { film: MotionFilm; onOpen: () => void }) {
  const portrait = film.aspect === "9:16";

  return (
    <article
      className={cn(
        "group relative flex shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-border bg-surface",
        "w-[85vw] max-w-sm sm:max-w-md lg:w-auto lg:max-w-none",
        portrait ? "lg:col-span-4" : "lg:col-span-6"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-black",
          portrait ? "aspect-[4/5] lg:aspect-auto lg:h-[440px] flex items-center justify-center py-5" : "aspect-video"
        )}
      >
        {portrait ? (
          <>
            {hasMuxVideo(film.video) && (
              <img
                src={muxPosterUrl(film.video, 480)}
                alt=""
                aria-hidden
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full scale-110 object-cover opacity-50 blur-2xl"
              />
            )}
            {/* Mockup HP: tanpa transform supaya tombol pause tetap di atas overlay klik. */}
            <div className="relative h-full aspect-[9/16] overflow-hidden rounded-[28px] ring-[6px] ring-neutral-800 shadow-2xl">
              <FilmMedia video={film.video} label={film.title} className="absolute inset-0 size-full" />
            </div>
          </>
        ) : (
          <FilmMedia video={film.video} label={film.title} className="absolute inset-0 size-full" />
        )}

        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-neutral-900 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        >
          <Play className="size-4 fill-current" /> Tonton dengan suara
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full border border-border px-2.5 py-0.5 font-medium uppercase tracking-[0.08em]">
            {film.category}
          </span>
          <span>
            {film.duration} · {film.aspect}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold leading-[1.2] text-foreground">{film.title}</h3>
        <p className="text-sm md:text-base leading-[1.6] text-muted-foreground line-clamp-3">{film.description}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {film.tech.map((t) => (
            <li key={t} className="rounded-md bg-background px-2 py-1 text-xs font-mono text-muted-foreground">
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Seluruh kartu bisa diklik; tombol pause video ada di z-20 di atasnya. */}
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Tonton ${film.title} dengan suara`}
        className="absolute inset-0 z-10 rounded-3xl cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      />
    </article>
  );
}

export function MotionGallerySection() {
  const [active, setActive] = useState<number | null>(null);
  const films = visibleMotionFilms;
  if (films.length === 0) return null;

  const whatsappUrl = `https://wa.me/${bsKontakContent.whatsappNumberPlaceholder}?text=${encodeURIComponent(
    bsMotionHeader.whatsappText
  )}`;

  return (
    <section id="motion" className="relative bg-background scroll-mt-24 py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <GalleryHeader />

        <div
          className={cn(
            "mt-12 lg:mt-16 -mx-6 px-6 md:-mx-12 md:px-12 scroll-px-6 md:scroll-px-12",
            "flex items-start gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "lg:mx-0 lg:px-0 lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-6 lg:overflow-visible"
          )}
        >
          {films.map((film, i) => (
            <FilmCard key={film.slug} film={film} onOpen={() => setActive(i)} />
          ))}
        </div>

        <div className="mt-12 lg:mt-16 flex flex-col gap-6 rounded-3xl border border-border bg-surface p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold leading-[1.2] text-foreground">
              {bsMotionHeader.ctaHeadline}
            </h3>
            <p className="mt-2 max-w-xl text-muted-foreground leading-[1.6]">{bsMotionHeader.ctaDescription}</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flow-hover before:bg-white bg-primary hover:text-primary text-white text-sm sm:text-[15px] font-medium rounded-xl h-12 px-6 flex shrink-0 items-center justify-center w-full md:w-auto cursor-pointer"
          >
            {bsMotionHeader.ctaLabel}
          </a>
        </div>
      </div>

      <MotionLightbox films={films} index={active} onIndexChange={setActive} />
    </section>
  );
}
