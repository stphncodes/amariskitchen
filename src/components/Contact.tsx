import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.6 7.2a5.6 5.6 0 0 1-3.4-1.1v7.7a5.9 5.9 0 1 1-5.9-5.9c.3 0 .7 0 1 .1v3a2.9 2.9 0 1 0 2 2.8V2h2.9a5.6 5.6 0 0 0 3.4 4.3v.9z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="bg-surface-alt py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
              We&apos;re Ready When You Are
            </p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Contact &amp; <span className="text-brand-gold">Order</span>
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-brand-orange"
            />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact details */}
          <Reveal variant="left" delay={100}>
            <div className="h-full rounded-3xl border border-ink/10 bg-surface/60 p-8">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span aria-hidden="true" className="mt-0.5 text-2xl">📍</span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">
                      Find Us
                    </p>
                    <p className="mt-1 text-ink/75">{SITE.location}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span aria-hidden="true" className="mt-0.5 text-2xl">📞</span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">
                      Call / WhatsApp
                    </p>
                    <p className="mt-1">
                      <a href={SITE.phoneHref} className="text-ink/75 transition-colors hover:text-brand-orange">
                        {SITE.phone}
                      </a>
                    </p>
                    <p>
                      <a href={SITE.deliveryPhoneHref} className="text-ink/75 transition-colors hover:text-brand-orange">
                        Delivery: {SITE.deliveryPhone}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span aria-hidden="true" className="mt-0.5 text-2xl">✉️</span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">
                      Email
                    </p>
                    <p className="mt-1">
                      <a href={SITE.emailHref} className="text-ink/75 transition-colors hover:text-brand-orange">
                        {SITE.email}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span aria-hidden="true" className="mt-0.5 text-2xl">🕙</span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">
                      Opening Hours
                    </p>
                    <p className="mt-1 text-ink/75">{SITE.hours}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span aria-hidden="true" className="mt-0.5 text-2xl">📱</span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-brand-gold">
                      Follow Us
                    </p>
                    <div className="mt-2 flex gap-3">
                      <a
                        href={SITE.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink/80 transition-colors hover:border-brand-orange hover:text-brand-orange"
                      >
                        <InstagramIcon />
                        Instagram
                      </a>
                      <a
                        href={SITE.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink/80 transition-colors hover:border-brand-orange hover:text-brand-orange"
                      >
                        <TikTokIcon />
                        TikTok
                      </a>
                    </div>
                    <p className="mt-2 text-sm text-ink/50">{SITE.socialHandle}</p>
                  </div>
                </li>
              </ul>

              <a
                href={SITE.whatsappOrderMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block rounded-full bg-brand-orange px-8 py-4 text-center text-base font-bold text-white shadow-xl shadow-brand-orange/25 transition-all hover:scale-[1.02] hover:bg-brand-orange-bright"
              >
                Order via WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Map placeholder: replace with a real Google Maps embed iframe later */}
          <Reveal variant="right" delay={200}>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Amari's Kitchen location in Google Maps"
              className="group flex h-full min-h-[320px] flex-col items-center justify-center gap-4 rounded-3xl border border-brand-gold/25 bg-brand-orange/10 p-8 text-center transition-colors hover:border-brand-gold/60"
            >
              <span
                aria-hidden="true"
                className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-orange/20 text-5xl transition-transform group-hover:scale-110"
              >
                📍
              </span>
              <p className="font-display text-2xl text-ink">
                Federal Low-Cost, Maiduguri
              </p>
              <p className="max-w-xs text-sm text-ink/60">
                Opposite St. Mary Church, Borno State, Nigeria
              </p>
              <span className="mt-2 rounded-full border-2 border-brand-gold/60 px-6 py-2.5 text-sm font-bold text-brand-gold transition-colors group-hover:bg-brand-gold/10">
                Open in Google Maps →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
