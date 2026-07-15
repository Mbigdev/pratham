"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { Select } from "@/components/ui/Input";
import { specialtyOptions, cancerTypes, locations } from "@/lib/data";

type Tab = "doctor" | "cancer" | "appointment";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "doctor",      label: "Find a Doctor",  icon: "stethoscope" },
  { id: "cancer",      label: "Cancer Type",    icon: "ribbon"      },
  { id: "appointment", label: "Book a Visit",   icon: "calendar"    },
];

export function CareSearchPanel() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("doctor");
  const [specialty, setSpecialty] = useState("");
  const [docLocation, setDocLocation] = useState("");
  const [cancer, setCancer] = useState("");
  const [apptType, setApptType] = useState("");
  const [apptLocation, setApptLocation] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (tab === "doctor") {
      const params = new URLSearchParams();
      if (specialty) params.set("specialty", specialty);
      if (docLocation) params.set("location", docLocation);
      router.push(`/find-a-doctor${params.toString() ? `?${params}` : ""}`);
    } else if (tab === "cancer") {
      router.push(cancer ? `/cancer-types/${cancer}` : "/cancer-types");
    } else {
      const params = new URLSearchParams();
      if (apptType) params.set("type", apptType);
      if (apptLocation) params.set("location", apptLocation);
      router.push(`/book-appointment${params.toString() ? `?${params}` : ""}`);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl p-2"
      style={{
        /* glass panel — exact reference site values */
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(32px) saturate(180%)",
        WebkitBackdropFilter: "blur(32px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.90)",
        boxShadow:
          "0 24px 72px rgba(7,87,111,0.18), 0 8px 24px rgba(7,87,111,0.10), inset 0 1px 0 rgba(255,255,255,0.95)",
      }}
    >
      {/* Tab strip */}
      <div
        role="tablist"
        aria-label="Quick access to care"
        className="flex gap-1 rounded-2xl p-1"
        style={{ background: "rgba(221,232,238,0.60)" }}
      >
        {tabs.map((t) => {
          const selected = tab === t.id;
          return (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={selected}
              id={`tab-${t.id}`}
              aria-controls={`panel-${t.id}`}
              onClick={() => setTab(t.id)}
              className="relative flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-200"
              style={{ color: selected ? "#07576F" : "#536D7C" }}
            >
              {selected && (
                <motion.span
                  layoutId="care-tab-pill"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: "#F0F5F8",
                    boxShadow: "3px 3px 10px rgba(173,197,210,0.55), -2px -2px 8px rgba(255,255,255,0.90)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative flex items-center gap-1.5">
                <Icon
                  name={t.icon}
                  className="h-4 w-4"
                  style={{ color: selected ? "#EEAA25" : undefined }}
                  aria-hidden
                />
                <span className="hidden sm:inline">{t.label}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Form panels */}
      <form onSubmit={submit} className="p-3">
        {tab === "doctor" && (
          <div role="tabpanel" id="panel-doctor" aria-labelledby="tab-doctor"
            className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
            <label className="sr-only" htmlFor="hero-specialty">Specialty</label>
            <Select id="hero-specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
              <option value="">Any specialty</option>
              {specialtyOptions.map((s) => <option key={s} value={s}>{s}</option>)}
            </Select>
            <label className="sr-only" htmlFor="hero-doc-location">Location</label>
            <Select id="hero-doc-location" value={docLocation} onChange={(e) => setDocLocation(e.target.value)}>
              <option value="">Any location</option>
              {locations.map((l) => <option key={l.slug} value={l.slug}>{l.name}</option>)}
            </Select>
            <SubmitButton label="Search doctors" />
          </div>
        )}
        {tab === "cancer" && (
          <div role="tabpanel" id="panel-cancer" aria-labelledby="tab-cancer"
            className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="hero-cancer">Cancer type</label>
            <Select id="hero-cancer" value={cancer} onChange={(e) => setCancer(e.target.value)}>
              <option value="">Browse all cancer types</option>
              {cancerTypes.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
            </Select>
            <SubmitButton label="Explore care" />
          </div>
        )}
        {tab === "appointment" && (
          <div role="tabpanel" id="panel-appointment" aria-labelledby="tab-appointment"
            className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
            <label className="sr-only" htmlFor="hero-appt-type">Appointment type</label>
            <Select id="hero-appt-type" value={apptType} onChange={(e) => setApptType(e.target.value)}>
              <option value="">Visit type</option>
              <option value="new">New patient consultation</option>
              <option value="second-opinion">Second opinion</option>
              <option value="follow-up">Follow-up</option>
              <option value="tele">Teleconsultation</option>
            </Select>
            <label className="sr-only" htmlFor="hero-appt-location">Location</label>
            <Select id="hero-appt-location" value={apptLocation} onChange={(e) => setApptLocation(e.target.value)}>
              <option value="">Any location</option>
              {locations.map((l) => <option key={l.slug} value={l.slug}>{l.name}</option>)}
            </Select>
            <SubmitButton label="Start booking" />
          </div>
        )}
      </form>
    </motion.div>
  );
}

function SubmitButton({ label }: { label: string }) {
  return (
    <button type="submit" className="btn-brand btn-sm inline-flex min-h-[48px] gap-2">
      <Icon name="search" className="h-4 w-4" aria-hidden />
      {label}
    </button>
  );
}
