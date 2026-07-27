import Logo from "@/components/Logo";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-surface py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="max-w-xs">
            <a href="#top" aria-label="Amari's Kitchen, back to top">
              <Logo />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-ink/55">
              Proudly Nigerian food &amp; catering, made in Maiduguri with
              love. {SITE.tagline}.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">
              Quick Links
            </p>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink/60 transition-colors hover:text-brand-orange"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">
              Get In Touch
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink/60">
              <li>
                <a href={SITE.phoneHref} className="transition-colors hover:text-brand-orange">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={SITE.deliveryPhoneHref} className="transition-colors hover:text-brand-orange">
                  Delivery: {SITE.deliveryPhone}
                </a>
              </li>
              <li>
                <a href={SITE.emailHref} className="transition-colors hover:text-brand-orange">
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.hours}</li>
            </ul>
            <div className="mt-4 flex justify-center gap-3 md:justify-start">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Amari's Kitchen on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Amari's Kitchen on TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M19.6 7.2a5.6 5.6 0 0 1-3.4-1.1v7.7a5.9 5.9 0 1 1-5.9-5.9c.3 0 .7 0 1 .1v3a2.9 2.9 0 1 0 2 2.8V2h2.9a5.6 5.6 0 0 0 3.4 4.3v.9z" />
                </svg>
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Amari's Kitchen on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.4-3c-.3-.4 0-.5.2-.7l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.5-1.3-.7-1.8-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.5 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.1-.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-ink/10 pt-6 text-center text-xs text-ink/40">
          <p>
            © {new Date().getFullYear()} Amari&apos;s Kitchen, Maiduguri.
            All rights reserved. Great Taste · Quality Service.
          </p>
        </div>
      </div>
    </footer>
  );
}
