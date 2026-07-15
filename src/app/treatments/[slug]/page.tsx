import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { treatments } from "@/lib/data";
import { accentClasses } from "@/lib/utils";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const treatment = treatments.find((t) => t.slug === params.slug);
  if (!treatment) return { title: "Treatment not found" };
  return {
    title: treatment.name,
    description: `${treatment.description} Learn about ${treatment.name} at PRATHAM (fictional demonstration).`,
  };
}

const benefits = [
  { icon: "compass", title: "Personalized to you", text: "Care shaped around your diagnosis, biology, and goals." },
  { icon: "shield", title: "Safety first", text: "Rigorous protocols and monitoring at every step." },
  { icon: "users", title: "Team-based", text: "Coordinated across specialties through tumor boards." },
  { icon: "heart-handshake", title: "Supportive care", text: "Nutrition, counseling, and wellness alongside treatment." },
];

const steps = [
  "Consultation and review of your diagnosis and records",
  "Personalized planning with your multidisciplinary team",
  "Treatment delivered with coordinated support",
  "Follow-up, monitoring, and survivorship care",
];

export default function TreatmentDetailPage({ params }: { params: { slug: string } }) {
  const treatment = treatments.find((t) => t.slug === params.slug);
  if (!treatment) notFound();

  const accent = accentClasses(treatment.accent);
  const others = treatments.filter((t) => t.slug !== treatment.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Treatment"
        title={treatment.name}
        description={treatment.tagline}
        crumbs={[{ label: "Treatments", href: "/treatments" }, { label: treatment.name }]}
      >
        <Button href="/book-appointment" rightIcon={<Icon name="arrow-right" className="h-4 w-4" aria-hidden />}>
          Book an appointment
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div>
              <span className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${accent.softBg} ${accent.text}`}>
                <Icon name={treatment.icon} className="h-8 w-8" aria-hidden />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-navy">What it is</h2>
              <p className="mt-3 leading-relaxed text-ink/75">{treatment.description}</p>
              <p className="mt-3 leading-relaxed text-ink/75">
                At PRATHAM, {treatment.name.toLowerCase()} is delivered by experienced specialists who
                coordinate closely with the rest of your care team. We take time to explain your
                options in plain language so you can make informed decisions. This page is part of a
                fictional demonstration and does not constitute medical advice.
              </p>

              <h2 className="mt-10 text-2xl font-bold text-navy">What to expect</h2>
              <ol className="mt-5 space-y-4">
                {steps.map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clinical-navy text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-ink/75">{s}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="space-y-4">
              <div className="rounded-3xl border border-ink/8 bg-pearl p-6">
                <h3 className="font-semibold text-navy">Why patients choose PRATHAM</h3>
                <ul className="mt-4 space-y-4">
                  {benefits.map((b) => (
                    <li key={b.title} className="flex gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-healing-teal">
                        <Icon name={b.icon} className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-navy">{b.title}</p>
                        <p className="text-sm text-ink/65">{b.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-navy to-teal p-6 text-white">
                <h3 className="font-semibold">Have questions?</h3>
                <p className="mt-1 text-sm text-white/80">A coordinator can walk you through this treatment and next steps.</p>
                <Button href="/contact" variant="secondary" size="sm" className="mt-4">Contact us</Button>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section bg-pearl">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-navy">Explore other treatments</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((t) => {
              const a = accentClasses(t.accent);
              return (
                <Link
                  key={t.slug}
                  href={`/treatments/${t.slug}`}
                  className="group flex flex-col rounded-2xl border border-ink/8 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${a.softBg} ${a.text}`}>
                    <Icon name={t.icon} className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-3 font-semibold text-navy group-hover:text-teal">{t.name}</h3>
                  <p className="mt-1 text-sm text-ink/60">{t.tagline}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
