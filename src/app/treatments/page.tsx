import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { treatments } from "@/lib/data";
import { accentClasses } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Treatments & Technologies",
  description:
    "Explore advanced cancer treatments and technologies at PRATHAM — precision medicine, immunotherapy, radiation, robotic surgery, diagnostics, and clinical trials.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments & Technologies"
        title="Advanced therapies, delivered with care"
        description="From genomics-guided precision medicine to minimally invasive robotic surgery, our teams pair leading technology with a deeply human approach."
        crumbs={[{ label: "Treatments" }]}
      >
        <Button href="/book-appointment" rightIcon={<Icon name="arrow-right" className="h-4 w-4" aria-hidden />}>
          Book an appointment
        </Button>
        <Button href="/second-opinion" variant="secondary">
          Request a second opinion
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t, i) => {
              const accent = accentClasses(t.accent);
              return (
                <Reveal key={t.slug} delay={i * 0.05} className="h-full">
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-ink/8 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elevated"
                  >
                    <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.softBg} ${accent.text}`}>
                      <Icon name={t.icon} className="h-7 w-7" aria-hidden />
                    </span>
                    <h2 className="mt-5 text-xl font-semibold text-navy group-hover:text-teal">{t.name}</h2>
                    <p className={`mt-1 text-sm font-medium ${accent.text}`}>{t.tagline}</p>
                    <p className="mt-3 flex-1 text-ink/70">{t.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-healing-teal">
                      Explore treatment
                      <Icon name="arrow-right" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
