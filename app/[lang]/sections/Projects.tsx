import { Section, Kicker } from "@/components/Section";
import type { Content, Project } from "@/lib/content";

export function Projects({ projects }: { projects: Content["projects"] }) {
  return (
    <Section id="projects">
      <div className="flex flex-col gap-3 mb-12 md:mb-16">
        <Kicker>{projects.kicker}</Kicker>
        <h2 className="slogan slogan-section text-neutral-900">
          {projects.title}
        </h2>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {projects.items.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </ul>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
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
      <p className="font-mono text-[11px] text-neutral-500 pt-3 mt-auto border-t border-neutral-200/70">
        {project.tags}
      </p>
    </li>
  );
}
