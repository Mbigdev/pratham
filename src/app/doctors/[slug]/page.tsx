import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { doctors } from "@/lib/data";
import { accentClasses } from "@/lib/utils";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const doctor = doctors.find((d) => d.slug === params.slug);
  if (!doctor) return { title: "Doctor not found" };
  return {
    title: doctor.name,
    description: `${doctor.name}, ${doctor.specialty} at PRATHAM Cancer Institute (fictional profile).`,
  };
}

export default function DoctorProfilePage({ params }: { params: { slug: string } }) {
  const doctor = doctors.find((d) => d.slug === params.slug);
  if (!doctor) notFound();

  const accent = accentClasses(doctor.accent);
  const related = doctors.filter((d) => d.slug !== doctor.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={doctor.specialty}
        title={doctor.name}
        description={doctor.bio}
        crumbs={[{ label: "Doctors", href: "/doctors" }, { label: doctor.name }]}
      >
        <Button href="/book-appointment" rightIcon={<Icon name="arrow-right" className="h-4 w-4" aria-hidden />}>
          Book with {doctor.name.split(" ")[0]}
        </Button>
        <Button href="/second-opinion" variant="secondary">
          Request a second opinion
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <div className="rounded-3xl border border-white/60 bg-white p-6 shadow-soft">
              <div
                className={`flex aspect-[4/5] w-full items-center justify-center rounded-2xl bg-gradient-to-br ${accent.gradient}`}
                role="img"
                aria-label={`Portrait placeholder for ${doctor.name}`}
              >
                <span className="text-6xl font-bold text-white/90">{doctor.initials}</span>
              </div>
              <dl className="mt-6 space-y-3 text-sm">
                <Row icon="award" label="Experience" value={doctor.experience} />
                <Row icon="graduation-cap" label="Credentials" value={doctor.credentials} />
                <Row icon="map-pin" label="Primary location" value={doctor.location} />
                <Row icon="languages" label="Languages" value={doctor.languages.join(", ")} />
              </dl>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <div>
                <h2 className="text-2xl font-bold text-navy">Clinical focus</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {doctor.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-pearl px-4 py-2 text-sm font-medium text-navy"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <h2 className="text-2xl font-bold text-navy">About</h2>
                <p className="mt-3 leading-relaxed text-ink/75">{doctor.bio}</p>
                <p className="mt-3 leading-relaxed text-ink/75">
                  As part of the PRATHAM multidisciplinary model, {doctor.name.split(" ")[0]} collaborates
                  with pathology, radiology, surgery, and supportive care teams so every plan reflects
                  many expert perspectives. This is a fictional profile created for demonstration.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-2xl bg-gradient-to-br from-navy to-teal p-6 text-white sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-semibold">Ready to start?</p>
                  <p className="text-sm text-white/80">Request a visit or an expert second opinion.</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 sm:mt-0">
                  <Button href="/book-appointment" variant="secondary" size="sm">Book appointment</Button>
                  <Button href="/second-opinion" variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    Second opinion
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-pearl">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-navy">Other specialists</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((d) => {
              const a = accentClasses(d.accent);
              return (
                <Link
                  key={d.slug}
                  href={`/doctors/${d.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/60 bg-white p-4 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${a.gradient} font-bold text-white`}>
                    {d.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-navy group-hover:text-teal">{d.name}</span>
                    <span className="block text-sm text-ink/60">{d.specialty}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon name={icon} className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden />
      <div>
        <dt className="text-xs font-semibold uppercase tracking-wide text-ink/50">{label}</dt>
        <dd className="text-navy">{value}</dd>
      </div>
    </div>
  );
}
