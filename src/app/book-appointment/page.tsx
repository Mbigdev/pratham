import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request an appointment with an PRATHAM Cancer Institute specialist. This is a demonstration request form and is not for emergencies.",
};

const nextSteps = [
  "A care coordinator reviews your request and confirms availability.",
  "We match you with the right specialist for your needs.",
  "You receive confirmation with visit details and what to bring.",
];

const bring = [
  "Photo ID and insurance information",
  "Referral or prior records, if available",
  "A list of current medications",
  "A companion for support, if you'd like",
];

export default function BookAppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Book an Appointment"
        title="Request a visit with our care team"
        description="Tell us a little about what you need. A care coordinator will follow up to confirm your appointment and answer any questions."
        crumbs={[{ label: "Book Appointment" }]}
      />

      <section className="section" aria-labelledby="appt-form-heading">
        <div className="container-page">
          <h2 id="appt-form-heading" className="sr-only">
            Appointment request form
          </h2>

          <div
            role="note"
            className="mb-8 flex items-start gap-3 rounded-2xl border border-gentle-coral/30 bg-gentle-coral/8 p-4 text-sm text-ink/80"
          >
            <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-gentle-coral" aria-hidden />
            <p>
              <strong className="font-semibold text-navy">This form is for appointment requests and is not for emergencies.</strong>{" "}
              If you are experiencing a medical emergency, call your local emergency number
              immediately. For urgent, same-day guidance, call our care line at{" "}
              <a href="tel:+15550100911" className="font-semibold text-healing-teal underline">
                +1 (555) 010-0911
              </a>
              .
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
            <div className="rounded-3xl border border-ink/8 bg-white/70 p-6 shadow-soft backdrop-blur-sm md:p-8">
              <AppointmentForm />
            </div>

            <aside className="space-y-6" aria-label="What to expect">
              <div className="rounded-3xl bg-pearl p-6">
                <h3 className="flex items-center gap-2 font-semibold text-navy">
                  <Icon name="clipboard-list" className="h-5 w-5 text-healing-teal" aria-hidden />
                  What happens next
                </h3>
                <ol className="mt-3 space-y-3">
                  {nextSteps.map((s, i) => (
                    <li key={i} className="flex gap-3 text-sm text-ink/75">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-healing-teal/12 text-xs font-bold text-healing-teal">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-3xl bg-pearl p-6">
                <h3 className="flex items-center gap-2 font-semibold text-navy">
                  <Icon name="file-check" className="h-5 w-5 text-healing-teal" aria-hidden />
                  What to bring
                </h3>
                <ul className="mt-3 space-y-2">
                  {bring.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-ink/75">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-healing-teal" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-navy to-teal p-6 text-white">
                <h3 className="font-semibold">Prefer to talk to someone?</h3>
                <p className="mt-2 text-sm text-white/80">
                  Our care coordinators are here to help you find the right path.
                </p>
                <a
                  href="tel:+15550102000"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy"
                >
                  <Icon name="phone" className="h-4 w-4" aria-hidden />
                  +1 (555) 010-2000
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
