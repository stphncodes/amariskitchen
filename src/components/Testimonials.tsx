import ChatIntro from "@/components/ChatIntro";
import Reveal from "@/components/Reveal";
import ReviewWall from "@/components/ReviewWall";
import { SITE } from "@/lib/site";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
              What Customers Say
            </p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Reviews &amp; <span className="text-brand-gold">Testimonials</span>
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-brand-orange"
            />
            <ChatIntro />
          </div>
        </Reveal>

        <ReviewWall />

        <Reveal delay={150}>
          <div className="mt-12 text-center">
            <p className="text-ink/70">
              Enjoyed your order? We&apos;d love to hear from you.
            </p>
            <a
              href={SITE.whatsappReviewMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full border-2 border-brand-gold/60 px-8 py-3.5 text-base font-bold text-brand-gold transition-all hover:border-brand-gold hover:bg-brand-gold/10"
            >
              ⭐ Send Us a Review on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
