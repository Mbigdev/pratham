"use client";

import { researchCards } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

const iconFor: Record<string, string> = {
  Trials: "flask",
  Publications: "file-text",
  Innovation: "sparkles",
  Global: "globe",
};

export function ResearchSection() {
  return (
    <section className="section bg-pearl" aria-labelledby="research-heading">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="research-heading"
            eyebrow="Research & innovation"
            title="Advancing what's possible in cancer care"
            description="Our teams contribute to research that helps expand options for people facing cancer."
            className="max-w-2xl"
          />
          <Button href="/research" variant="secondary" className="shrink-0" rightIcon={<Icon name="arrow-right" className="h-4 w-4" aria-hidden />}>
            Explore research
          </Button>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {researchCards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 0.06}
              className="group flex h-full flex-col rounded-3xl border border-ink/8 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-healing-teal/10 text-healing-teal">
                <Icon name={iconFor[card.tag] ?? "sparkles"} className="h-5 w-5" aria-hidden />
              </span>
              <span className="mt-4 inline-block w-fit rounded-full bg-pearl px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-teal">
                {card.tag}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-navy">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{card.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
