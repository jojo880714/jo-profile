import { Section, Kicker } from "@/components/Section";
import type { Content, MetricGroup } from "@/lib/content";

export function About({ about }: { about: Content["about"] }) {
  return (
    <Section id="about">
      <div className="flex flex-col gap-3 mb-10 md:mb-14">
        <Kicker>{about.kicker}</Kicker>
        <h2 className="slogan slogan-section text-neutral-900">
          {about.slogan}
        </h2>
      </div>

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16 mb-16 md:mb-20">
        <div className="flex flex-col gap-6 max-w-2xl">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-base md:text-lg text-neutral-700 leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10 md:gap-14">
        {about.metricGroups.map((group) => (
          <MetricGroupBlock key={group.label} group={group} />
        ))}
      </div>
    </Section>
  );
}

function MetricGroupBlock({ group }: { group: MetricGroup }) {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 flex items-center gap-2">
        <span
          aria-hidden="true"
          className="inline-block h-[6px] w-[6px] bg-[#ffca40]"
        />
        <span>{group.label}</span>
      </p>
      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">
        {group.items.map((m) => (
          <div key={m.label} className="flex flex-col gap-1">
            <dt className="text-[36px] md:text-5xl font-medium text-neutral-900 leading-none tracking-tight">
              {m.value}
            </dt>
            <dd className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
              {m.label}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
