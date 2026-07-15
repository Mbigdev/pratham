import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { cancerTypes, treatments, doctors } from "@/lib/data";

export function generateStaticParams() {
  return cancerTypes.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cancer = cancerTypes.find((c) => c.slug === params.slug);
  if (!cancer) return { title: "Cancer type not found" };
  return {
    title: `${cancer.name} Care`,
    description: `${cancer.summary} Learn about the PRATHAM approach to ${cancer.name.toLowerCase()} (fictional demonstration).`,
  };
}

const approach = [
  { icon: "search-check", title: "Screening & early detection", text: "Risk assessment and screening pathways to catch concerns early." },
  { icon: "microscope", title: "Precise diagnosis", text: "Imaging, pathology, and molecular profiling to characterize your cancer." },
  { icon: "users", title: "Multidisciplinary planning", text: "A tumor board of specialists shapes your personalized plan together." },
  { icon: "heart-pulse", title: "Coordinated treatment", text: "Surgery, systemic therapy, and radiation coordinated in one place." },
  { icon: "sprout", title: "Survivorship & support", text: "Rehabilitation, wellness, and long-term follow-up for life after treatment." },
];

const faqs = [
  {
    q: "How soon can I be seen?",
    a: "In this demonstration, appointment timing is illustrative. In practice, a care coordinator would help arrange a timely visit based on your needs.",
  },
  {
    q: "Do you offer second opinions?",
    a: "Yes. You can request an expert second opinion so specialists can review your diagnosis and current plan.",
  },
  {
    q: "Will I have a dedicated care team?",
    a: "Our model pairs you with specialists focused on your specific cancer, supported by nursing, nutrition, and counseling.",
  },
];

export default function CancerTypeDetailPage({ params }: { params: { slug: string } }) {
  const cancer = cancerTypes.find((c) => c.slug === params.slug);
  if (!cancer) notFound();

  const relatedTreatments = treatments.slice(0, 4);
  const relatedDoctors = doctors.slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${cancer.category} Cancer`}
        title={`${cancer.name} Care`}
        description={cancer.summary}
        crumbs={[{ label: "Cancer Types", href: "/cancer-types" }, { label: cancer.name }]}
      >
        <Button href="/book-appointment" rightIcon={<Icon name="arrow-right" className="h-4 w-4" aria-hidden />}>
          Book an appointment
        </Button>
        <Button href="/second-opinion" variant="secondary">
          Get a second opinion
        </Button>
      </PageHero>

      {/* Overview */}
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="prose-clinical">
              <h2 className="text-2xl font-bold text-navy">Understanding {cancer.name.toLowerCase()}</h2>
              <p className="mt-4 leading-relaxed text-ink/75">
                Our {cancer.name.toLowerCase()} program brings together specialists across disciplines to
                deliver care that's precise, coordinated, and centered on you. From your first
                appointment, a care coordinator helps you navigate each step so you always know what
                comes next.
              </p>
              <p className="mt-4 leading-relaxed text-ink/75">
                Every plan is shaped by your diagnosis, biology, and personal goals, and reviewed by a
                multidisciplinary tumor board. This page is part of a fictional demonstration and does
                not provide medical advice.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="rounded-3xl border border-ink/8 bg-pearl p-6">
              <h3 className="font-semibold text-navy">When to seek care</h3>
              <p className="mt-2 text-sm text-ink/70">
                If you notice persistent or unexplained symptoms, talk with a healthcare professional.
                Early evaluation matters.
              </p>
              <div className="mt-4 rounded-2xl bg-white p-4 text-sm text-ink/75">
                <p className="flex items-center gap-2 font-semibold text-navy">
                  <Icon name="phone" className="h-4 w-4 text-healing-teal" aria-hidden />
                  Talk to a coordinator
                </p>
                <a href="tel:+15550102000" className="mt-1 block font-semibold text-healing-teal">
                  +1 (555) 010-2000
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="section bg-pearl">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-navy">Our approach to {cancer.name.toLowerCase()}</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {approach.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05} as="li">
                <div className="flex h-full gap-4 rounded-2xl border border-ink/8 bg-white p-5 shadow-soft">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-healing-teal/10 text-healing-teal">
                    <Icon name={step.icon} className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy">{step.title}</h3>
                    <p className="mt-1 text-sm text-ink/65">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Related treatments */}
      <section className="section">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-navy">Treatments we may use</h2>
            <Button href="/treatments" variant="ghost" size="sm" rightIcon={<Icon name="arrow-right" className="h-4 w-4" aria-hidden />}>
              All treatments
            </Button>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedTreatments.map((t) => (
              <Link
                key={t.slug}
                href={`/treatments/${t.slug}`}
                className="group rounded-2xl border border-ink/8 bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <Icon name={t.icon} className="h-7 w-7 text-healing-teal" aria-hidden />
                <h3 className="mt-3 font-semibold text-navy group-hover:text-teal">{t.name}</h3>
                <p className="mt-1 text-sm text-ink/60">{t.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related doctors */}
      <section className="section bg-pearl">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-navy">Specialists in this area</h2>
            <Button href="/find-a-doctor" variant="ghost" size="sm" rightIcon={<Icon name="arrow-right" className="h-4 w-4" aria-hidden />}>
              Find a doctor
            </Button>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedDoctors.map((d) => (
              <DoctorCard key={d.slug} doctor={d} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-navy">Common questions</h2>
          <div className="mt-6 divide-y divide-ink/10 rounded-3xl border border-ink/8 bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
                  {f.q}
                  <Icon name="chevron-down" className="h-5 w-5 shrink-0 text-healing-teal transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <p className="mt-3 text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
