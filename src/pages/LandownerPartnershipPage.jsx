import { Container } from "../components/layout/Container";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { LandownerForm } from "../components/forms/LandownerForm";

export function LandownerPartnershipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Landowner Partnership", href: "/landowner-partnership" },
          ]}
        />
        <SectionHeading
          title="Landowner Partnership"
          subtitle="Collaborate with Urban American Development"
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-navy-900 mb-4">Partner With Us</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              We welcome landowner partnership enquiries. If you own land
              suitable for residential or mixed-use development, our team can
              discuss how we might collaborate to bring new housing to your
              community.
            </p>
            <h4 className="text-lg font-bold text-navy-900 mb-3">General Enquiry Process</h4>
            <ol className="list-decimal list-inside space-y-3 text-slate-600 leading-relaxed mb-8">
              <li>
                Submit your initial landowner enquiry using the form below.
              </li>
              <li>
                Our team reviews your submission and may follow up for
                additional details about your land.
              </li>
              <li>
                If there is potential for collaboration, we discuss the
                general process and next steps on a case-by-case basis.
              </li>
              <li>
                Any land-sharing ratio, returns, or contractual terms are
                confirmed individually — not promised here.
              </li>
            </ol>
            <p className="text-sm text-slate-500">
              <strong>Important:</strong> The steps above are general process
              information only. They do not represent confirmed contractual
              terms, guaranteed returns, or specific outcomes.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-bold text-navy-900 mb-4">Landowner Enquiry</h3>
            <p className="text-sm text-slate-600 mb-6">
              Tell us about your land and your interest in partnering with us.
            </p>
            <LandownerForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
