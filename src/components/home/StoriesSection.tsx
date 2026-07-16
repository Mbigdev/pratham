"use client";

import { useState } from "react";
import { stories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

export function StoriesSection() {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <section
      className="section relative overflow-hidden"
      aria-labelledby="stories-heading"
      style={{ background: "var(--color-bg-card)" }}
    >
      {/* Orbs */}
      <div
        className="pointer-events-none absolute -top-10 left-1/3 h-64 w-64 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.50) 0%, transparent 70%)", filter: "blur(55px)" }}
        aria-hidden
      />

      <div className="container-page relative">
        <SectionHeading
          id="stories-heading"
          eyebrow="Patient stories"
          title="Voices from our community"
          description="Real support looks different for everyone. These reflections are shared with permission."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Featured video story card */}
          <Reveal>
            <div
              className="group relative overflow-hidden rounded-3xl text-white"
              style={{
                background: "linear-gradient(135deg, #07576F 0%, #0A80A8 60%, #EEAA25 100%)",
                boxShadow: "0 20px 60px rgba(7,87,111,0.30), 0 8px 20px rgba(7,87,111,0.15)"
              }}
            >
              {/* Inner glow */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.20) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(10,128,168,0.20) 0%, transparent 50%)"
                }}
                aria-hidden
              />
              {/* Gold top border */}
              <div
                className="absolute top-0 inset-x-0 h-0.5"
                style={{ background: "linear-gradient(90deg, transparent, rgba(238,170,37,0.70), transparent)" }}
                aria-hidden
              />

              <div className="relative flex min-h-[360px] flex-col justify-between p-8">
                <div className="flex items-center gap-2 text-sm font-medium text-white/70">
                  <Icon name="video" className="h-4 w-4" style={{ color: "#EEAA25" }} aria-hidden />
                  Patient story · 3 min
                </div>

                <div className="flex flex-col items-start gap-4 w-full mt-4">
                  {/* ── Curved Video Frame for Patient Story ── */}
                  <div
                    className="w-full overflow-hidden rounded-2xl bg-black/40"
                    style={{
                      border: "2px solid rgba(255,255,255,0.25)",
                      boxShadow: "0 12px 36px rgba(0,0,0,0.30)"
                    }}
                  >
                    <video
                      className="w-full aspect-video object-cover"
                      controls
                      preload="metadata"
                      poster="/media/hero-poster.svg"
                    >
                      <source src="https://tpefiebetmhz8iwm.public.blob.vercel-storage.com/pratham.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white">A coordinated path through breast cancer care</h3>
                    <p className="mt-2 max-w-md text-white/75">
                      Follow one family&apos;s experience navigating diagnosis, treatment, and recovery with a dedicated care team.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 w-full justify-between">
                    <button
                      type="button"
                      onClick={() => setShowTranscript((s) => !s)}
                      aria-expanded={showTranscript}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-white/15"
                      style={{ border: "1px solid rgba(255,255,255,0.35)", color: "#fff" }}
                    >
                      <Icon name="file-text" className="h-4 w-4" aria-hidden />
                      {showTranscript ? "Hide transcript" : "Read transcript"}
                    </button>
                    <span className="inline-flex items-center gap-1.5 text-sm text-white/65">
                      <Icon name="check-circle" className="h-4 w-4" style={{ color: "#EEAA25" }} aria-hidden />
                      Captions available
                    </span>
                  </div>
                </div>
              </div>
              {showTranscript && (
                <div
                  className="relative border-t p-6 text-sm leading-relaxed text-white/80"
                  style={{ borderTopColor: "rgba(255,255,255,0.12)", background: "rgba(0,0,0,0.25)" }}
                >
                  <p className="font-semibold text-white">Transcript (excerpt)</p>
                  <p className="mt-2">
                    &ldquo;From the first appointment, our coordinator explained each step. We always knew who to call and what came next. That structure made an overwhelming time feel manageable.&rdquo;
                  </p>
                </div>
              )}
            </div>
          </Reveal>

          {/* Quote cards */}
          <div className="grid gap-5">
            {stories.map((story, i) => (
              <Reveal
                key={i}
                delay={i * 0.08}
                className="service-card flex flex-col justify-between"
              >
                <div>
                  <Icon name="quote" className="h-8 w-8" style={{ color: "#EEAA25" }} aria-hidden />
                  <p className="mt-3 text-lg leading-relaxed" style={{ color: "#07576F" }}>{story.quote}</p>
                </div>
                <div
                  className="mt-5 border-t pt-4"
                  style={{ borderTopColor: "rgba(10,128,168,0.12)" }}
                >
                  <p className="text-sm font-bold" style={{ color: "#07576F" }}>{story.name}</p>
                  <p className="text-sm" style={{ color: "#536D7C" }}>{story.context}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-sm" style={{ color: "#536D7C" }}>
          Individual experiences vary. Stories are illustrative and shared with permission. Not a guarantee of any outcome.
        </p>
      </div>
    </section>
  );
}
