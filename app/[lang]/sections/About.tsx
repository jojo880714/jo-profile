import { Section, Kicker } from "@/components/Section";
import type { Content } from "@/lib/content";

export function About({ about }: { about: Content["about"] }) {
  return (
    <Section id="about" className="bg-neutral-50">
      <div className="flex flex-col gap-3 mb-10 md:mb-14">
        <Kicker>{about.kicker}</Kicker>
        <h2 className="slogan text-3xl sm:text-4xl md:text-5xl text-neutral-900">
          {about.slogan}
        </h2>
      </div>

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="flex flex-col gap-6 max-w-2xl">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base md:text-lg text-neutral-700 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:gap-y-10">
          {about.metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <dt className="text-[40px] md:text-5xl font-medium text-neutral-900 leading-none tracking-tight">
                {m.value}
              </dt>
              <dd className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                {m.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
