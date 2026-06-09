import type { ReactNode } from "react";
import { Section, Kicker } from "@/components/Section";
import type { Content, ExperienceItem } from "@/lib/content";

/**
 * Render a string with **markdown-style** bold markers as inline
 * highlighted spans. The .hl class draws a subtle yellow underline
 * highlight + bumps weight, so numbers and key claims become
 * scan-able visual anchors for a recruiter eye.
 */
function renderWithHighlights(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="hl">
          {part.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function Experience({
  experience,
}: {
  experience: Content["experience"];
}) {
  return (
    <Section id="experience">
      <div className="flex flex-col gap-3 mb-12 md:mb-16">
        <Kicker>{experience.kicker}</Kicker>
        <h2 className="slogan slogan-section text-neutral-900">
          {experience.title}
        </h2>
      </div>

      <ul className="flex flex-col gap-10 md:gap-14">
        {experience.items.map((item) => (
          <ExperienceRow key={item.org} item={item} />
        ))}
      </ul>

      {experience.education && (
        <div className="mt-12 md:mt-16 pt-8 border-t border-neutral-200 max-w-2xl md:ml-[140px]">
          <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mb-2">
            Education
          </p>
          <p className="text-sm text-neutral-700 leading-relaxed">
            {experience.education}
          </p>
        </div>
      )}
    </Section>
  );
}

function ExperienceRow({ item }: { item: ExperienceItem }) {
  return (
    <li className="grid gap-4 md:grid-cols-[100px_1fr] md:gap-10">
      <div className="flex flex-col gap-1">
        <p className="font-mono text-sm font-medium text-neutral-900">
          {item.year}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
          {item.location}
        </p>
      </div>

      <div className="flex flex-col gap-3 max-w-2xl">
        <h3 className="text-lg font-medium text-neutral-900">
          {item.title}{" "}
          <span className="text-neutral-500">· {item.org}</span>
        </h3>
        <ul className="flex flex-col gap-2 text-sm leading-relaxed text-neutral-600">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-neutral-400 select-none">—</span>
              <span>{renderWithHighlights(b)}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
