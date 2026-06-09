import { Section, Kicker } from "@/components/Section";
import type { Content } from "@/lib/content";
import { social } from "@/lib/content";

export function CTA({ cta }: { cta: Content["cta"] }) {
  return (
    <Section id="contact" className="bg-neutral-900 text-white">
      <div className="flex flex-col gap-6 max-w-3xl">
        <p className="kicker flex items-center gap-2 !text-neutral-400">
          <span
            aria-hidden="true"
            className="inline-block h-[10px] w-[10px] bg-[#ffca40]"
          />
          <span>{cta.kicker}</span>
        </p>
        <h2 className="slogan text-3xl sm:text-4xl md:text-5xl text-white">
          {cta.slogan}
        </h2>
        <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
          {cta.paragraph}
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          <a
            href={`mailto:${social.email}`}
            className="inline-flex items-center justify-center rounded-full border border-white bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-transparent hover:text-white transition-colors"
          >
            {cta.ctaPrimary}
          </a>
          {social.cv && (
            <a
              href={social.cv}
              className="inline-flex items-center justify-center rounded-full border border-white bg-transparent text-white px-5 py-3 text-sm font-medium hover:bg-white hover:text-neutral-900 transition-colors"
            >
              {cta.ctaSecondary}
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}
