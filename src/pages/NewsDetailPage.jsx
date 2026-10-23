import { useParams, Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { EmptyState } from "../components/ui/EmptyState";
import { NEWS, getArticleBySlug } from "../data/news";

export function NewsDetailPage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug || "");

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Container className="py-20">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "News", href: "/news" }]} />
          <SectionHeading title="Article Not Found" align="left" />
          <EmptyState
            title="Article not found"
            description="The news article you're looking for does not exist."
            action={
              <Button asChild variant="primary">
                <Link to="/news">Back to News</Link>
              </Button>
            }
          />
        </Container>
      </div>
    );
  }

  const related = NEWS.filter((n) => n.id !== article.id && n.category === article.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "News", href: "/news" },
            { label: article.title, href: `/news/${article.slug}` },
          ]}
        />

        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            {article.image ? (
              <img
                src={article.image}
                alt={article.imageAlt || article.title}
                className="w-full h-64 object-cover rounded-xl border border-slate-200"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-64 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center">
                <span className="text-slate-400 text-xs uppercase tracking-wider font-medium">
                  Image not available
                </span>
              </div>
            )}
          </div>
          <span className="text-xs font-semibold text-navy-700 uppercase tracking-wider mb-2 block">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
            {article.title}
          </h1>
          {article.date && (
            <p className="text-sm text-slate-500 mb-8">{article.date}</p>
          )}
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
            {article.content.split("</p>").map((part, i) => {
              const text = part.replace(/<[^>]*>/g, "").trim();
              if (!text) return null;
              return (
                <p key={i} className="mb-6" dangerouslySetInnerHTML={{ __html: part + (part.endsWith("</p>") ? "" : "</p>") }} />
              );
            })}
          </div>
          <p className="mt-12 text-xs text-slate-400 uppercase tracking-wider">
            Demonstration content — not a verified company announcement.
          </p>

          <div className="mt-16 border-t border-slate-200 pt-8">
            <Button asChild variant="outline">
              <Link to="/news">← Back to News</Link>
            </Button>
          </div>

          {related.length > 0 && (
            <section className="mt-12">
              <h3 className="text-lg font-bold text-navy-900 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((r) => (
                  <div
                    key={r.id}
                    className="rounded-xl border border-slate-200 bg-white p-4 hover:shadow-md transition-shadow"
                  >
                    <Link
                      to={`/news/${r.slug}`}
                      className="text-base font-bold text-navy-900 mb-1 block group-hover:text-navy-700 transition-colors"
                    >
                      {r.title}
                    </Link>
                    <p className="text-sm text-slate-600">{r.summary}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>
      </Container>
    </div>
  );
}
