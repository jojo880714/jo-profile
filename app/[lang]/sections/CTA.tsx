import { Section } from "@/components/Section";
import type { Content } from "@/lib/content";
import { social } from "@/lib/content";

export function CTA({ cta }: { cta: Content["cta"] }) {
  return (
    <Section
      id="contact"
      className="relative text-white bg-[#0f0f10]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_-20%,rgba(255,202,64,0.18),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-px left-0 right-0 h-24 bg-gradient-to-b from-[#fafaf9] to-transparent opacity-60"
      />

      <div className="relative flex flex-col gap-6 max-w-3xl">
        <p className="kicker flex items-center gap-2 !text-neutral-400">
          <span
            aria-hidden="true"
            className="inline-block h-[6px] w-[6px] rounded-[2px] bg-[#ffca40]"
          />
          <span>{cta.kicker}</span>
        </p>
        <h2 className="slogan slogan-section text-white">
          {cta.slogan}
        </h2>
        {cta.availability && (
          <p className="text-sm md:text-base text-neutral-200 leading-relaxed border-l-2 border-[#ffca40] pl-4">
            {cta.availability}
          </p>
        )}
        <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
          {cta.paragraph}
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          <a
            href={`mailto:${social.email}`}
            className="btn-press inline-flex items-center justify-center rounded-full border border-white bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-transparent hover:text-white"
          >
            {cta.ctaPrimary}
          </a>
          <a
            href={
              social.cv ||
              `mailto:${social.email}?subject=${encodeURIComponent(
                "Request CV — Jo Lin",
              )}`
            }
            className="btn-press inline-flex items-center justify-center rounded-full border border-white bg-transparent text-white px-5 py-3 text-sm font-medium hover:bg-white hover:text-neutral-900"
          >
            {cta.ctaSecondary}
          </a>
        </div>
      </div>
    </Section>
  );
}
