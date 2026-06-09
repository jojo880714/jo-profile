import { Section, Kicker } from "@/components/Section";
import type { Content, ReadingItem } from "@/lib/content";

export function OutsideWork({
  outsideWork,
}: {
  outsideWork: Content["outsideWork"];
}) {
  return (
    <Section id="outside-work">
      <div className="flex flex-col gap-3 mb-12 md:mb-16">
        <Kicker>{outsideWork.kicker}</Kicker>
        <h2 className="slogan slogan-section text-neutral-900">
          {outsideWork.title}
        </h2>
      </div>

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16 max-w-5xl">
        <p className="text-base md:text-lg text-neutral-700 leading-relaxed max-w-2xl">
          {outsideWork.paragraph}
        </p>

        <div className="flex flex-col gap-5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-[6px] w-[6px] bg-[#ffca40]"
            />
            <span>{outsideWork.readingLabel}</span>
          </p>
          <ul className="flex flex-col gap-4">
            {outsideWork.reading.map((item) => (
              <ReadingRow key={item.title} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function ReadingRow({ item }: { item: ReadingItem }) {
  return (
    <li className="flex flex-col gap-1">
      <p className="text-sm font-medium text-neutral-900">{item.title}</p>
      <p className="text-sm text-neutral-600 leading-relaxed">{item.note}</p>
    </li>
  );
}
