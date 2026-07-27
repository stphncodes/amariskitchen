import Reveal from "@/components/Reveal";

const REASONS = [
  {
    icon: "🌿",
    title: "Fresh Ingredients",
    text: "We shop fresh and cook fresh: peppers, produce, and proteins sourced with care.",
  },
  {
    icon: "🧤",
    title: "Hygienic Preparation",
    text: "Clean hands, clean kitchen, safe packaging. Your health is never negotiable.",
  },
  {
    icon: "🏷️",
    title: "Affordable Pricing",
    text: "Big flavour that fits real budgets. Great food shouldn't break the bank.",
  },
  {
    icon: "🚀",
    title: "Timely Delivery",
    text: "When we say it's coming, it's coming. Hot, on time, anywhere in Maiduguri.",
  },
  {
    icon: "💛",
    title: "Excellent Customer Service",
    text: "Friendly, responsive, and personal. You're family the moment you order.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-surface-alt py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-brand-gold/5 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
              The Amari&apos;s Difference
            </p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Why <span className="text-brand-gold">Choose Us</span>
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-brand-orange"
            />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 80}>
              <article className="h-full rounded-2xl border border-ink/10 bg-surface/50 p-6 text-center transition-colors hover:border-brand-gold/50">
                <span
                  aria-hidden="true"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-gold/40 bg-brand-gold/10 text-2xl"
                >
                  {reason.icon}
                </span>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-ink">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {reason.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
