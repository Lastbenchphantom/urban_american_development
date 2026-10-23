import { Link } from "react-router-dom";
import { StatusBadge } from "../ui/StatusBadge";
import { ExternalLink } from "lucide-react";

/**
 * Project card linking to project detail page.
 * Displays only source-confirmed information plus honest status messaging.
 */
export function ProjectCard({ project, className = "" }) {
  const imageUrl = project.image || "/images/placeholder-project.svg";
  return (
    <article
      className={[
        "group relative block rounded-xl border border-slate-200 bg-white overflow-hidden transition-shadow hover:shadow-lg",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={project.imageAlt || project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/images/placeholder-project.svg";
          }}
        />
        <div className="absolute top-3 left-3 z-10">
          <StatusBadge variant="neutral">
            {project.statusLabel || "Contact for details"}
          </StatusBadge>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <Link
            to={`/projects/${project.slug}`}
            className="text-xl font-bold text-navy-900 group-hover:text-navy-700 transition-colors"
            aria-label={`View ${project.name} project details`}
          >
            {project.name}
          </Link>
          {project.brochure && (
            <a
              href={project.brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-navy-900 transition-colors focus:outline-none focus:ring-2 focus:ring-navy-900 rounded p-1"
              aria-label={`Download ${project.name} brochure`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
        <p className="text-sm text-slate-600 mb-3 line-clamp-2">
          {project.description || "Project details will be updated soon."}
        </p>
        <div className="space-y-1 text-sm text-slate-600">
          {project.location && (
            <p className="flex items-start gap-1.5">
              <span className="text-slate-400">&#127968;</span>
              {project.location}
            </p>
          )}
          {project.storied && (
            <p className="flex items-start gap-1.5">
              <span className="text-slate-400">&#128394;</span>
              {project.storied}
            </p>
          )}
          {project.units && (
            <p className="flex items-start gap-1.5">
              <span className="text-slate-400">&#128397;</span>
              {project.units}
            </p>
          )}
        </div>
        {project.category === "handover" && (
          <p className="mt-3 text-xs font-semibold text-green-700 bg-green-50 px-3 py-1.5 rounded inline-block">
            Handover project
          </p>
        )}
        {project.category === "upcoming" && (
          <p className="mt-3 text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1.5 rounded inline-block">
            Upcoming project
          </p>
        )}
      </div>
    </article>
  );
}
