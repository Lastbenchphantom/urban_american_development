/**
 * Navigation items for header and footer.
 * All links point to valid internal routes.
 */
export const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Projects", href: "/projects" },
  { label: "Apartments", href: "/apartments" },
  { label: "News", href: "/news" },
  { label: "CSR", href: "/csr" },
  { label: "Careers", href: "/careers" },
  { label: "Handover", href: "/handover" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Vision & Mission", href: "/about#vision-mission" },
    { label: "CSR", href: "/csr" },
  ],
  projects: [
    { label: "Ongoing Projects", href: "/projects" },
    { label: "Apartment Finder", href: "/apartments" },
    { label: "Handover Projects", href: "/handover" },
    { label: "News & Updates", href: "/news" },
  ],
  partnership: [
    { label: "Landowner Partnership", href: "/landowner-partnership" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export const BREADCRUMB_HOME = { label: "Home", href: "/" };
