/**
 * News articles.
 *
 * The existing official website does not publish a current news feed; its
 * Events page lists historical items dated 2011-2018. These articles are
 * clearly labeled demonstration content so the news section has a working UI.
 * They are NOT verified company announcements and must be replaced before
 * production deployment.
 */
export const NEWS = [
  {
    id: "welcome-to-urban-american",
    slug: "welcome-to-urban-american",
    title: "Welcome to Urban American Development Company",
    summary:
      "Introducing our renewed public website and our commitment to safe, contemporary housing in Chittagong and beyond.",
    content:
      "<p>Urban American Development Company Ltd. (UADCL) welcomes you through a splendid living milestone. A paradigm of living is surrounded by natural composition where you will get the hundred percent living satisfactions.</p><p>We are ensuring the overall structural firmness according to our reputation in the development sector. We care for our honorable clients, and the number of satisfied clients is increasing day by day.</p>",
    date: null,
    image: null,
    imageAlt: null,
    category: "Company",
    sourceConfirmed: false,
    demonstration: true,
  },
  {
    id: "ongoing-projects-update",
    slug: "ongoing-projects-update",
    title: "Ongoing Projects at a Glance",
    summary:
      "Park Hill, A. Rahman Heights, Abser Tower, Azad Nibash, Arif Plaza, Salina Palace, Urban Tasmariah, and Ocean Front are our current ongoing developments.",
    content:
      "<p>Explore our catalogue of ongoing residential projects across Chittagong and Cox's Bazar. Each project listing includes verified location, storied count, facing, and unit details drawn from the official website.</p><p>Contact our team for verified availability and pricing information.</p>",
    date: null,
    image: null,
    imageAlt: null,
    category: "Projects",
    sourceConfirmed: false,
    demonstration: true,
  },
  {
    id: "handover-projects-ashiyana-shahajan",
    slug: "handover-projects-ashiyana-shahajan",
    title: "Handover Projects: Ashiyana and Shahajan",
    summary:
      "Urban American Ashiyana in South Khulshi and Urban American Shahajan in Halishahar Housing Society are now at handover stage.",
    content:
      "<p>Two handover projects are available with brochures: Urban American Ashiyana (Road 01, South Khulshi, City Corporation VIP R/A, Chittagong) and Urban American Shahajan (Plot 19, Road 01, Block-H, Halishahar Housing Society, Chittagong).</p><p>Download the brochures from the Handover page.</p>",
    date: null,
    image: null,
    imageAlt: null,
    category: "Handover",
    sourceConfirmed: false,
    demonstration: true,
  },
  {
    id: "landowner-partnership",
    slug: "landowner-partnership",
    title: "Landowner Partnership Enquiries",
    summary:
      "We welcome landowner partnership enquiries. Learn about our general collaboration process and submit your initial enquiry.",
    content:
      "<p>Urban American Development Company welcomes landowners interested in collaboration. Potential steps are presented as general process information only and do not represent confirmed contractual terms.</p><p>Visit the Landowner Partnership page to submit an initial enquiry.</p>",
    date: null,
    image: null,
    imageAlt: null,
    category: "Partnership",
    sourceConfirmed: false,
    demonstration: true,
  },
];

export const NEWS_CATEGORIES = [
  { value: "", label: "All Categories" },
  { value: "Company", label: "Company" },
  { value: "Projects", label: "Projects" },
  { value: "Handover", label: "Handover" },
  { value: "Partnership", label: "Partnership" },
];

export const getArticleBySlug = (slug) => NEWS.find((n) => n.slug === slug) || null;
