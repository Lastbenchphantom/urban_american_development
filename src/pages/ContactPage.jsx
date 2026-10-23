import { Container } from "../components/layout/Container";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ContactForm } from "../components/forms/ContactForm";
import { CONTACT, BRANCHES } from "../data/branches";
import { Phone, MapPin } from "lucide-react";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact" },
          ]}
        />
        <SectionHeading
          title="Contact Us"
          subtitle="Get in touch with our team"
          align="left"
        />
        <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl">
          Have a question about our projects, landowner partnership, careers,
          or customer service? Reach out to our corporate office or any of our
          branch locations. Contact details below are published on the official
          website.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-navy-900 mb-4">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-navy-900 mb-4">Corporate Office</h3>
              <div className="space-y-4 text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                  <p className="leading-relaxed">{CONTACT.corporateOffice}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-slate-400 shrink-0" />
                  <p>
                    {CONTACT.telephones.join(", ")}<br />
                    Helpline: {CONTACT.mobile}
                  </p>
                </div>
                <div className="space-y-1">
                  {CONTACT.emails.map((email, i) => (
                    <a
                      key={i}
                      href={`mailto:${email}`}
                      className="text-sm text-navy-700 hover:underline break-all"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-navy-900 mb-4">Branch Offices</h3>
              {BRANCHES.map((branch) => (
                <div key={branch.id} className="mb-5 last:mb-0">
                  <h4 className="font-bold text-navy-900 mb-1">{branch.name}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-1">
                    {branch.address}
                  </p>
                  {branch.phones.length > 0 && (
                    <p className="text-sm text-slate-600">
                      {branch.phones.join(", ")}
                    </p>
                  )}
                  {branch.mobile && (
                    <p className="text-sm text-slate-600">
                      Mobile: {branch.mobile}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-900 text-white p-6">
              <h3 className="text-lg font-bold text-white mb-4">Stay Connected</h3>
              <p className="text-sm text-slate-400 mb-6">
                Social media links on the official website are placeholders
                and are not functional. Please use email or phone to contact
                us.
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@urbanbd.com" className="text-slate-300 hover:text-white transition-colors">
                    info@urbanbd.com
                  </a>
                </li>
                <li>
                  <a href="mailto:support@urbanbd.com" className="text-slate-300 hover:text-white transition-colors">
                    support@urbanbd.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
