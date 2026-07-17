"use client";

import type * as React from "react";

export interface StaggeredWordsProps {
  text: string;
  baseDelay?: number;
  step?: number;
  active?: boolean;
  groupSize?: number;
}

export function StaggeredWords({
  text,
  baseDelay = 0,
  step = 90,
  active = true,
  groupSize = 1,
}: StaggeredWordsProps) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => {
        const group = Math.floor(i / groupSize);
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: active ? undefined : 0,
              animation: active ? "rise-up 0.9s ease-out forwards" : undefined,
              animationDelay: active ? `${baseDelay + group * step}ms` : undefined,
            }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        );
      })}
    </>
  );
}
