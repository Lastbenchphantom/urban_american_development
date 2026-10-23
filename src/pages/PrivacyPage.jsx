import { Container } from "../components/layout/Container";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy", href: "/privacy" },
          ]}
        />
        <SectionHeading
          title="Privacy Policy"
          subtitle="Draft — for review"
          align="left"
        />
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 mb-8">
          <p className="text-sm text-amber-800 font-semibold mb-2">
            Draft for review
          </p>
          <p className="text-sm text-amber-700">
            This privacy policy is a draft. It has not been legally approved
            and requires company and legal review before publication. It should
            not be treated as an established privacy notice.
          </p>
        </div>
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
          <p>
            Urban American Development Company Ltd. ("we", "us", "our") is
            committed to protecting your privacy. This draft privacy policy
            explains how we may collect, use, and protect information you
            provide through this website.
          </p>
          <h4 className="text-lg font-bold text-navy-900 mt-6 mb-2">1. Information We Collect</h4>
          <p>
            We may collect personal information such as your name, email
            address, phone number, and message content when you submit a
            contact, enquiry, landowner partnership, or career application form
            on this website.
          </p>
          <h4 className="text-lg font-bold text-navy-900 mt-6 mb-2">2. How We Use Information</h4>
          <p>
            Information submitted through forms is used to respond to your
            enquiry, provide project information, or consider your application.
            Because this phase is a frontend-only demonstration, no data is
            transmitted to or stored by the company.
          </p>
          <h4 className="text-lg font-bold text-navy-900 mt-6 mb-2">3. Data Sharing</h4>
          <p>
            We do not sell or share your personal information with third
            parties. This draft does not establish binding data-sharing
            practices.
          </p>
          <h4 className="text-lg font-bold text-navy-900 mt-6 mb-2">4. Your Rights</h4>
          <p>
            You may contact us to request access to, correction of, or deletion
            of your personal information, subject to applicable law and legal
            review.
          </p>
          <h4 className="text-lg font-bold text-navy-900 mt-6 mb-2">5. Contact</h4>
          <p>
            Questions about this draft policy may be directed to
            info@urbanbd.com or support@urbanbd.com.
          </p>
        </div>
        <div className="mt-12 text-xs text-slate-400">
          <p>
            Draft privacy policy — requires company and legal review before
            publication. Not an established legal notice.
          </p>
        </div>
      </Container>
    </div>
  );
}
