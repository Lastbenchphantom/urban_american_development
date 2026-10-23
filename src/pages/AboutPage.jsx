import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { Accordion } from "../components/ui/Accordion";
import { SITE_NAME } from "../lib/constants";

export function AboutPage() {
  const accordionItems = [
    {
      id: "history",
      title: "Our History",
      content:
        "Urban American Development Company Ltd. (UADCL) was established in October 2009 with the ideology of making safe shelter for the fast growing people of Chittagong as well as Bangladesh. The company's registration number is CH-7524/10, and it is an affiliated member of REHAB with ISO 9001:2008 certification.",
    },
    {
      id: "vision",
      title: "Vision & Mission",
      content:
        "We strive to accomplish our company vision and mission by upholding our core values: accountability, transparency, ethical practices, respect for client needs, compliance with national and international standards, and respect for privacy. We aim to place client interest as the highest priority while proudly representing Bangladesh.",
    },
    {
      id: "approach",
      title: "Our Approach",
      content:
        "Our approach to real estate development combines functional creativity, flawless design, high standard construction quality and workmanship, immaculate exterior and interior finish, and a subtle blend of practicality and aesthetics. We maximize the use of land through provision of landscaping, security, and enough parking spaces.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
          ]}
        />
        <SectionHeading title="About Us" subtitle="Company introduction" align="left" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-xl font-bold text-navy-900 mb-4">
              Who We Are
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              {SITE_NAME} Ltd. (UADCL) was established in October 2009 with the
              ideology of making safe shelter for the fast growing people of
              Chittagong as well as Bangladesh. Due to the macroeconomic impact
              of globalization and increasing housing demand, private real
              estate companies have come forward with their own initiatives.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              The Chairman, Mr. M H Kabir Shahen and the Managing Director, Mr.
              Anowarul Kabir bring to the table in housing construction and the
              establishment of UADCL, providing the avenue for the fulfillment
              of the company's vision of an affordable housing solution.
            </p>
            <Button asChild variant="primary">
              <Link to="/leadership">Meet Our Leadership <span className="ml-2">→</span></Link>
            </Button>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 hidden lg:block">
            <h4 className="text-lg font-bold text-navy-900 mb-4">Company Profile</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><span className="font-semibold text-navy-900">Registered:</span> October 2009</li>
              <li><span className="font-semibold text-navy-900">Reg No.:</span> CH-7524/10</li>
              <li><span className="font-semibold text-navy-900">Type:</span> Housing, habitation and studio apartment</li>
              <li><span className="font-semibold text-navy-900">Affiliation:</span> Member, REHAB</li>
              <li><span className="font-semibold text-navy-900">Certification:</span> ISO 9001:2008 certified</li>
              <li><span className="font-semibold text-navy-900">Key Personnel:</span> 8 positions</li>
            </ul>
          </div>
        </div>

        <SectionHeading
          title="Vision &amp; Mission"
          subtitle="Our guiding principles"
          align="left"
          className="mt-16 mb-6"
        />
        <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl">
          We are collectively accountable for our actions. We act
          transparently. We abide by ethical practices and avoid fraudulent
          activity. We respect our clients' needs. We comply with national and
          international standards. We respect privacy.
        </p>

        <div className="mt-12">
          <Accordion items={accordionItems} />
        </div>

        <div className="mt-16 rounded-xl bg-navy-900 text-white p-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to explore our projects?</h3>
          <p className="text-slate-300 mb-6 max-w-md mx-auto leading-relaxed">
            Discover our ongoing and upcoming developments across Chittagong
            and Cox's Bazar.
          </p>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link to="/projects">View Projects <span className="ml-2">→</span></Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
