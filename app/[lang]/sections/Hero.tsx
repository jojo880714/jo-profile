import type { Content } from "@/lib/content";

export function Hero({ hero }: { hero: Content["hero"] }) {
  return (
    <section
      id="top"
      className="px-6 sm:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24 md:pt-28 md:pb-32"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-16">
        <div className="flex flex-col gap-6 md:gap-8">
          <p className="kicker">{hero.kicker}</p>
          <h1 className="slogan text-[36px] leading-[1.1] sm:text-5xl md:text-[64px] md:leading-[1.05] text-neutral-900">
            {hero.slogan}
          </h1>
          <p className="max-w-xl text-base md:text-lg text-neutral-600 leading-relaxed">
            {hero.intro}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-white hover:text-neutral-900 transition-colors"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-neutral-900 bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-sm justify-self-center md:justify-self-end">
          {/* TODO: replace with hero illustration */}
          <div className="absolute inset-0 rounded-2xl bg-neutral-100 border border-dashed border-neutral-300 flex items-center justify-center">
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 px-4 text-center">
              {hero.illustrationTodo}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
