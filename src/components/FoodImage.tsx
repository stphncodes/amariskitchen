"use client";

import { useState } from "react";
import type { ImageSlot } from "@/lib/site";

/**
 * Renders the slot's photo (from src/lib/site.ts). If the slot has no src,
 * or the image fails to load, a branded gradient placeholder with emoji +
 * label renders instead, so a dead URL never leaves a broken image.
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
  const [failed, setFailed] = useState(false);

  if (slot.src && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={slot.src}
        alt={slot.alt}
        className={`h-full w-full object-cover ${className}`}
        loading="lazy"
        onError={() => setFailed(true)}
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
