import { Section, Kicker } from "@/components/Section";
import type { Content, Project } from "@/lib/content";

export function Projects({ projects }: { projects: Content["projects"] }) {
  const featured = projects.items.filter((p) => p.featured);
  const internals = projects.items.filter((p) => !p.featured);

  return (
    <Section id="projects">
      <div className="flex flex-col gap-3 mb-12 md:mb-16">
        <Kicker>{projects.kicker}</Kicker>
        <h2 className="slogan slogan-section text-neutral-900">
          {projects.title}
        </h2>
      </div>

      {/* Featured projects — 3 large cards in 3 columns */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {featured.map((p) => (
          <FeaturedCard key={p.title} project={p} />
        ))}
      </ul>

      {/* Internal projects — compact secondary list */}
      {internals.length > 0 && (
        <div className="mt-16 md:mt-20">
          <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mb-5 flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-[6px] w-[6px] bg-[#ffca40]"
            />
            <span>Also at TKB · Internal systems</span>
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {internals.map((p) => (
              <InternalRow key={p.title} project={p} />
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <li className="card-surface p-6 flex flex-col gap-4">
      <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
        {project.meta}
      </p>
      <h3 className="text-xl font-medium text-neutral-900 tracking-tight">
        {project.title}
      </h3>
      <p className="text-sm leading-relaxed text-neutral-600 flex-1">
        {project.description}
      </p>
      {project.impact && (
        <p className="text-[13px] leading-relaxed text-neutral-700">
          <span className="hl">{project.impact}</span>
        </p>
      )}
      <p className="font-mono text-[11px] text-neutral-500 pt-3 mt-auto border-t border-neutral-200/70">
        {project.tags}
      </p>
    </li>
  );
}

function InternalRow({ project }: { project: Project }) {
  return (
    <li className="flex flex-col gap-1 py-3 border-b border-neutral-200/70 last:border-b-0">
      <div className="flex items-baseline justify-between gap-3">
        <h4 className="text-base font-medium text-neutral-900">
          {project.title}
        </h4>
        <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 whitespace-nowrap">
          {project.meta}
        </p>
      </div>
      {project.impact && (
        <p className="text-sm text-neutral-600 leading-relaxed">
          {project.impact}
        </p>
      )}
      <p className="font-mono text-[11px] text-neutral-400 mt-1">
        {project.tags}
      </p>
    </li>
  );
}
