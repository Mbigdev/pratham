"use client";

import { useMemo, useState } from "react";
import { doctors, specialtyOptions, locations } from "@/lib/data";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { Input, Select } from "@/components/ui/Input";
import { FormField } from "@/components/ui/FormField";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

export function DoctorFinder() {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return doctors.filter((d) => {
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.specialty.toLowerCase().includes(q) ||
        d.focus.some((f) => f.toLowerCase().includes(q));
      const matchesSpecialty = !specialty || d.specialty === specialty;
      const matchesLocation = !location || d.location === location;
      return matchesQuery && matchesSpecialty && matchesLocation;
    });
  }, [query, specialty, location]);

  return (
    <div>
      <div className="rounded-3xl border border-ink/8 bg-white p-5 shadow-soft md:p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <FormField label="Search" htmlFor="doctor-search">
            <div className="relative">
              <Icon
                name="search"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40"
                aria-hidden
              />
              <Input
                id="doctor-search"
                type="search"
                placeholder="Name, specialty, or focus"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-11"
              />
            </div>
          </FormField>
          <FormField label="Specialty" htmlFor="doctor-specialty">
            <Select id="doctor-specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
              <option value="">All specialties</option>
              {specialtyOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </Select>
          </FormField>
          <FormField label="Location" htmlFor="doctor-location">
            <Select id="doctor-location" value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="">All locations</option>
              {locations.map((l) => (
                <option key={l.slug} value={l.name}>{l.name}</option>
              ))}
            </Select>
          </FormField>
        </div>
      </div>

      <p className="mt-6 text-sm font-medium text-ink/60" role="status" aria-live="polite">
        {results.length} {results.length === 1 ? "specialist" : "specialists"} found
      </p>

      {results.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.04}>
              <DoctorCard doctor={d} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-3xl border border-dashed border-ink/15 bg-pearl/60 p-10 text-center">
          <p className="font-semibold text-navy">No specialists match those filters.</p>
          <p className="mt-1 text-sm text-ink/60">Try broadening your search or clearing a filter.</p>
        </div>
      )}
    </div>
  );
}
