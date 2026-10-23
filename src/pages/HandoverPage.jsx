import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { HandoverForm } from "../components/forms/HandoverForm";

export function HandoverPage() {
  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Handover", href: "/handover" },
          ]}
        />
        <SectionHeading
          title="Handover &amp; Customer Service"
          subtitle="After-sales support for our customers"
          align="left"
        />

        <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl">
          Once a project reaches handover stage, our team supports customers
          through the handover process and after-sales service. Specific
          service-level agreements and handover policies are not published
          publicly — contact our team for verified guidance.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-navy-900 mb-4">Handover Projects</h3>
            <ul className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <li>
                <h4 className="font-bold text-navy-900">Urban American Ashiyana</h4>
                <p className="text-sm text-slate-500">
                  Road 01, South Khulshi, City Corporation VIP R/A, Chittagong.
                </p>
              </li>
              <li>
                <h4 className="font-bold text-navy-900">Urban American Shahajan</h4>
                <p className="text-sm text-slate-500">
                  Plot 19, Road 01, Block-H, Halishahar Housing Society,
                  Chittagong.
                </p>
              </li>
            </ul>
            <Button asChild variant="primary">
              <Link to="/projects?category=handover">View Handover Projects <span className="ml-2">→</span></Link>
            </Button>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-bold text-navy-900 mb-4">Service Enquiry</h3>
            <p className="text-sm text-slate-600 mb-6">
              Need handover support, after-sales assistance, or documents?
              Submit a service request below.
            </p>
            <HandoverForm />
          </div>
        </div>

        <SectionHeading title="Frequently Asked Questions" align="left" className="mt-16 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { q: "How do I request handover documents?", a: "Submit a service request via the form above or contact our corporate office." },
            { q: "What after-sales support is offered?", a: "Specific policies are not published. Our team will provide verified guidance when you contact us." },
            { q: "Where is the handover office?", a: "M. M. Tower (7th Floor), 1105 GEC Circle, East Nasirabad, Chittagong, Bangladesh." },
          ].map((item, i) => (
            <div key={i} className="border border-slate-200 rounded-lg p-5">
              <p className="font-medium text-slate-900 mb-2">{item.q}</p>
              <p className="text-sm text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
