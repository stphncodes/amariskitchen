import FoodImage from "@/components/FoodImage";
import Reveal from "@/components/Reveal";
import { STORY_IMAGE } from "@/lib/site";

export default function OurStory() {
  return (
    <section id="story" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal variant="left" className="order-2 flex justify-center lg:order-1">
          <div className="h-72 w-72 overflow-hidden rounded-full border-4 border-brand-orange/70 shadow-2xl shadow-brand-orange/10 sm:h-80 sm:w-80">
            <FoodImage slot={STORY_IMAGE} />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
              Our Story
            </p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Born From a Love of{" "}
              <span className="text-brand-gold">Good Food</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/75">
              <p>
                Amari&apos;s Kitchen started the way many great Nigerian
                kitchens do: with one cook, one pot, and a family that kept
                asking for more. What began as cooking for loved ones in
                Maiduguri grew as friends, neighbours, and colleagues tasted
                the food and started placing orders of their own. Word spread
                the old-fashioned way: plate by plate.
              </p>
              <p>
                From the very first order, one thing has never changed: we
                cook the way we would cook for our own family. That means
                fresh peppers ground the day we use them, jollof with real
                smoky depth, cakes baked from scratch, and pastries that come
                out of the oven the same day they reach your hands.
              </p>
              <p>
                Today, from our home at Federal Low-Cost, opposite St. Mary
                Church, we serve homes, offices, weddings, and celebrations
                across Maiduguri. We are still family-run, still hands-on, and
                still measuring our success one satisfied customer at a time.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
