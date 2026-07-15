import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Urgent Care Guidance",
  description:
    "How to reach PRATHAM for urgent, non-emergency cancer care concerns. For emergencies, call your local emergency number.",
};

const symptoms = [
  "Fever of 100.4°F (38°C) or higher during treatment",
  "Uncontrolled nausea, vomiting, or diarrhea",
  "New or worsening pain that isn't relieved by your plan",
  "Unusual bleeding or bruising",
  "Shortness of breath or chest discomfort",
  "Signs of infection near a port or catheter",
];

export default function UrgentCarePage() {
  return (
    <>
      <PageHero
        eyebrow="Urgent Care"
        title="Urgent help, when you need it"
        description="Guidance for urgent but non-emergency concerns during cancer care. This is a fictional demonstration and not a substitute for real medical care."
        crumbs={[{ label: "Patients & Families" }, { label: "Urgent Care" }]}
      />

      {/* Emergency banner */}
      <section className="pt-8">
        <div className="container-page">
          <div
            role="alert"
            className="flex flex-col gap-3 rounded-3xl border-2 border-gentle-coral/40 bg-gentle-coral/10 p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-3">
              <Icon name="phone" className="mt-0.5 h-6 w-6 shrink-0 text-[#d76a55]" aria-hidden />
              <div>
                <p className="font-bold text-navy">If this is a life-threatening emergency, call 911 now.</p>
                <p className="text-sm text-ink/70">
                  Signs include difficulty breathing, chest pain, severe bleeding, fainting, or sudden weakness.
                </p>
              </div>
            </div>
            <a
              href="tel:911"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-gentle-coral px-6 font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Icon name="phone" className="h-4 w-4" aria-hidden />
              Call 911
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8">
            <Reveal>
              <div>
                <h2 className="text-2xl font-bold text-navy">When to call our urgent line</h2>
                <p className="mt-3 leading-relaxed text-ink/75">
                  If you're an PRATHAM patient experiencing concerning symptoms that aren't an
                  emergency, our 24/7 care line connects you with an oncology nurse who can advise on
                  next steps. Consider calling if you notice:
                </p>
                <ul className="mt-4 space-y-2">
                  {symptoms.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-ink/75">
                      <Icon name="check-circle" className="mt-0.5 h-5 w-5 shrink-0 text-healing-teal" aria-hidden />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl bg-pearl p-6">
                <h2 className="text-xl font-bold text-navy">What to have ready</h2>
                <p className="mt-2 text-ink/70">
                  Having a few details on hand helps our team advise you quickly: your treatment
                  type, current medications, recent symptoms and when they started, and your
                  temperature if you have a fever.
                </p>
              </div>
            </Reveal>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-clinical-navy to-healing-teal p-6 text-white shadow-soft">
              <p className="text-sm font-medium uppercase tracking-wide text-white/70">24/7 Care Line</p>
              <a href="tel:+15550100911" className="mt-2 block text-2xl font-bold tabular-nums">
                +1 (555) 010-0911
              </a>
              <p className="mt-2 text-sm text-white/80">
                Staffed around the clock by oncology nurses. For PRATHAM patients and families.
              </p>
            </div>

            <div className="rounded-3xl border border-ink/8 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-navy">Other ways to reach us</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink/75">
                <li className="flex items-center gap-3">
                  <Icon name="calendar" className="h-5 w-5 text-healing-teal" aria-hidden />
                  <Link href="/book-appointment" className="font-medium text-navy hover:text-teal">
                    Book a routine appointment
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="map-pin" className="h-5 w-5 text-healing-teal" aria-hidden />
                  <Link href="/locations" className="font-medium text-navy hover:text-teal">
                    Find your nearest campus
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="heart-handshake" className="h-5 w-5 text-healing-teal" aria-hidden />
                  <Link href="/contact" className="font-medium text-navy hover:text-teal">
                    Talk to a care coordinator
                  </Link>
                </li>
              </ul>
            </div>

            <p className="rounded-2xl bg-pearl p-4 text-xs text-ink/60">
              This page is part of a fictional demonstration. Phone numbers are placeholders and are
              not monitored. Always contact your real care provider or local emergency services.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
