import { ProjectCard } from "./ProjectCard";

/**
 * Project grid with responsive columns.
 */
export function ProjectGrid({ projects, className = "" }) {
  return (
    <div
      className={[
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
