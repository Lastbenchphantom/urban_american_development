import { SITE_NAME } from "../../lib/constants";
import { Container } from "./Container";

/**
 * Site footer with company info, branch offices, links, and newsletter.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-slate-300 border-t border-slate-800">
      <div className="bg-slate-900/50 border-b border-slate-800 py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-1.5 mb-4">
                <span className="text-white font-bold text-xl tracking-tight">
                  {SITE_NAME}
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs md:max-w-full mb-6">
                Urban American Development Company Ltd. (UADCL) develops safe,
                comfortable, and contemporary housing. Established in October
                2009 with the ideology of making safe shelter for the fast
                growing people of Chittagong and Bangladesh.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-navy-400"
                  aria-label="Facebook (placeholder - not functional)"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  F
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-navy-400"
                  aria-label="Twitter (placeholder - not functional)"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  T
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-navy-400"
                  aria-label="LinkedIn (placeholder - not functional)"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  in
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/leadership" className="hover:text-white transition-colors">Leadership</a></li>
                <li><a href="/csr" className="hover:text-white transition-colors">CSR</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Projects</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="/projects" className="hover:text-white transition-colors">Ongoing Projects</a></li>
                <li><a href="/apartments" className="hover:text-white transition-colors">Apartment Finder</a></li>
                <li><a href="/handover" className="hover:text-white transition-colors">Handover Projects</a></li>
                <li><a href="/news" className="hover:text-white transition-colors">News & Updates</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <a
                    href="mailto:info@urbanbd.com"
                    className="hover:text-white transition-colors"
                  >
                    info@urbanbd.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@urbanbd.com"
                    className="hover:text-white transition-colors"
                  >
                    support@urbanbd.com
                  </a>
                </li>
                <li>
                  <a href="tel:+880312556141" className="hover:text-white transition-colors">
                    +880 31 2556141-2
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Visit Contact Page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>
              © {currentYear} {SITE_NAME} Ltd. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
