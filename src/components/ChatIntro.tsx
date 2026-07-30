"use client";

import { useEffect, useRef, useState } from "react";

const MESSAGE =
  "Don't just take our word for it — hear it straight from our customers 💬";

/**
 * Section intro styled as an incoming WhatsApp message that types itself out
 * when scrolled into view. Server-renders the full text, so it reads fine
 * with JavaScript disabled or prefers-reduced-motion.
 */
export default function ChatIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState(MESSAGE);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let interval: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setTyping(true);
        setText("");
        let i = 0;
        interval = setInterval(() => {
          i += 1;
          setText(MESSAGE.slice(0, i));
          if (i >= MESSAGE.length) {
            clearInterval(interval);
            setTyping(false);
          }
        }, 28);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div ref={ref} className="mx-auto mt-8 max-w-md px-2">
      <div className="rounded-2xl rounded-tl-sm border border-ink/10 bg-surface-alt px-5 py-4 text-left shadow-lg">
        <p className="text-xs font-bold text-brand-gold">Amari&apos;s Kitchen</p>
        <p className="mt-1 min-h-12 text-ink/85">
          {text}
          {typing && (
            <span aria-hidden="true" className="ml-0.5 animate-pulse text-brand-orange">
              ▍
            </span>
          )}
        </p>
        <p className="mt-1 text-right text-[0.65rem] text-ink/40">
          just now <span className="text-sky-400">✓✓</span>
        </p>
      </div>
      <p className="mt-4 text-center text-sm text-ink/60">
        Real WhatsApp messages from real clients. Tap any screenshot to read it
        up close.
      </p>
    </div>
  );
}
