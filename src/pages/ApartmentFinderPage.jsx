import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { EmptyState } from "../components/ui/EmptyState";
import { PROJECTS, getProjectBySlug } from "../data/projects";
import { DEMONSTRATION_UNITS } from "../data/apartments";
import { ApartmentFilters } from "../components/projects/ApartmentFilters";
import { Search } from "lucide-react";

export function ApartmentFinderPage() {
  const [query, setQuery] = useState("");
  const [project, setProject] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [sizeMin, setSizeMin] = useState("");
  const [sizeMax, setSizeMax] = useState("");
  const [sort, setSort] = useState("size-asc");

  const allUnits = useMemo(() => {
    const units = [];
    for (const slug in DEMONSTRATION_UNITS) {
      const p = getProjectBySlug(slug);
      if (!p) continue;
      for (const u of DEMONSTRATION_UNITS[slug]) {
        units.push({ ...u, projectSlug: slug, projectName: p.name });
      }
    }
    return units;
  }, []);

  const filtered = useMemo(() => {
    return allUnits
      .filter((u) => {
        if (project && u.projectSlug !== project) return false;
        if (bedrooms && String(u.bedrooms) !== bedrooms) return false;
        if (sizeMin && u.sizeSft < Number(sizeMin)) return false;
        if (sizeMax && u.sizeSft > Number(sizeMax)) return false;
        if (query) {
          const q = query.toLowerCase();
          return (
            u.projectName.toLowerCase().includes(q) ||
            u.type.toLowerCase().includes(q)
          );
        }
        return true;
      })
      .sort((a, b) => {
        if (sort === "size-asc") return a.sizeSft - b.sizeSft;
        if (sort === "size-desc") return b.sizeSft - a.sizeSft;
        if (sort === "floor-asc") return a.floor - b.floor;
        return 0;
      });
  }, [query, project, bedrooms, sizeMin, sizeMax, sort, allUnits]);

  const onReset = () => {
    setQuery("");
    setProject("");
    setBedrooms("");
    setSizeMin("");
    setSizeMax("");
    setSort("size-asc");
  };

  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Apartments", href: "/apartments" },
          ]}
        />
        <SectionHeading
          title="Apartment Finder"
          subtitle="Discover available units across our projects"
          align="left"
        />
        <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl">
          The unit listings below are demonstration content used to make the
          finder functional. No verified live apartment inventory, prices, or
          availability are published. Contact our team for current unit
          availability.
        </p>

        <ApartmentFilters
          project={project}
          setProject={setProject}
          bedrooms={bedrooms}
          setBedrooms={setBedrooms}
          sizeMin={sizeMin}
          setSizeMin={setSizeMin}
          sizeMax={sizeMax}
          setSizeMax={setSizeMax}
          sort={sort}
          setSort={setSort}
          onReset={onReset}
          projects={PROJECTS.filter((p) => p.category === "ongoing")}
        />

        <div className="flex justify-between items-end mb-6">
          <p className="text-sm text-slate-500">
            {filtered.length} unit{filtered.length !== 1 ? "s" : ""} matching your filters
          </p>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            icon={<Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />}
            title="No units found"
            description="Try adjusting your project, bedroom, or size filters."
            action={
              <Button variant="outline" onClick={onReset}>
                Reset filters
              </Button>
            }
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((u) => (
              <article
                key={u.id}
                className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-navy-900">
                    {u.type}
                  </h3>
                  <span className="text-xs font-semibold text-navy-700 bg-navy-50 px-2.5 py-1 rounded">
                    {u.projectName}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <p className="flex items-center gap-2">
                    <span className="text-slate-400">&#128397;</span>
                    {u.bedrooms} bedroom{u.bedrooms !== 1 ? "s" : ""}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-slate-400">&#128437;</span>
                    {u.sizeSft.toLocaleString()} sft
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-slate-400">&#128394;</span>
                    Floor {u.floor}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-slate-400">&#127760;</span>
                    {u.facing} facing
                  </p>
                </div>
                <p className="text-xs text-slate-400 mb-4 uppercase tracking-wider">
                  Demonstration unit — not verified inventory
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to={`/projects/${u.projectSlug}`}>
                    View {u.projectName}
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
