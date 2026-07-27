import { LOGO_IMAGE, SITE } from "@/lib/site";

/**
 * Line-art logo mark redrawn from the brand artwork: a chef in a
 * double-breasted jacket giving an "OK" sign, wearing a puffy chef's hat.
 * Pure SVG so it inherits any text color. To use the original PNG/JPG
 * artwork instead, set LOGO_IMAGE.src in src/lib/site.ts.
 */
export function LogoMark({ className = "h-12 w-12" }: { className?: string }) {
  if (LOGO_IMAGE.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={LOGO_IMAGE.src} alt="" className={`${className} object-contain`} />
    );
  }
  return (
    <svg
      viewBox="0 0 100 118"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Puffy chef's hat */}
      <path d="M38 28 C31 28 26.5 22.5 28.5 16.5 C30 11.5 35 8.5 40 10 C42.5 4.5 49 2 54 4.5 C59.5 2 66 4.5 68 10.5 C73 9.5 77.5 13.5 77.5 19 C77.5 24.5 73.5 28 68 28" />
      <path d="M38 28 v7 h30 v-7" />
      <path d="M45 29.5 v4 M53 29.5 v4 M61 29.5 v4" />
      {/* Face */}
      <path d="M41 35 C41 45.5 45 51.5 53 51.5 C61 51.5 65 45.5 65 35" />
      <circle cx="48.5" cy="41.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="58.5" cy="41.5" r="1.2" fill="currentColor" stroke="none" />
      <path d="M50 47 Q53 49.5 56 47" />
      {/* Collar */}
      <path d="M44 58 L53 66 L62 58" />
      {/* Jacket */}
      <path d="M44 58 C38 60 34.5 64 33.5 70 L31.5 104 L74.5 104 L72.5 70 C71.5 64 68 60 62 58" />
      <path d="M53 66 L48.5 104" />
      <circle cx="45" cy="76" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="45" cy="86" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="45" cy="96" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="60" cy="76" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="60" cy="86" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="60" cy="96" r="1.4" fill="currentColor" stroke="none" />
      {/* Folded arm across the waist */}
      <path d="M34 80 C43 87 63 87 72 80" />
      {/* Raised arm */}
      <path d="M37 62 C30 60 26.5 55 25.5 48 L25 43" />
      <path d="M43.5 60 C38 58 34.5 54 33.5 48" />
      {/* OK-sign hand */}
      <circle cx="27.5" cy="38.5" r="4.2" />
      <path d="M23.5 34.5 C22 29 22.5 25 24.5 22.5" />
      <path d="M27.5 33.5 C27.5 27.5 28.5 23.5 30.5 21.5" />
      <path d="M31.5 35 C33 29.5 34.5 26 37 24.5" />
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="text-brand-gold">
        <LogoMark />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl tracking-[0.08em] text-ink">
          AMARI&apos;S
        </span>
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.45em] text-brand-gold">
          Kitchen
        </span>
      </span>
      <span className="sr-only">{SITE.tagline}</span>
    </span>
  );
}
