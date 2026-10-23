import { Filter, X } from "lucide-react";
import { BEDROOM_OPTIONS, SORT_OPTIONS } from "../../data/apartments";

/**
 * Apartment finder filters.
 */
export function ApartmentFilters({
  project,
  setProject,
  bedrooms,
  setBedrooms,
  sizeMin,
  setSizeMin,
  sizeMax,
  setSizeMax,
  sort,
  setSort,
  onReset,
  projects,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="relative">
        <Filter className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
        <select
          value={project}
          onChange={(e) => setProject(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900"
        >
          <option value="">All projects</option>
          {projects.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
        </select>
      </div>
      <div className="relative">
        <X className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
        <select
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900"
        >
          <option value="">Any bedrooms</option>
          {BEDROOM_OPTIONS.map((b) => (
            <option key={b} value={String(b)}>
              {b} {b === 1 ? "bedroom" : "bedrooms"}
            </option>
          ))}
        </select>
      </div>
      <div className="relative">
        <X className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
        <input
          type="number"
          placeholder="Min sft"
          value={sizeMin}
          onChange={(e) => setSizeMin(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900"
        />
      </div>
      <div className="relative">
        <X className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
        <input
          type="number"
          placeholder="Max sft"
          value={sizeMax}
          onChange={(e) => setSizeMax(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900"
        />
      </div>
      <div className="md:col-span-4 flex gap-2">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="flex-1 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-900 pl-4 pr-10 appearance-none"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <button
          onClick={onReset}
          className="px-5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-navy-900 text-sm font-medium disabled:opacity-50 disabled:pointer-events-none"
          disabled={!project && !bedrooms && !sizeMin && !sizeMax}
        >
          Reset filters
        </button>
      </div>
    </div>
  );
}
