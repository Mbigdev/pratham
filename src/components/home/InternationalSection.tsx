"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

const services = [
  { icon: "plane", title: "Visa & travel guidance", desc: "Support with documentation and travel planning." },
  { icon: "file-search", title: "Remote record review", desc: "Share records securely for pre-arrival review." },
  { icon: "languages", title: "Translation assistance", desc: "Interpretation support throughout your care." },
  { icon: "bed", title: "Accommodation coordination", desc: "Help arranging comfortable nearby stays." },
  { icon: "user-check", title: "Dedicated coordinator", desc: "One point of contact for your whole journey." },
  { icon: "video", title: "Teleconsultation", desc: "Connect with specialists before you travel." },
];

export function InternationalSection() {
  return (
    <section className="section" aria-labelledby="international-heading">
      <div className="container-page">
        <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-clinical-navy via-clinical-navy to-healing-teal text-white shadow-elevated">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                id="international-heading"
                eyebrow="International patients"
                eyebrowTone="light"
                title="Care that travels with you"
                description="From your first inquiry to your journey home, a dedicated team helps coordinate every detail so you can focus on treatment."
                tone="light"
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/international-patients" variant="secondary">
                  Talk to International Care
                </Button>
                <Button
                  href="/second-opinion"
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                  rightIcon={<Icon name="arrow-right" className="h-4 w-4" aria-hidden />}
                >
                  Request remote review
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((s, i) => (
                <Reveal
                  key={s.title}
                  delay={i * 0.05}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-aqua">
                    <Icon name={s.icon} className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{s.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
