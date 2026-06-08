import { Section, Kicker } from "@/components/Section";
import type { Content, Project } from "@/lib/content";

export function Projects({ projects }: { projects: Content["projects"] }) {
  return (
    <Section id="projects">
      <div className="flex flex-col gap-3 mb-12 md:mb-16">
        <Kicker>{projects.kicker}</Kicker>
        <h2 className="slogan text-3xl sm:text-4xl md:text-5xl text-neutral-900">
          {projects.title}
        </h2>
      </div>

      <ul
        className="grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {projects.items.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </ul>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="flex flex-col gap-4 rounded-xl border border-neutral-200 p-6 hover:border-neutral-900 transition-colors">
      <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
        {project.meta}
      </p>
      <h3 className="text-xl font-medium text-neutral-900">{project.title}</h3>
      <p className="text-sm leading-relaxed text-neutral-600 flex-1">
        {project.description}
      </p>
      <p className="font-mono text-[11px] text-neutral-400 pt-2 border-t border-neutral-100">
        {project.tags}
      </p>
    </li>
  );
}
