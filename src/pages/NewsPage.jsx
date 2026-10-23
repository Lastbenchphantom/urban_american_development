import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { EmptyState } from "../components/ui/EmptyState";
import { NEWS, NEWS_CATEGORIES } from "../data/news";
import { Search } from "lucide-react";

export function NewsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const filtered = useMemo(() => {
    return NEWS.filter((n) => {
      const matchQuery =
        n.title.toLowerCase().includes(query.toLowerCase()) ||
        (n.summary || "").toLowerCase().includes(query.toLowerCase());
      const matchCat = !category || n.category === category;
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
            { label: "News", href: "/news" },
          ]}
        />
        <SectionHeading
          title="News &amp; Updates"
          subtitle="Latest from Urban American Development"
          align="left"
        />
        <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl">
          The official website does not publish a current news feed. The
          articles below are demonstration content used to make the news
          section functional. They are not verified company announcements and
          will be replaced before publication.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="search"
              placeholder="Search news articles"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900"
            />
          </div>
          <div className="relative w-full sm:w-64">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 appearance-none"
            >
              {NEWS_CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          <Button variant="outline" onClick={onReset} disabled={!query && !category}>
            Reset
          </Button>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            icon={<Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />}
            title="No articles found"
            description="Try adjusting your search or category filter."
            action={
              <Button variant="outline" onClick={onReset}>
                Reset filters
              </Button>
            }
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <article
                key={article.id}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="h-40 overflow-hidden">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.imageAlt || article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                      <span className="text-slate-400 text-xs uppercase tracking-wider font-medium">
                        Image not available
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col">
                  <span
                    className="text-xs font-semibold text-navy-700 uppercase tracking-wider mb-2"
                  >
                    {article.category}
                  </span>
                  <Link
                    to={`/news/${article.slug}`}
                    className="text-lg font-bold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors line-clamp-2"
                  >
                    {article.title}
                  </Link>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                    {article.summary || "Article content will be updated soon."}
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to={`/news/${article.slug}`}>
                      Read article <span className="ml-1">→</span>
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-12 p-8 rounded-xl border border-slate-200 bg-slate-50">
          <p className="text-sm text-slate-500 mb-2">
            <strong>Note:</strong> No verified news or dated events are
            published on the official website. Historical events listed there
            (2011-2018) are not reproduced as current news.
          </p>
        </div>
      </Container>
    </div>
  );
}
