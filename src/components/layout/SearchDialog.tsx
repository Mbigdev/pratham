"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X, CornerDownLeft } from "lucide-react";
import { allRoutes } from "@/lib/navigation";
import { doctors, cancerTypes, treatments } from "@/lib/data";

type Result = { label: string; href: string; group: string };

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const index = useMemo<Result[]>(() => {
    return [
      ...allRoutes.map((r) => ({ label: r.label, href: r.href, group: "Pages" })),
      ...doctors.map((d) => ({
        label: `${d.name} — ${d.specialty}`,
        href: `/doctors/${d.slug}`,
        group: "Doctors",
      })),
      ...cancerTypes.map((c) => ({
        label: c.name,
        href: `/cancer-types/${c.slug}`,
        group: "Cancer Types",
      })),
      ...treatments.map((t) => ({
        label: t.name,
        href: `/treatments/${t.slug}`,
        group: "Treatments",
      })),
    ];
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index.slice(0, 8);
    return index.filter((r) => r.label.toLowerCase().includes(q)).slice(0, 12);
  }, [query, index]);

  useEffect(() => {
    if (open) {
      setQuery("");
      // focus after paint
      const t = setTimeout(() => inputRef.current?.focus(), 40);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Site search"
    >
      <button
        className="absolute inset-0 bg-deep-ink/40 backdrop-blur-sm"
        aria-label="Close search"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-floating"
      >
        <div className="flex items-center gap-3 border-b border-clinical-navy/10 px-5">
          <Search className="h-5 w-5 shrink-0 text-healing-teal" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search doctors, cancer types, treatments, pages…"
            className="w-full bg-transparent py-4 text-ink placeholder:text-ink/40 focus:outline-none"
            aria-label="Search the PRATHAM website"
          />
          <button
            onClick={onClose}
            className="rounded-full p-2 text-ink/50 transition-colors hover:bg-clinical-navy/5 hover:text-ink"
            aria-label="Close search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-4 py-8 text-center text-ink/50">
              No results for “{query}”. Try a specialty or cancer type.
            </li>
          )}
          {results.map((r) => (
            <li key={`${r.group}-${r.href}-${r.label}`}>
              <Link
                href={r.href}
                onClick={onClose}
                className="flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-ink transition-colors hover:bg-soft-pearl focus-visible:bg-soft-pearl"
              >
                <span className="truncate">{r.label}</span>
                <span className="flex items-center gap-2 text-xs uppercase tracking-wide text-ink/40">
                  {r.group}
                  <CornerDownLeft className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
