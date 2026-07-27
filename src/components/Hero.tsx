"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import FoodImage from "@/components/FoodImage";
import { HERO_IMAGE, SITE } from "@/lib/site";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(".hero-fx", { opacity: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-item",
        { opacity: 0, y: 44 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.12 },
      )
        .fromTo(
          ".hero-photo",
          { opacity: 0, scale: 0.7, rotate: -10 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1.1, ease: "back.out(1.4)" },
          "-=0.6",
        )
        .fromTo(
          ".hero-badge",
          { opacity: 0, scale: 0, rotate: -40 },
          { opacity: 1, scale: 1, rotate: 12, duration: 0.6, ease: "back.out(2.2)" },
          "-=0.4",
        );

      // Gentle idle motion after the entrance
      gsap.to(".hero-badge", {
        y: -12,
        duration: 1.9,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1.6,
      });
      gsap.to(".hero-photo", {
        y: -10,
        duration: 3.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 2,
      });
      gsap.to(".hero-glow-a", { x: 50, y: 35, duration: 7, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(".hero-glow-b", { x: -40, y: -25, duration: 8, yoyo: true, repeat: -1, ease: "sine.inOut" });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden bg-surface pt-28 pb-16 sm:pt-40 sm:pb-28"
    >
      {/* Warm glow accents */}
      <div
        aria-hidden="true"
        className="hero-glow-a pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="hero-glow-b pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="hero-fx hero-item mb-4 inline-block rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Maiduguri · Borno State
          </p>
          <h1 className="hero-fx hero-item font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            Great Taste,{" "}
            <span className="text-brand-orange">Quality Service</span>.
            Delivered.
          </h1>
          <p className="hero-fx hero-item mx-auto mt-5 max-w-xl text-lg text-ink/70 lg:mx-0">
            Proudly Nigerian food &amp; catering from the heart of Maiduguri.
            Hot jollof, celebration cakes, fresh pastries and natural drinks,
            all made with love and delivered to your door.
          </p>
          <div className="hero-fx hero-item mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href={SITE.whatsappOrderMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-brand-orange px-8 py-4 text-center text-base font-bold text-white shadow-xl shadow-brand-orange/30 transition-all hover:scale-105 hover:bg-brand-orange-bright sm:w-auto"
            >
              Order Now on WhatsApp
            </a>
            <a
              href="#services"
              className="w-full rounded-full border-2 border-brand-gold/60 px-8 py-4 text-center text-base font-bold text-brand-gold transition-all hover:border-brand-gold hover:bg-brand-gold/10 sm:w-auto"
            >
              View Our Services
            </a>
          </div>
          <p className="hero-fx hero-item mt-6 text-sm text-ink/60">
            Open daily {SITE.hours} · Delivery: {SITE.deliveryPhone}
          </p>
        </div>

        <div className="flex justify-center">
          {/* Circular hero photo frame: the brand's signature look */}
          <div className="relative">
            <div className="hero-fx hero-photo h-64 w-64 overflow-hidden rounded-full border-4 border-brand-gold shadow-2xl shadow-brand-orange/20 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <FoodImage slot={HERO_IMAGE} showLabel={false} />
            </div>
            <div
              aria-hidden="true"
              className="hero-fx hero-badge absolute -top-2 -right-2 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-brand-orange text-center shadow-lg sm:h-28 sm:w-28"
            >
              <span className="font-display text-sm leading-tight text-white sm:text-base">
                Hot &amp;
                <br />
                Fresh!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
