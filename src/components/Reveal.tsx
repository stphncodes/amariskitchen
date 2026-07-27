"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Variant = "up" | "left" | "right" | "zoom";

const FROM: Record<Variant, gsap.TweenVars> = {
  up: { y: 48 },
  left: { x: -56 },
  right: { x: 56 },
  zoom: { scale: 0.82 },
};

/**
 * GSAP ScrollTrigger reveal: animates content in when it scrolls into view.
 * Content stays fully visible when JavaScript is disabled (noscript override
 * in layout.tsx) or reduced motion is preferred.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
  variant?: Variant;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1 });
      return;
    }

    const tween = gsap.fromTo(
      el,
      { opacity: 0, ...FROM[variant] },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        delay: delay / 1000,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, variant]);

  return (
    <div ref={ref} className={`gsap-reveal ${className}`}>
      {children}
    </div>
  );
}
