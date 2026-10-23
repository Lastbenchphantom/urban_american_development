import { Container } from "../components/layout/Container";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CAREERS as CareersPageData } from "../data/careers";
import { CareerApplicationForm } from "../components/forms/CareerApplicationForm";

export function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Careers", href: "/careers" },
          ]}
        />
        <SectionHeading
          title="Careers"
          subtitle="Build your career with us"
          align="left"
        />
        <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl">
          {CareersPageData.intro}
        </p>

        <div className="rounded-xl border border-slate-200 bg-amber-50 p-6 mb-10">
          <p className="text-sm text-amber-800 mb-2">
            <strong>No current openings.</strong>
          </p>
          <p className="text-sm text-amber-700 mb-2">
            {CareersPageData.historicalNote}
          </p>
          <p className="text-sm text-amber-700">
            We are not currently recruiting for any verified position. You may
            still submit a general interest application below.
          </p>
        </div>

        <div className="max-w-2xl">
          <h3 className="text-xl font-bold text-navy-900 mb-4">General Interest Application</h3>
          <p className="text-slate-600 mb-6">
            If you'd like to be considered for future opportunities, submit
            your details below. This is a general interest form only — no
            current vacancy is confirmed.
          </p>
          <CareerApplicationForm />
        </div>

        <div className="mt-12 rounded-xl border border-slate-200 bg-white p-8">
          <h3 className="text-lg font-bold text-navy-900 mb-4">Contact Our HR Team</h3>
          <ul className="space-y-2 text-slate-600">
            <li>
              <span className="font-semibold text-navy-900">Email:</span>{" "}
              <a href="mailto:hrd@urbanbd.com" className="text-navy-700 hover:underline">
                hrd@urbanbd.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-navy-900">Helplines:</span>{" "}
              {CareersPageData.helplines.join(", ")}
            </li>
            <li>
              <span className="font-semibold text-navy-900">Postal:</span>{" "}
              {CareersPageData.postalAddress}
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
