"use client";

import { useState } from "react";
import type { ImageSlot } from "@/lib/site";

/**
 * Renders the slot's photo (from src/lib/site.ts). Tries `src` first, then
 * `fallbackSrc` if that fails to load, then the branded gradient placeholder,
 * so a missing local file or dead URL never leaves a broken image.
 */
export default function FoodImage({
  slot,
  className = "",
  showLabel = true,
}: {
  slot: ImageSlot;
  className?: string;
  showLabel?: boolean;
}) {
  const [attempt, setAttempt] = useState(0);
  const sources = [slot.src, slot.fallbackSrc].filter(
    (s): s is string => Boolean(s),
  );
  const current = sources[attempt];

  if (current) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        key={current}
        src={current}
        alt={slot.alt}
        className={`h-full w-full object-cover ${className}`}
        loading="lazy"
        onError={() => setAttempt((a) => a + 1)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={slot.alt}
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-linear-to-br ${slot.gradient} ${className}`}
    >
      <span aria-hidden="true" className="text-5xl drop-shadow-lg sm:text-6xl">
        {slot.emoji}
      </span>
      {showLabel && (
        <span
          aria-hidden="true"
          className="px-3 text-center font-display text-sm tracking-wide text-white drop-shadow-md"
        >
          {slot.label}
        </span>
      )}
    </div>
  );
}
