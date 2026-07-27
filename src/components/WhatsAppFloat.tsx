"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SITE } from "@/lib/site";

/** Floating WhatsApp order button, fixed bottom-right on every section. */
export default function WhatsAppFloat() {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(2)", delay: 1.2 },
      );
      // Periodic nudge so the button stays noticeable without being annoying
      gsap.to(el, {
        scale: 1.08,
        duration: 0.35,
        yoyo: true,
        repeat: 3,
        ease: "sine.inOut",
        delay: 6,
        repeatDelay: 0,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <a
      ref={ref}
      href={SITE.whatsappOrderMessage}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order now on WhatsApp"
      className="wa-float fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 font-bold text-white shadow-2xl shadow-black/40 transition-transform hover:scale-105 sm:right-6 sm:bottom-6 sm:py-3 sm:pr-5 sm:pl-4"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 sm:h-6 sm:w-6" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.2-.7l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.5 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.1-.5z" />
      </svg>
      <span className="hidden text-sm sm:inline">Order Now</span>
    </a>
  );
}
