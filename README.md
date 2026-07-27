# amariskitchen

Marketing website for **Amari's Kitchen** — a Nigerian food & catering brand in Maiduguri, Borno State.

> Great Taste - Quality Service

## Tech

- Next.js 15 (App Router, static export) + TypeScript
- Tailwind CSS v4
- GSAP (scroll reveals, hero timeline, marquee)

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build & deploy

```bash
npm run build   # static site output in ./out
```

Deploy the `out/` folder to any static host (Vercel, Netlify, GitHub Pages).

## Editing content

- All brand info (phones, WhatsApp links, email, socials, hours, address) and every image URL live in `src/lib/site.ts`.
- To use real photos: drop files in `public/images/` and point the `src` values there. Broken/missing images automatically fall back to branded placeholders.
- To use the original logo artwork: save it as `public/logo.png` and set `LOGO_IMAGE.src` in `src/lib/site.ts`.
