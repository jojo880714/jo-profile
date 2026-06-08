import { Section, Kicker } from "@/components/Section";
import type { Content } from "@/lib/content";

export function Skills({ skills }: { skills: Content["skills"] }) {
  return (
    <Section id="skills">
      <div className="flex flex-col gap-3 mb-12 md:mb-16">
        <Kicker>{skills.kicker}</Kicker>
        <h2 className="slogan text-3xl sm:text-4xl md:text-5xl text-neutral-900">
          {skills.title}
        </h2>
      </div>

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
        {skills.groups.map((g) => (
          <div key={g.label} className="flex flex-col gap-3">
            <dt className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
              {g.label}
            </dt>
            <dd className="text-base text-neutral-900 leading-relaxed">
              {g.items}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
