# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for **Amari's Kitchen**, a Nigerian food & catering brand in Maiduguri, Borno State. Single-page site (no routing beyond `/`) built with Next.js 15 App Router + TypeScript, Tailwind CSS v4, and GSAP.

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # static export → ./out (deploy that folder to any static host)
npm run lint    # next lint
```

There are no tests. `next.config.ts` sets `output: "export"` with unoptimized images — no server-side features (API routes, server actions, next/image optimization) can be used.

## Architecture

- [src/lib/site.ts](src/lib/site.ts) is the **single source of truth** for all brand content: name, phones, WhatsApp/social links, hours, address, nav links, and every image. Content edits happen here, not in components.
- [src/app/page.tsx](src/app/page.tsx) composes the page as an ordered stack of section components from `src/components/` (Header → Hero → Marquee → About → OurStory → MissionVisionValues → Services → WhyChooseUs → Gallery → Contact → Footer, plus a floating WhatsApp button).
- Sections anchor to `#about`, `#services`, etc. — `NAV_LINKS` in `site.ts` must match the section `id`s.

### Images: the `ImageSlot` pattern

Every image is an `ImageSlot` object in `site.ts` rendered through [FoodImage.tsx](src/components/FoodImage.tsx), which tries `src`, then `fallbackSrc`, then a branded gradient placeholder (emoji + label) — a missing file or dead URL never shows a broken image. Real photos go in `public/images/` with `src` pointed there and a stock Unsplash URL kept as `fallbackSrc`. The header/footer logo is an SVG recreation ([Logo.tsx](src/components/Logo.tsx)); to use original artwork, save `public/logo.png` and set `LOGO_IMAGE.src`.

### Animation (GSAP)

Scroll-in animations go through the [Reveal.tsx](src/components/Reveal.tsx) wrapper (variants: `up`/`left`/`right`/`zoom`, ms `delay`), which uses ScrollTrigger. Two accessibility guarantees must be preserved when adding animated elements:

- `prefers-reduced-motion` disables the animation (checked in `Reveal` and other animated components).
- A `<noscript>` style in [layout.tsx](src/app/layout.tsx) forces `.gsap-reveal`, `.hero-fx`, and `.wa-float` visible — new animation classes that start elements hidden must be added to that override.

### Theming

Dark brand look is the default; a `light` class on `<html>` (toggled by [ThemeToggle.tsx](src/components/ThemeToggle.tsx), persisted in `localStorage` as `ak-theme`, applied pre-paint by an inline script in `layout.tsx`) flips CSS variables defined in [globals.css](src/app/globals.css). Use the semantic tokens (`surface`, `surface-alt`, `ink`, `brand-gold` — exposed as Tailwind colors via `@theme inline`) rather than hard-coded colors so both themes work. Tailwind v4 is configured entirely in `globals.css` (`@theme` blocks); there is no `tailwind.config` file. Fonts: `font-display` (Lilita One) for headings, `font-body` (DM Sans).

### Mobile

`html, body { overflow-x: clip }` guards against decorative elements causing sideways scroll — keep wide/rotated decorative elements from expanding the layout regardless.
