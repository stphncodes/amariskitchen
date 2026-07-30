import FoodImage from "@/components/FoodImage";
import Reveal from "@/components/Reveal";
import { GALLERY_IMAGES, SITE } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-surface-alt py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
              Fresh From Our Kitchen
            </p>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              Featured <span className="text-brand-gold">Dishes</span>
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-5 h-1 w-20 rounded-full bg-brand-orange"
            />
            <p className="mx-auto mt-6 max-w-2xl text-ink/70">
              A taste of what leaves our kitchen every day. Follow{" "}
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-gold underline-offset-4 hover:underline"
              >
                {SITE.socialHandle}
              </a>{" "}
              for daily photos and specials.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_IMAGES.map((image, i) => (
            <Reveal key={image.label} variant="zoom" delay={(i % 4) * 80} className="flex justify-center">
              <figure className="group w-full max-w-[220px] text-center">
                <div className="aspect-square w-full overflow-hidden rounded-full border-4 border-brand-gold/50 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-brand-gold group-hover:shadow-brand-orange/20">
                  <FoodImage slot={image} showLabel={false} />
                </div>
                <figcaption className="mt-3 font-display text-sm tracking-wide text-ink/85">
                  {image.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
