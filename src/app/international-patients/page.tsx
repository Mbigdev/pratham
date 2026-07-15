import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { internationalServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "International Patients",
  description:
    "Coordinated support for international patients traveling to PRATHAM Cancer Institute — from remote review to travel, translation, and accommodation.",
};

const journey = [
  { step: "Reach out", text: "Share your diagnosis and questions with our international care team." },
  { step: "Remote review", text: "Securely send records for a pre-arrival specialist review." },
  { step: "Plan your visit", text: "We help coordinate travel, visas, translation, and accommodation." },
  { step: "Receive care", text: "A dedicated coordinator supports you throughout your treatment." },
  { step: "Continued care", text: "We help arrange follow-up and share records for care back home." },
];

export default function InternationalPatientsPage() {
  return (
    <>
      <PageHero
        eyebrow="International Patients"
        title="Care that travels with you"
        description="From your first inquiry to your journey home, a dedicated team helps coordinate every detail so you can focus on treatment."
        crumbs={[{ label: "International Patients" }]}
      >
        <Button href="/contact" rightIcon={<Icon name="arrow-right" className="h-4 w-4" aria-hidden />}>
          Talk to International Care
        </Button>
        <Button href="/second-opinion" variant="secondary">
          Request a remote review
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-navy">How we support you</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {internationalServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="flex h-full gap-4 rounded-2xl border border-ink/8 bg-white p-5 shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-healing-teal/10 text-healing-teal">
                    <Icon name={s.icon} className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy">{s.title}</h3>
                    <p className="mt-1 text-sm text-ink/65">{s.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-pearl">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-navy">Your journey, step by step</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-5">
            {journey.map((j, i) => (
              <Reveal key={j.step} delay={i * 0.06} as="li">
                <div className="flex h-full flex-col rounded-2xl border border-ink/8 bg-white p-5 shadow-soft">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clinical-navy text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-semibold text-navy">{j.step}</h3>
                  <p className="mt-1 text-sm text-ink/65">{j.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-clinical-navy to-healing-teal p-8 text-white md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold md:text-3xl">Let&apos;s plan your care together</h2>
              <p className="mt-3 text-white/80">
                Our international care coordinators speak your language and understand the details of
                traveling for treatment. Reach out to start the conversation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact" variant="secondary">Contact International Care</Button>
                <Button href="tel:+15550105000" variant="ghost" className="text-white hover:bg-white/10" leftIcon={<Icon name="phone" className="h-4 w-4" aria-hidden />}>
                  +1 (555) 010-5000
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
