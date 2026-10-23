import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/layout/RootLayout";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { LeadershipPage } from "../pages/LeadershipPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ProjectDetailPage } from "../pages/ProjectDetailPage";
import { ApartmentFinderPage } from "../pages/ApartmentFinderPage";
import { LandownerPartnershipPage } from "../pages/LandownerPartnershipPage";
import { HandoverPage } from "../pages/HandoverPage";
import { NewsPage } from "../pages/NewsPage";
import { NewsDetailPage } from "../pages/NewsDetailPage";
import { CSRPage } from "../pages/CSRPage";
import { CareersPage } from "../pages/CareersPage";
import { ContactPage } from "../pages/ContactPage";
import { PrivacyPage } from "../pages/PrivacyPage";
import { TermsPage } from "../pages/TermsPage";
import { SearchPage } from "../pages/SearchPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "leadership", element: <LeadershipPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "projects/:slug", element: <ProjectDetailPage /> },
      { path: "apartments", element: <ApartmentFinderPage /> },
      { path: "landowner-partnership", element: <LandownerPartnershipPage /> },
      { path: "handover", element: <HandoverPage /> },
      { path: "news", element: <NewsPage /> },
      { path: "news/:slug", element: <NewsDetailPage /> },
      { path: "csr", element: <CSRPage /> },
      { path: "careers", element: <CareersPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "search", element: <SearchPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
