"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { journeyStages } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CareJourney() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const stage = journeyStages[active];

  return (
    <section
      className="section relative overflow-hidden"
      aria-labelledby="journey-heading"
      style={{ background: "linear-gradient(160deg, #1e3d3d 0%, #2d5a5a 60%, #1a3535 100%)" }}
    >
      {/* Ambient effects */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 15% 20%, rgba(74,144,144,0.25) 0%, transparent 45%), radial-gradient(ellipse at 80% 80%, rgba(201,168,76,0.15) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="container-page relative">
        {/* Badge + Heading */}
        <div className="mb-2 flex justify-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide"
            style={{
              background: "rgba(201,168,76,0.18)",
              border: "1px solid rgba(201,168,76,0.40)",
              color: "#e8c96a",
            }}
          >
            <Icon name="map" className="h-3.5 w-3.5" aria-hidden />
            Your Care Journey
          </span>
        </div>
        <SectionHeading
          align="center"
          eyebrow=""
          title={<span id="journey-heading" className="text-white">A clear path, from first question to recovery</span>}
          description={
            <span className="text-white/70">
              We walk beside you through every stage. Select a step to see how our teams support you.
            </span>
          }
          className="[&_p:first-child]:text-gold"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Stepper */}
          <div
            role="tablist"
            aria-label="Care journey stages"
            aria-orientation="vertical"
            className="relative flex flex-col gap-1"
          >
            {/* connecting line */}
            <span
              className="absolute left-[27px] top-6 bottom-6 w-px"
              style={{ background: "rgba(255,255,255,0.12)" }}
              aria-hidden
            />
            {journeyStages.map((s, i) => {
              const selected = i === active;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={selected}
                  id={`journey-tab-${s.id}`}
                  aria-controls="journey-panel"
                  onClick={() => setActive(i)}
                  className={`group relative flex items-center gap-4 rounded-2xl p-3 text-left transition-all duration-200 ${
                    selected ? "" : "hover:bg-white/5"
                  }`}
                  style={selected ? {
                    background: "rgba(255,255,255,0.10)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(201,168,76,0.25)"
                  } : {}}
                >
                  <span
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300"
                    style={selected ? {
                      background: "linear-gradient(135deg, #c9a84c, #a8882e)",
                      borderColor: "#c9a84c",
                      color: "#fff",
                      boxShadow: "0 4px 16px rgba(201,168,76,0.45)"
                    } : {
                      borderColor: "rgba(255,255,255,0.25)",
                      background: "rgba(30,61,61,0.80)",
                      color: "rgba(255,255,255,0.60)"
                    }}
                  >
                    <Icon name={s.icon} className="h-6 w-6" aria-hidden />
                  </span>
                  <span>
                    <span
                      className="block text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "#c9a84c" }}
                    >
                      Step {i + 1}
                    </span>
                    <span className="block font-semibold text-white">{s.title}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div
            role="tabpanel"
            id="journey-panel"
            aria-labelledby={`journey-tab-${stage.id}`}
            className="rounded-3xl p-8"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)"
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.id}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <span
                  className="inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{
                    background: "rgba(201,168,76,0.15)",
                    color: "#e8c96a",
                    border: "1px solid rgba(201,168,76,0.30)"
                  }}
                >
                  <Icon name={stage.icon} className="h-8 w-8" aria-hidden />
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-white">{stage.title}</h3>
                <p className="mt-2 text-lg" style={{ color: "#e8c96a" }}>{stage.summary}</p>
                <p className="mt-4 leading-relaxed text-white/75">{stage.detail}</p>
              </motion.div>
            </AnimatePresence>

            <div
              className="mt-8 flex items-center justify-between border-t pt-5"
              style={{ borderTopColor: "rgba(255,255,255,0.10)" }}
            >
              <button
                onClick={() => setActive((a) => Math.max(0, a - 1))}
                disabled={active === 0}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-white disabled:opacity-30"
              >
                <Icon name="chevron-left" className="h-4 w-4" aria-hidden />
                Previous
              </button>
              <span className="text-sm text-white/40">
                {active + 1} / {journeyStages.length}
              </span>
              <button
                onClick={() => setActive((a) => Math.min(journeyStages.length - 1, a + 1))}
                disabled={active === journeyStages.length - 1}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-white disabled:opacity-30"
              >
                Next
                <Icon name="chevron-right" className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
