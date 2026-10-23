import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";

export function CSRPage() {
  const initiatives = [
    {
      title: "Community Engagement",
      body:
        "We support and affect positive change in the communities where we work and live. Our approach is grounded in integrity, competency, and mutual respect.",
    },
    {
      title: "Client Relationships",
      body:
        "We build unyielding dedication to exceeding our clients' expectations combined with a genuine concern for real estate. Choosing the right property management protects your investment and maximizes your lifestyle.",
    },
    {
      title: "Ethical Practice",
      body:
        "We act transparently, abide by ethical practices, avoid fraudulent activity, and comply with national and international standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "CSR", href: "/csr" },
          ]}
        />
        <SectionHeading
          title="Community &amp; Social Responsibility"
          subtitle="Our commitment to people and place"
          align="left"
        />
        <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl">
          The official website presents CSR as a commitment to integrity,
          competency, mutual respect, and positive community impact. It does
          not list specific named charitable initiatives or dated activities.
          The sections below frame our general approach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((init) => (
            <div key={init.title} className="rounded-xl border border-slate-200 bg-white p-8 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-navy-50 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 8.088 9.246 9 7.5 9S4.168 8.088 3 6.753m10.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">{init.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{init.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-slate-50 border border-slate-200 p-8">
          <p className="text-sm text-slate-500 mb-2">
            <strong>Demonstration content:</strong> The initiative cards above
            illustrate the CSR page layout. They are not verified charitable
            activities and should be replaced with confirmed initiatives before
            publication.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="primary">
            <Link to="/contact">Contact Us About CSR <span className="ml-2">→</span></Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
