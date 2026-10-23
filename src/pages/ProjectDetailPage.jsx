import { useParams, Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { StatusBadge } from "../components/ui/StatusBadge";
import { EmptyState } from "../components/ui/EmptyState";
import { PROJECTS, getProjectBySlug } from "../data/projects";
import { ProjectGallery } from "../components/projects/ProjectGallery";
import { ProjectEnquiryForm } from "../components/forms/ProjectEnquiryForm";
import { FAQS } from "../data/faqs";
import { ExternalLink, MapPin, Building2 } from "lucide-react";

const PROJECT_IMAGES = {
  "park-hill": [{ src: "https://urbanbd.com/images/b.ph.jpg", alt: "Park Hill" }],
  "rahman-heights": [{ src: "https://urbanbd.com/images/b.rh.jpg", alt: "A. Rahman Heights" }],
  "abser-tower": [{ src: "https://urbanbd.com/images/b.at.jpg", alt: "Abser Tower" }],
  "azad-nibash": [{ src: "https://urbanbd.com/images/b.an.jpg", alt: "Azad Nibash" }],
  "arif-plaza": [{ src: "https://urbanbd.com/images/b.ap.jpg", alt: "Arif Plaza" }],
  "salina-palace": [{ src: "https://urbanbd.com/images/b.sp.jpg", alt: "Salina Palace" }],
  "urban-tasmariah": [{ src: "https://urbanbd.com/images/b.tm.jpg", alt: "Urban Tasmariah" }],
  "ocean-front": [{ src: "https://urbanbd.com/images/b.op.jpg", alt: "Ocean Front" }],
};

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Container className="py-20">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }]} />
          <SectionHeading title="Project Not Found" align="left" />
          <EmptyState
            title="Project not found"
            description="The project you're looking for does not exist or has been removed."
            action={
              <Button asChild variant="primary">
                <Link to="/projects">Back to Projects</Link>
              </Button>
            }
          />
        </Container>
      </div>
    );
  }

  const images = PROJECT_IMAGES[project.slug] || [];
  const related = PROJECTS.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: project.name, href: `/projects/${project.slug}` },
          ]}
        />

        <section className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/5">
              <ProjectGallery images={images} />
              {project.brochure && (
                <div className="mt-4">
                  <a
                    href={project.brochure}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" /> Download Brochure
                  </a>
                </div>
              )}
              {!project.brochure && (
                <p className="mt-4 text-xs text-slate-400 uppercase tracking-wider">
                  Brochure not available for this project.
                </p>
              )}
            </div>
            <div className="lg:w-2/5 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-2">
                  {project.name}
                </h2>
                <StatusBadge variant="neutral" className="mb-4 inline-block">
                  {project.statusLabel || "Contact for details"}
                </StatusBadge>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.description ||
                    "Project details will be updated soon. Contact our team for verified information."}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-navy-900 mb-4">Project Details</h3>
                <div className="space-y-3 text-sm text-slate-600">
                  {project.location && (
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900">Location</p>
                        <p className="text-slate-600">{project.location}</p>
                      </div>
                    </div>
                  )}
                  {project.landArea && (
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 text-slate-400 mt-0.5 shrink-0">&#127968;</span>
                      <div>
                        <p className="font-medium text-slate-900">Land Area</p>
                        <p className="text-slate-600">{project.landArea}</p>
                      </div>
                    </div>
                  )}
                  {project.storied && (
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900">Storied</p>
                        <p className="text-slate-600">{project.storied}</p>
                      </div>
                    </div>
                  )}
                  {project.facing && (
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 text-slate-400 mt-0.5 shrink-0">&#127760;</span>
                      <div>
                        <p className="font-medium text-slate-900">Facing</p>
                        <p className="text-slate-600">{project.facing}</p>
                      </div>
                    </div>
                  )}
                  {project.units && (
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 text-slate-400 mt-0.5 shrink-0">&#128397;</span>
                      <div>
                        <p className="font-medium text-slate-900">Units</p>
                        <p className="text-slate-600">{project.units}</p>
                      </div>
                    </div>
                  )}
                  {project.shops && (
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 text-slate-400 mt-0.5 shrink-0">&#128241;</span>
                      <div>
                        <p className="font-medium text-slate-900">Shops</p>
                        <p className="text-slate-600">{project.shops}</p>
                      </div>
                    </div>
                  )}
                  {project.unitSizes && (
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 text-slate-400 mt-0.5 shrink-0">&#128437;</span>
                      <div>
                        <p className="font-medium text-slate-900">Unit Sizes</p>
                        <p className="text-slate-600">{project.unitSizes}</p>
                      </div>
                    </div>
                  )}
                  {project.shopSizes && (
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 text-slate-400 mt-0.5 shrink-0">&#128437;</span>
                      <div>
                        <p className="font-medium text-slate-900">Shop Sizes</p>
                        <p className="text-slate-600">{project.shopSizes}</p>
                      </div>
                    </div>
                  )}
                  {project.parking && (
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 text-slate-400 mt-0.5 shrink-0">&#128692;</span>
                      <div>
                        <p className="font-medium text-slate-900">Parking</p>
                        <p className="text-slate-600">{project.parking}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-navy-900 mb-4">Enquire About {project.name}</h3>
                <ProjectEnquiryForm project={project.name} />
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <SectionHeading title="Frequently Asked Questions" align="left" />
          <div className="mt-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="border border-slate-200 rounded-lg overflow-hidden mb-2">
                <button
                  className="flex w-full items-center justify-between px-5 py-3 text-left bg-slate-50 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-navy-900"
                >
                  <span className="text-slate-900 font-medium">{faq.q}</span>
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="bg-white px-5 pb-4">
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related projects */}
        {related.length > 0 && (
          <section>
            <SectionHeading title="Related Projects" align="left" className="mt-16 mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <article key={p.id} className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-32 overflow-hidden">
                    <img
                      src={p.image || "/images/placeholder-project.svg"}
                      alt={p.imageAlt || p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => { e.target.src = "/images/placeholder-project.svg"; }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-navy-900 mb-1">{p.name}</h3>
                    <StatusBadge variant="neutral" className="mb-3">
                      {p.statusLabel || "Contact for details"}
                    </StatusBadge>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                      {p.description || "Project details will be updated soon."}
                    </p>
                    <Link
                      to={`/projects/${p.slug}`}
                      className="text-sm font-semibold text-navy-900 hover:underline flex items-center gap-1"
                    >
                      View details <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className="mt-16">
          <Button asChild variant="outline">
            <Link to="/projects">← Back to Projects</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
