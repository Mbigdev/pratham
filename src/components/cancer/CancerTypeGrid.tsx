"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cancerTypes, type CancerType } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { accentClasses } from "@/lib/utils";

const categories = ["All", "Common", "Blood", "Specialized", "Pediatric"] as const;

const iconAccent: Record<string, string> = {
  Common: "teal",
  Blood: "coral",
  Specialized: "violet",
  Pediatric: "gold",
};

export function CancerTypeGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cancerTypes.filter((c) => {
      const matchesCat = category === "All" || c.category === category;
      const matchesQuery =
        !q || c.name.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Icon name="search" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" aria-hidden />
          <label htmlFor="cancer-search" className="sr-only">Search cancer types</label>
          <input
            id="cancer-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search cancer types…"
            className="min-h-[48px] w-full rounded-full border border-clinical-navy/15 bg-white pl-12 pr-4 text-ink placeholder:text-ink/40 shadow-soft focus-visible:border-healing-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua/50"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={`min-h-[40px] rounded-full px-4 text-sm font-medium transition-colors ${
                category === c
                  ? "bg-clinical-navy text-white"
                  : "bg-white text-ink/70 hover:bg-pearl"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-ink/55" role="status" aria-live="polite">
        Showing {filtered.length} of {cancerTypes.length} cancer types
      </p>

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-2xl bg-pearl p-8 text-center text-ink/60">
          No cancer types match your search. Try a different term.
        </p>
      ) : (
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c: CancerType) => {
            const accent = accentClasses(iconAccent[c.category] ?? "teal");
            return (
              <li key={c.slug}>
                <Link
                  href={`/cancer-types/${c.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-clinical-navy/8 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
                >
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent.softBg} ${accent.text}`}>
                    <Icon name={c.icon} className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-navy group-hover:text-teal">{c.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{c.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-healing-teal">
                    Learn more
                    <Icon name="arrow-right" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
