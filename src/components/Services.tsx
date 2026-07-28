import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

const SERVICES = [
  {
    icon: "🎂",
    title: "Cakes",
    text: "Birthday, wedding, and celebration cakes baked from scratch and decorated to order.",
  },
  {
    icon: "🥐",
    title: "Pastries",
    text: "Meat pies, sausage rolls, doughnuts, and chin chin, fresh from the oven daily.",
  },
  {
    icon: "🍔",
    title: "Fast Food",
    text: "Jollof rice, fried rice, noodles, shawarma, and peppered chicken, hot and ready fast.",
  },
  {
    icon: "🍽️",
    title: "Catering",
    text: "Full-service catering for weddings, corporate events, and family gatherings of any size.",
  },
  {
    icon: "🧃",
    title: "Natural Drinks",
    text: "Chilled zobo, tigernut (kunun aya), and fresh juices made with no artificial additives.",
  },
  {
    icon: "🎁",
    title: "Surprise Packages",
    text: "Curated food-and-treat boxes for birthdays, anniversaries, and 'just because' moments.",
  },
  {
    icon: "🛵",
    title: "Delivery Services",
    text: `Prompt doorstep delivery across Maiduguri. Call ${SITE.deliveryPhone} to schedule.`,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
              What We Do
            </p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Our <span className="text-brand-gold">Services</span>
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-brand-orange"
            />
            <p className="mx-auto mt-6 max-w-2xl text-ink/70">
              Fresh Nigerian meals, celebration cakes, pastries, and natural
              drinks prepared with care and delivered across Maiduguri.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 100}>
              <article className="group h-full rounded-3xl border border-ink/10 bg-surface-alt p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-orange/60 hover:shadow-xl hover:shadow-brand-orange/10">
                <span
                  aria-hidden="true"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/15 text-3xl transition-colors group-hover:bg-brand-orange/25"
                >
                  {service.icon}
                </span>
                <h3 className="mt-5 font-display text-xl text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {service.text}
                </p>
              </article>
            </Reveal>
          ))}

          {/* CTA card fills the last grid cell */}
          <Reveal delay={200}>
            <a
              href={SITE.whatsappOrderMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col items-center justify-center gap-3 rounded-3xl bg-brand-orange p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:bg-brand-orange-bright hover:shadow-xl hover:shadow-brand-orange/30"
            >
              <span aria-hidden="true" className="text-4xl">
                📲
              </span>
              <span className="font-display text-xl text-white">
                Craving Something?
              </span>
              <span className="text-sm font-semibold text-white/90">
                Message us on WhatsApp and place your order in minutes.
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
