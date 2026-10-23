import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Building2, Users, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "../components/layout/Container";
import { Footer } from "../components/layout/Footer";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { StatusBadge } from "../components/ui/StatusBadge";
import { PROJECTS } from "../data/projects";

const FEATURED = PROJECTS.filter((p) => p.category === "ongoing").slice(0, 4);

export function HomePage() {
  const statItems = [
    { label: "Ongoing Projects", value: "8+" },
    { label: "Upcoming Projects", value: "4+" },
    { label: "Handover Projects", value: "2" },
    { label: "Branch Offices", value: "5" },
  ];

  const features = [
    {
      title: "Safe & Contemporary Living",
      body: "We develop homes designed for comfortable, contemporary living with structural firmness and modern features.",
    },
    {
      title: "Customer First",
      body: "We place client interest as the highest priority and deliver services of the highest quality.",
    },
    {
      title: "Ethical Development",
      body: "We act transparently, avoid fraudulent activity, and comply with national and international standards.",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero - full width background */}
      <div className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" aria-hidden="true" />
        <Container className="relative pt-20 pb-32 lg:pt-32 lg:pb-40">
          <div className="max-w-3xl text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-navy-900/5 text-navy-900 text-xs font-semibold uppercase tracking-wider mb-6">
              Real Estate Development
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy-900 leading-tight mb-6">
              Building Safe,<br />
              <span className="text-navy-600">Contemporary Homes</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
              Urban American Development Company Ltd. (UADCL) develops safe
              shelter for fast-growing communities in Chittagong and
              Bangladesh. Explore our ongoing projects and partner with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="primary" className="w-auto">
                <Link to="/projects">
                  <ArrowRight className="-ml-1 w-5 h-5" /> Explore Projects
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-auto">
                <Link to="/contact">
                  <Mail className="-ml-1 w-5 h-5" /> Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Stats bar */}
      <div className="border-y border-slate-200 bg-white">
        <Container className="py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statItems.map((s) => (
              <div key={s.label} className="px-4">
                <p className="text-2xl font-bold text-navy-900">{s.value}</p>
                <p className="text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Featured projects */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading title="Featured Projects" subtitle="Ongoing developments" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {FEATURED.map((p) => (
              <article
                key={p.id}
                className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-40 overflow-hidden">
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
                  <div className="space-y-1 text-sm text-slate-600">
                    {p.location && <p>{p.location}</p>}
                    {p.storied && <p>{p.storied}</p>}
                  </div>
                  <Link
                    to={`/projects/${p.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-navy-900 hover:underline flex items-center gap-1"
                  >
                    View details <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Company introduction */}
      <section className="py-20 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                title="About Urban American Development"
                subtitle="Company introduction"
                align="left"
              />
              <p className="text-slate-600 leading-relaxed mb-6">
                Urban American Development Company Ltd. (UADCL) was established
                in October 2009 with the ideology of making safe shelter for
                the fast growing people of Chittagong as well as Bangladesh.
                We are committed to upholding a distinct benchmark of functional
                creativity, flawless design, and high standard construction
                quality.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We place the interest of our clients as the highest priority,
                acknowledge our employees as our most valuable assets, and
                provide services of the highest quality while proudly
                representing Bangladesh.
              </p>
              <Button asChild variant="primary">
                <Link to="/about">Learn More <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="h-[400px] rounded-xl border border-slate-200 bg-slate-100 flex items-center justify-center">
                <Building2 className="w-32 h-32 text-slate-400" />
                <p className="text-center text-slate-500 mt-4 max-w-xs">
                  Official project photography will be displayed here once
                  verified assets are available.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why explore / features */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading title="Why Explore Our Projects" subtitle="Our approach" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-navy-50 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-navy-900" />
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-2">{f.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Project discovery */}
      <section className="py-20 bg-slate-50">
        <Container>
          <div className="max-w-2xl text-center">
            <SectionHeading title="Discover Our Projects" subtitle="Find your next home" align="center" />
            <p className="text-slate-600 leading-relaxed mb-8">
              Browse our catalogue of ongoing, upcoming, and handover projects
              across Chittagong and Cox's Bazar. Use filters to narrow your
              search.
            </p>
            <Button asChild size="lg" variant="primary">
              <Link to="/projects">Browse All Projects <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Landowner partnership */}
      <section className="py-20 bg-white border-t border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading title="Landowner Partnership" subtitle="Collaborate with us" align="left" />
              <p className="text-slate-600 leading-relaxed mb-6">
                We welcome landowner partnership enquiries. If you have land
                suitable for development, submit an initial enquiry and our
                team will guide you through the general collaboration process.
              </p>
              <Button asChild variant="primary" size="lg">
                <Link to="/landowner-partnership">Submit Landowner Enquiry <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 rounded-xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-700" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  General process information only — specific terms are
                  confirmed case by case.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Handover / customer service */}
      <section className="py-20 bg-slate-50 border-t">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl border border-slate-200 bg-slate-900 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Handover &amp; Customer Service</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Need handover support or after-sales assistance? Our team is
                here to help with verified guidance and documentation.
              </p>
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link to="/handover">Visit Handover Page <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Phone className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* News preview */}
      <section className="py-20 bg-white">
        <Container>
          <div className="flex justify-between items-end mb-10">
            <SectionHeading title="News & Updates" subtitle="Latest from Urban American" align="left" />
            <Button asChild variant="outline" size="sm">
              <Link to="/news">View all <ArrowRight className="ml-1 w-4 h-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* News items rendered dynamically in NewsPage; here show a compact preview using data */}
            {null}
          </div>
        </Container>
      </section>

      {/* CSR */}
      <section className="py-20 bg-slate-50 border-t">
        <Container>
          <div className="max-w-3xl text-center">
            <SectionHeading title="Community &amp; Social Responsibility" subtitle="Our commitment" align="center" />
            <p className="text-slate-600 leading-relaxed mb-8">
              We support and affect positive change in the communities where we
              work and live. Our approach is grounded in integrity, competency,
              and mutual respect.
            </p>
            <Button asChild variant="outline">
              <Link to="/csr">Learn More <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <Container>
          <div className="rounded-xl bg-navy-800/50 border border-navy-700 p-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto">
              Have a question about our projects, landowner partnership, or
              customer service? Reach out to our corporate office in Chittagong
              or any of our branch locations.
            </p>
            <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
              <Link to="/contact">
                <Phone className="-ml-1 w-5 h-5" /> Contact Us
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
