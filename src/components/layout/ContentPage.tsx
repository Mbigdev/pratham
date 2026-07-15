import type { ReactNode } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

export type ContentSection = {
  heading: string;
  body: string;
  points?: string[];
};

export type ContentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: { label: string; href?: string }[];
  intro?: string;
  sections: ContentSection[];
  highlights?: { icon: string; title: string; text: string }[];
  cta?: { title: string; text: string; primary?: { label: string; href: string }; secondary?: { label: string; href: string } };
  children?: ReactNode;
};

/**
 * Reusable, well-structured template used by secondary routes so that every
 * navigation destination is a real, polished page rather than a blank stub.
 */
export function ContentPage({
  eyebrow,
  title,
  description,
  crumbs,
  intro,
  sections,
  highlights,
  cta,
  children,
}: ContentPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} crumbs={crumbs}>
        <Button href="/book-appointment" rightIcon={<Icon name="arrow-right" className="h-4 w-4" aria-hidden />}>
          Book an Appointment
        </Button>
        <Button href="/contact" variant="secondary">
          Talk to a coordinator
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-10">
            {intro ? (
              <Reveal>
                <p className="text-lg leading-relaxed text-ink/75">{intro}</p>
              </Reveal>
            ) : null}
            {sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 0.05}>
                <div>
                  <h2 className="text-2xl font-bold text-navy">{s.heading}</h2>
                  <p className="mt-3 leading-relaxed text-ink/75">{s.body}</p>
                  {s.points ? (
                    <ul className="mt-4 space-y-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-ink/75">
                          <Icon name="check-circle" className="mt-0.5 h-5 w-5 shrink-0 text-healing-teal" aria-hidden />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            ))}
            {children}
          </div>

          <aside className="space-y-6">
            {highlights ? (
              <div className="rounded-3xl border border-ink/8 bg-white p-6 shadow-soft">
                <h2 className="text-lg font-semibold text-navy">At a glance</h2>
                <ul className="mt-4 space-y-4">
                  {highlights.map((h) => (
                    <li key={h.title} className="flex gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-healing-teal/10 text-healing-teal">
                        <Icon name={h.icon} className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="font-semibold text-navy">{h.title}</p>
                        <p className="text-sm text-ink/65">{h.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="rounded-3xl bg-gradient-to-br from-clinical-navy to-healing-teal p-6 text-white shadow-soft">
              <p className="text-lg font-semibold">Need guidance?</p>
              <p className="mt-1 text-sm text-white/80">
                A care coordinator can help you find the right next step.
              </p>
              <Button href="/contact" variant="secondary" size="sm" className="mt-4">
                Contact us
              </Button>
              <p className="mt-4 flex items-center gap-2 text-sm text-white/85">
                <Icon name="phone" className="h-4 w-4" aria-hidden />
                Urgent help: +1 (555) 010-0911
              </p>
            </div>
          </aside>
        </div>
      </section>

      {cta ? (
        <section className="section pt-0">
          <div className="container-page">
            <div className="flex flex-col items-start gap-4 rounded-[28px] bg-pearl p-8 md:flex-row md:items-center md:justify-between md:p-12">
              <div>
                <h2 className="text-2xl font-bold text-navy">{cta.title}</h2>
                <p className="mt-2 text-ink/70">{cta.text}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {cta.primary ? <Button href={cta.primary.href}>{cta.primary.label}</Button> : null}
                {cta.secondary ? (
                  <Button href={cta.secondary.href} variant="secondary">
                    {cta.secondary.label}
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
