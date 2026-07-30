import Reveal from "@/components/Reveal";

const PROJECTS = [
  {
    icon: "🏫",
    title: "Baking Classes in Schools",
    text: "We partner with schools to teach students how to bake, passing practical kitchen skills on to the next generation.",
  },
  {
    icon: "🍢",
    title: "Snacks for Events",
    text: "We produce fresh snacks in bulk for events and small gatherings, delivered ready to serve.",
  },
  {
    icon: "🍹",
    title: "Mocktails for Church Gatherings",
    text: "We craft colourful, refreshing mocktails for church programmes and community celebrations.",
  },
];

const ACHIEVEMENTS = [
  {
    icon: "🏛️",
    title: "CAC Registered",
    text: "Registered with the Corporate Affairs Commission of Nigeria — Reg. No. 9503280.",
  },
  {
    icon: "📈",
    title: "SMEDAN Registered",
    text: "Recognised by the Small & Medium Enterprises Development Agency of Nigeria.",
  },
  {
    icon: "🧾",
    title: "Tax Compliant",
    text: "Fully registered with a valid Tax Identification Number (TIN).",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-surface-alt py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
              Beyond the Kitchen
            </p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Our <span className="text-brand-gold">Projects</span>
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-brand-orange"
            />
            <p className="mx-auto mt-6 max-w-2xl text-ink/70">
              From classrooms to church halls, we take good food and practical
              skills into the community.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <article className="h-full rounded-3xl border border-ink/10 bg-surface/60 p-7 transition-colors hover:border-brand-orange/50">
                <span
                  aria-hidden="true"
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/15 text-3xl"
                >
                  {project.icon}
                </span>
                <h3 className="mt-5 font-display text-xl text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {project.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Achievements & certifications */}
        <Reveal delay={150}>
          <div className="mt-14 rounded-3xl border border-brand-gold/25 bg-surface/60 p-6 sm:p-8">
            <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
              Achievements
            </p>
            <h3 className="mt-2 text-center font-display text-2xl text-ink">
              Registered &amp; <span className="text-brand-gold">Certified</span>
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {ACHIEVEMENTS.map((item) => (
                <div key={item.title} className="text-center">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-gold/40 bg-brand-gold/10 text-2xl"
                  >
                    {item.icon}
                  </span>
                  <p className="mt-3 text-sm font-bold uppercase tracking-wide text-brand-gold">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-ink/60">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
