"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { REVIEW_IMAGES } from "@/lib/site";
import type { ImageSlot } from "@/lib/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** Standout lines transcribed from the review screenshots. */
const QUOTES = [
  { text: "Your gurasa is the best I've tasted so far", emoji: "🥹" },
  { text: "Your products are top notch — especially the zobo, I can't get enough of it", emoji: "👌" },
  { text: "I still can't forget the last one you did", emoji: "❤️" },
  { text: "Very nice. Wish I have more, gaskiya!", emoji: "😋" },
  { text: "Omo I miss this — so sweet", emoji: "🥺" },
];

type WallItem =
  | { kind: "shot"; slot: ImageSlot }
  | { kind: "quote"; text: string; emoji: string };

/** Interleave a quote card after every few screenshots. */
function buildRow(slots: ImageSlot[], quotes: typeof QUOTES): WallItem[] {
  const items: WallItem[] = [];
  let q = 0;
  slots.forEach((slot, i) => {
    items.push({ kind: "shot", slot });
    if ((i + 1) % 4 === 0 && q < quotes.length) {
      items.push({ kind: "quote", ...quotes[q++] });
    }
  });
  while (q < quotes.length) items.push({ kind: "quote", ...quotes[q++] });
  return items;
}

const half = Math.ceil(REVIEW_IMAGES.length / 2);
const ROWS: WallItem[][] = [
  buildRow(REVIEW_IMAGES.slice(0, half), QUOTES.slice(0, 3)),
  buildRow(REVIEW_IMAGES.slice(half), QUOTES.slice(3)),
];

function QuoteCard({ text, emoji, alt }: { text: string; emoji: string; alt: boolean }) {
  return (
    <figure
      className={`flex h-52 w-60 shrink-0 flex-col justify-between rounded-2xl p-5 text-left shadow-xl sm:h-64 sm:w-72 sm:p-6 ${
        alt
          ? "border border-brand-gold/40 bg-surface-alt"
          : "bg-linear-to-br from-brand-orange to-amber-500"
      }`}
    >
      <p
        aria-hidden="true"
        className={`font-display text-4xl leading-none ${alt ? "text-brand-gold" : "text-white/80"}`}
      >
        ❝
      </p>
      <blockquote
        className={`font-display text-base leading-snug sm:text-lg ${alt ? "text-ink" : "text-white"}`}
      >
        {text} {emoji}
      </blockquote>
      <figcaption
        className={`text-xs font-bold uppercase tracking-wider ${alt ? "text-brand-gold" : "text-white/85"}`}
      >
        ★★★★★ · Real client
      </figcaption>
    </figure>
  );
}

function ShotCard({ slot, onOpen }: { slot: ImageSlot; onOpen: () => void }) {
  const [failed, setFailed] = useState(false);
  if (failed || !slot.src) return null;
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="Enlarge this customer review"
      className="group shrink-0 transition-transform duration-300 hover:z-10 hover:scale-105"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={slot.src}
        alt={slot.alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-52 w-auto rounded-2xl border border-ink/10 bg-white object-contain shadow-xl transition-shadow group-hover:shadow-brand-orange/30 sm:h-64"
      />
    </button>
  );
}

/**
 * A 3D "movie credits" wall: two ribbons of review screenshots and quote
 * cards, tilted back in perspective, endlessly drifting in opposite
 * directions with a scroll parallax. Hover pauses; click enlarges.
 * Reduced motion (and no-JS) falls back to flat, swipeable rows.
 */
export default function ReviewWall() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);
  const [zoomed, setZoomed] = useState<ImageSlot | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }

    const ctx = gsap.context((self) => {
      const rows = [".review-row-a", ".review-row-b"];

      // Tilt the rows back in perspective (set via GSAP so the parallax
      // tween below composes with it instead of overwriting it).
      rows.forEach((row, i) => {
        gsap.set(row, {
          rotationX: 14,
          rotationZ: i === 0 ? -1.2 : 1.2,
          transformOrigin: "center center",
        });
        // Gentle parallax: rows slide apart slightly as you scroll past.
        gsap.fromTo(
          row,
          { x: i === 0 ? 40 : -40 },
          {
            x: i === 0 ? -40 : 40,
            ease: "none",
            scrollTrigger: {
              trigger: self.selector!(".review-rows")[0] as Element,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });

      // The endless drift, opposite directions.
      gsap.to(".review-track-a", { xPercent: -50, duration: 75, repeat: -1, ease: "none" });
      gsap.fromTo(
        ".review-track-b",
        { xPercent: -50 },
        { xPercent: 0, duration: 90, repeat: -1, ease: "none" },
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  // Pause the drift while the visitor is reading
  const setPaused = (paused: boolean) => {
    if (!wrapRef.current) return;
    gsap
      .getTweensOf(wrapRef.current.querySelectorAll(".review-track-a, .review-track-b"))
      .forEach((t) => (paused ? t.pause() : t.play()));
  };

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoomed(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoomed]);

  return (
    <div
      ref={wrapRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative mt-12 [perspective:1200px]"
    >
      <div className="review-rows">
        {ROWS.map((row, r) => (
          <div key={r} className={r === 0 ? "review-row-a" : "review-row-b mt-6"}>
            <div className={`${reduced ? "overflow-x-auto" : "overflow-hidden"} py-3`}>
              <div
                className={`${r === 0 ? "review-track-a" : "review-track-b"} flex w-max items-center gap-4 sm:gap-5`}
              >
                {(reduced ? row : [...row, ...row]).map((item, i) => (
                  <div
                    key={i}
                    aria-hidden={!reduced && i >= row.length ? "true" : undefined}
                    className={i % 2 === 0 ? "rotate-1" : "-rotate-1"}
                  >
                    {item.kind === "shot" ? (
                      <ShotCard slot={item.slot} onOpen={() => setZoomed(item.slot)} />
                    ) : (
                      <QuoteCard text={item.text} emoji={item.emoji} alt={i % 3 === 0} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edge fades so the ribbons melt into the section background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-surface to-transparent sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-surface to-transparent sm:w-24"
      />

      {/* Lightbox */}
      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Customer review, enlarged"
          onClick={() => setZoomed(null)}
          className="fixed inset-0 z-70 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={zoomed.src ?? undefined}
            alt={zoomed.alt}
            className="max-h-full max-w-full rounded-2xl bg-white object-contain shadow-2xl"
          />
          <button
            type="button"
            aria-label="Close enlarged review"
            onClick={() => setZoomed(null)}
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/25"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
