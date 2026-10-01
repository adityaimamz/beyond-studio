"use client";

import { Film } from "lucide-react";
import { bsMotionFilms, type MuxVideo } from "@/constants/landing";
import { AutoplayVideo } from "@/components/common";
import { hasMuxVideo, muxPosterUrl } from "@/lib/mux";
import { cn } from "@/lib/utils";

// Film yang belum punya video di Mux: disembunyikan di production, tetap
// tampil sebagai placeholder di dev supaya layout bisa dicek.
export const visibleMotionFilms =
  process.env.NODE_ENV === "production"
    ? bsMotionFilms.filter((film) => hasMuxVideo(film.video))
    : bsMotionFilms;

export function FilmMedia({
  video,
  label,
  className,
}: {
  video?: MuxVideo;
  label: string;
  className?: string;
}) {
  if (!hasMuxVideo(video)) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-2 bg-neutral-900 text-center text-xs text-white/40",
          className
        )}
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, color-mix(in srgb, var(--primary) 30%, transparent), #0a0a0a 70%)",
        }}
      >
        <Film className="size-6" />
        <span className="px-4">Video belum diunggah ke Mux</span>
      </div>
    );
  }

  return (
    <AutoplayVideo
      src={video.previewSrc}
      poster={muxPosterUrl(video)}
      label={label}
      className={cn("object-cover", className)}
    />
  );
}
