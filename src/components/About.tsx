import FoodImage from "@/components/FoodImage";
import Reveal from "@/components/Reveal";
import { ABOUT_IMAGE } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="bg-surface-alt py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
              Who We Are
            </p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              About <span className="text-brand-gold">Amari&apos;s Kitchen</span>
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-brand-orange lg:mx-0"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 text-lg leading-relaxed text-ink/75">
              Amari&apos;s Kitchen is a proudly Nigerian food and catering brand
              based in Maiduguri, Borno State. We are passionate about creating
              delicious meals, beautiful cakes, pastries, and memorable dining
              experiences for individuals, families, and organizations. Every
              order is prepared with quality ingredients, attention to detail,
              and a commitment to customer satisfaction. Whether it&apos;s a
              birthday celebration, corporate event, or a simple family meal, we
              strive to make every occasion special through exceptional food and
              service.
            </p>
          </Reveal>
        </div>

        <Reveal variant="right" className="flex justify-center">
          <div className="h-72 w-72 overflow-hidden rounded-full border-4 border-brand-gold shadow-2xl shadow-brand-orange/15 sm:h-80 sm:w-80">
            <FoodImage slot={ABOUT_IMAGE} showLabel={false} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
