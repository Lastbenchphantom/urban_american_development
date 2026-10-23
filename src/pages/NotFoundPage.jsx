import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Breadcrumbs } from "../components/layout/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { Search } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Container className="flex-1 py-24 flex flex-col items-center justify-center text-center">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "404 Not Found", href: "*" },
          ]}
        />
        <div className="mb-8">
          <span className="text-6xl md:text-8xl font-bold text-navy-900">404</span>
        </div>
        <SectionHeading
          title="Page Not Found"
          subtitle="The page you're looking for doesn't exist"
          align="center"
        />
        <p className="text-slate-600 leading-relaxed mb-10 max-w-md mx-auto">
          We couldn't find the page you requested. It may have been moved or
          removed. Please use the links below to continue exploring.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="primary" size="lg">
            <Link to="/">Homepage</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/projects">Explore Projects</Link>
          </Button>
        </div>
        <div className="mt-10">
          <div className="relative w-full max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="search"
              placeholder="Search our website"
              className="w-full pl-9 pr-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900"
            />
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Or go to <a href="/search" className="text-navy-700 hover:underline">
              Search
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}
