import { useSearchParams, Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { EmptyState } from "../components/ui/EmptyState";
import { PROJECTS } from "../data/projects";
import { NEWS } from "../data/news";
import { Search } from "lucide-react";

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").toLowerCase().trim();

  const projectResults = PROJECTS.filter((p) => {
    if (!query) return false;
    return (
      p.name.toLowerCase().includes(query) ||
      (p.location || "").toLowerCase().includes(query) ||
      (p.description || "").toLowerCase().includes(query)
    );
  });

  const newsResults = NEWS.filter((n) => {
    if (!query) return false;
    return (
      n.title.toLowerCase().includes(query) ||
      (n.summary || "").toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Search", href: "/search" },
          ]}
        />
        <SectionHeading
          title="Search"
          subtitle="Search projects and updates"
          align="left"
        />
        <div className="relative w-full max-w-2xl mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="search"
            placeholder="Search projects, news, and more"
            defaultValue={query}
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900"
          />
        </div>

        {query === "" ? (
          <div className="text-center py-20">
            <p className="text-slate-500 mb-6">Enter a search term above.</p>
            <Button asChild variant="outline">
              <Link to="/projects">Browse Projects</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h3 className="text-lg font-bold text-navy-900 mb-4">
                  Projects ({projectResults.length})
                </h3>
                {projectResults.length === 0 ? (
                  <p className="text-sm text-slate-500">
                    No projects match your search.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {projectResults.map((p) => (
                      <div
                        key={p.id}
                        className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                          <span className="text-xs text-slate-500 font-medium">🏢</span>
                        </div>
                        <div>
                          <Link
                            to={`/projects/${p.slug}`}
                            className="font-bold text-navy-900 hover:underline"
                          >
                            {p.name}
                          </Link>
                          <p className="text-xs text-slate-500 truncate max-w-xs">
                            {p.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-lg font-bold text-navy-900 mb-4">
                  News &amp; Updates ({newsResults.length})
                </h3>
                {newsResults.length === 0 ? (
                  <p className="text-sm text-slate-500">
                    No articles match your search.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {newsResults.map((n) => (
                      <div
                        key={n.id}
                        className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                          <span className="text-xs text-slate-500 font-medium">📰</span>
                        </div>
                        <div>
                          <Link
                            to={`/news/${n.slug}`}
                            className="font-bold text-navy-900 hover:underline"
                          >
                            {n.title}
                          </Link>
                          <p className="text-xs text-slate-500 truncate max-w-xs">
                            {n.category}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {projectResults.length === 0 && newsResults.length === 0 && (
              <EmptyState
                icon={<Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />}
                title="No results found"
                description={`No projects or news articles match "${query}".`}
                action={
                  <Button variant="outline" asChild>
                    <Link to="/projects">Browse All Projects</Link>
                  </Button>
                }
              />
            )}
          </>
        )}
      </Container>
    </div>
  );
}
