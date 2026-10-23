import { useState, useMemo } from "react";
import { Container } from "../components/layout/Container";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { PROJECTS, PROJECT_CATEGORIES } from "../data/projects";
import { ProjectCard } from "../components/projects/ProjectCard";
import { ProjectFilters } from "../components/projects/ProjectFilters";
import { EmptyState } from "../components/ui/EmptyState";
import { Search } from "lucide-react";

export function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchQuery =
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        (p.location || "").toLowerCase().includes(query.toLowerCase());
      const matchCat = !category || p.category === category;
      return matchQuery && matchCat;
    });
  }, [query, category]);

  const onReset = () => {
    setQuery("");
    setCategory("");
  };

  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
          ]}
        />
        <SectionHeading
          title="Our Projects"
          subtitle="Ongoing, upcoming, and handover developments"
          align="left"
        />
        <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl">
          Explore our catalogue of real estate developments. Project details
          below are drawn from the official website where available. Prices and
          availability are not published; contact our team for verified
          information.
        </p>

        <ProjectFilters
          query={query}
          setQuery={setQuery}
          category={category}
          setCategory={setCategory}
          onReset={onReset}
        />

        {filtered.length === 0 ? (
          <EmptyState
            icon={<Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />}
            title="No projects found"
            description="Try adjusting your search or filters."
            action={
              <Button variant="outline" onClick={onReset}>
                Reset filters
              </Button>
            }
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}

        <div className="mt-12 p-8 rounded-xl border border-slate-200 bg-slate-50">
          <h4 className="text-lg font-bold text-navy-900 mb-3">Project Categories</h4>
          <div className="flex flex-wrap gap-3">
            {PROJECT_CATEGORIES.map((c) => (
              <Button
                key={c.value}
                variant="outline"
                size="sm"
                onClick={() => {
                  setCategory(c.value);
                  setQuery("");
                }}
              >
                {c.label}
              </Button>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Status labels such as "Contact for details" reflect that the
            official website does not confirm current availability. They are
            not verified statuses.
          </p>
        </div>
      </Container>
    </div>
  );
}
