import type { MuxVideo } from "@/constants/landing";

export function hasMuxVideo(video?: MuxVideo): video is MuxVideo {
  return !!video?.playbackId && !!video.previewSrc;
}

// Frame pertama clip preview, diambil dari master Mux, jadi poster dan video
// nyambung tanpa lompatan dan tanpa asset tambahan.
export function muxPosterUrl(video: MuxVideo, width = 1280) {
  return `https://image.mux.com/${video.playbackId}/thumbnail.webp?time=${video.posterTime ?? 0}&width=${width}`;
}
