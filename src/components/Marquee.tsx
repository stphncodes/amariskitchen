"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const ITEMS = [
  "Jollof Rice",
  "Celebration Cakes",
  "Small Chops",
  "Fresh Pastries",
  "Natural Drinks",
  "Suya & Grills",
  "Surprise Packages",
  "Catering & Delivery",
];

/** Endless scrolling ribbon of dishes: decorative brand energy. */
export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 28,
      repeat: -1,
      ease: "none",
    });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    // Outer wrapper clips the tilted band so it can't cause horizontal
    // scrolling on small screens
    <div aria-hidden="true" className="relative z-10 -my-4 overflow-hidden py-1">
      <div className="-mx-2 -rotate-1 overflow-hidden border-y-4 border-brand-gold bg-brand-orange py-3 shadow-xl shadow-black/30">
        <div ref={trackRef} className="flex w-max whitespace-nowrap">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-6 pr-6 font-display text-lg tracking-wide text-brand-black uppercase sm:text-xl"
            >
              {item}
              <span className="text-brand-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
