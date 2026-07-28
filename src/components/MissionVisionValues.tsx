import Reveal from "@/components/Reveal";

const CORE_VALUES = [
  {
    icon: "⭐",
    title: "Quality",
    text: "We use quality ingredients and maintain high standards in every meal.",
  },
  {
    icon: "🧼",
    title: "Hygiene",
    text: "Food safety and cleanliness are non-negotiable.",
  },
  {
    icon: "😊",
    title: "Customer Satisfaction",
    text: "We go the extra mile to exceed expectations.",
  },
  {
    icon: "🎨",
    title: "Creativity",
    text: "We bring fresh ideas to our menus and presentation.",
  },
  {
    icon: "🤝",
    title: "Integrity",
    text: "We are honest, dependable, and keep our commitments.",
  },
  {
    icon: "🏆",
    title: "Excellence",
    text: "We pursue outstanding results in every event we cater.",
  },
];

export default function MissionVisionValues() {
  return (
    <section id="mission" className="bg-surface-alt py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
              What Drives Us
            </p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Mission, Vision &amp;{" "}
              <span className="text-brand-gold">Core Values</span>
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-brand-orange"
            />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={100}>
            <article className="h-full rounded-3xl border border-brand-gold/25 bg-surface/60 p-8">
              <span aria-hidden="true" className="text-4xl">
                🎯
              </span>
              <h3 className="mt-4 font-display text-2xl text-brand-orange">
                Our Mission
              </h3>
              <p className="mt-3 leading-relaxed text-ink/75">
                To serve the Maiduguri community honest, delicious Nigerian
                food and excellent service, making quality meals, cakes, and
                catering accessible to every home, office, and celebration.
              </p>
            </article>
          </Reveal>
          <Reveal delay={200}>
            <article className="h-full rounded-3xl border border-brand-gold/25 bg-surface/60 p-8">
              <span aria-hidden="true" className="text-4xl">
                🌟
              </span>
              <h3 className="mt-4 font-display text-2xl text-brand-orange">
                Our Vision
              </h3>
              <p className="mt-3 leading-relaxed text-ink/75">
                To become the leading food and catering brand in Borno State
                and beyond, the first name that comes to mind whenever great
                taste and quality service are needed.
              </p>
            </article>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 80}>
              <article className="h-full rounded-2xl border border-ink/10 bg-surface/60 p-5 text-center transition-colors hover:border-brand-orange/50">
                <span aria-hidden="true" className="text-3xl">
                  {value.icon}
                </span>
                <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-brand-gold">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-ink/65">{value.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
