import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Research & Innovation",
  description:
    "Explore clinical trials, research, and innovation at PRATHAM Cancer Institute. Fictional demonstration content.",
};

const focusAreas = [
  { icon: "flask", title: "Clinical trials", text: "Carefully reviewed studies that may open new options for eligible patients." },
  { icon: "file-text", title: "Research publications", text: "Our teams contribute to the shared body of oncology knowledge." },
  { icon: "sparkles", title: "Innovation center", text: "A dedicated space for advancing cancer care methods and technology." },
  { icon: "globe", title: "Global collaboration", text: "Partnerships that connect our specialists with international expertise." },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & Innovation"
        title="Advancing cancer care through discovery"
        description="Research is woven into everyday care at PRATHAM. All content below is fictional and for demonstration."
        crumbs={[{ label: "Discover PRATHAM" }, { label: "Research" }]}
      >
        <Button href="/contact" rightIcon={<Icon name="arrow-right" className="h-4 w-4" aria-hidden />}>
          Explore research
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          {focusAreas.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <article className="h-full rounded-3xl border border-ink/8 bg-white p-7 shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-healing-teal/10 text-healing-teal">
                  <Icon name={f.icon} className="h-6 w-6" aria-hidden />
                </span>
                <h2 className="mt-4 text-xl font-semibold text-navy">{f.title}</h2>
                <p className="mt-2 text-ink/70">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="rounded-[28px] bg-gradient-to-br from-clinical-navy to-healing-teal p-8 text-white md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold md:text-3xl">Interested in clinical trials?</h2>
              <p className="mt-3 text-white/85">
                Eligibility for research studies depends on many factors. A care coordinator can help
                you understand whether a trial may be an option and what participation involves.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact" variant="secondary">Talk to a coordinator</Button>
                <Button href="/book-appointment" variant="ghost" className="text-white hover:bg-white/10">
                  Book an appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
