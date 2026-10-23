import { Search, Filter, RefreshCw } from "lucide-react";
import { PROJECT_CATEGORIES } from "../../data/projects";
import { Button } from "../ui/Button";

/**
 * Project catalogue search and filter controls.
 * Uses URL search params via onSearch/onFilter callbacks owned by the page.
 */
export function ProjectFilters({
  query,
  setQuery,
  category,
  setCategory,
  onReset,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div className="relative w-full sm:w-72">
        <Search className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
        <input
          type="search"
          placeholder="Search projects by name or location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900"
        />
      </div>

      <div className="relative w-full sm:w-64">
        <Filter className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full pl-9 pr-10 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 appearance-none"
        >
          <option value="">All categories</option>
          {PROJECT_CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={onReset}
          disabled={!query && !category}
          className="flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}
