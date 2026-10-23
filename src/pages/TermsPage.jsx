import { Container } from "../components/layout/Container";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";

export function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Terms &amp; Conditions", href: "/terms" },
          ]}
        />
        <SectionHeading
          title="Terms &amp; Conditions"
          subtitle="Draft — for legal review"
          align="left"
        />
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 mb-8">
          <p className="text-sm text-amber-800 font-semibold mb-2">
            Draft for review
          </p>
          <p className="text-sm text-amber-700">
            These terms and conditions are a draft. They have not been legally
            approved and require company and legal review before publication.
            They do not establish binding company-specific contractual
            commitments.
          </p>
        </div>
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
          <p>
            Welcome to Urban American Development Company Ltd. These draft
            terms and conditions govern your use of this website.
          </p>
          <h4 className="text-lg font-bold text-navy-900 mt-6 mb-2">1. Acceptance of Terms</h4>
          <p>
            By accessing or using this website, you agree to be bound by these
            terms. If you do not agree, please discontinue use.
          </p>
          <h4 className="text-lg font-bold text-navy-900 mt-6 mb-2">2. Use of the Website</h4>
          <p>
            You may use this website for lawful purposes only. You must not
            misuse the site or attempt to interfere with its operation.
          </p>
          <h4 className="text-lg font-bold text-navy-900 mt-6 mb-2">3. Content and Disclaimer</h4>
          <p>
            All content on this website is provided for general information
            only. Project details, availability, and pricing are not published
            here and should be confirmed with our team. We make no
            representations or warranties about the accuracy or completeness of
            the content.
          </p>
          <h4 className="text-lg font-bold text-navy-900 mt-6 mb-2">4. Limitation of Liability</h4>
          <p>
            To the fullest extent permitted by law, we are not liable for any
            damages arising from your use of this website.
          </p>
          <h4 className="text-lg font-bold text-navy-900 mt-6 mb-2">5. Governing Law</h4>
          <p>
            These terms are governed by the laws of Bangladesh, subject to
            legal review.
          </p>
          <h4 className="text-lg font-bold text-navy-900 mt-6 mb-2">6. Contact</h4>
          <p>
            Questions about these draft terms may be directed to
            info@urbanbd.com or support@urbanbd.com.
          </p>
        </div>
        <div className="mt-12 text-xs text-slate-400">
          <p>
            Draft terms and conditions — requires company and legal review
            before publication. Not a binding legal notice.
          </p>
        </div>
      </Container>
    </div>
  );
}
