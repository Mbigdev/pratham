import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { locations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach an PRATHAM care coordinator. Contact details are fictional and provided for demonstration only.",
};

const channels = [
  { icon: "phone", label: "Care coordinator line", value: "+1 (555) 010-2000", note: "Mon–Fri, 7am–8pm" },
  { icon: "phone", label: "Urgent help", value: "+1 (555) 010-0911", note: "For guidance, not emergencies — call 911 in an emergency" },
  { icon: "mail", label: "Email", value: "care@pratham.example", note: "We reply within one business day" },
  { icon: "globe", label: "International care", value: "+1 (555) 010-5000", note: "Dedicated coordinators for travel" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're here to help you take the next step"
        description="Whether you're ready to book or just have a question, a care coordinator can guide you. This is a fictional demonstration; contact details are placeholders."
        crumbs={[{ label: "Discover PRATHAM" }, { label: "Contact" }]}
      >
        <Button href="/book-appointment" rightIcon={<Icon name="arrow-right" className="h-4 w-4" aria-hidden />}>
          Book an Appointment
        </Button>
        <Button href="/second-opinion" variant="secondary">
          Request a Second Opinion
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">Ways to reach us</h2>
            <ul className="mt-6 space-y-4">
              {channels.map((c, i) => (
                <Reveal as="li" key={c.label} delay={i * 0.05}>
                  <div className="flex items-start gap-4 rounded-2xl border border-ink/8 bg-white p-5 shadow-soft">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-healing-teal/10 text-healing-teal">
                      <Icon name={c.icon} className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">{c.label}</p>
                      <p className="text-lg font-semibold text-navy">{c.value}</p>
                      <p className="text-sm text-ink/60">{c.note}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy">Our campuses</h2>
            <ul className="mt-6 space-y-4">
              {locations.map((l, i) => (
                <Reveal as="li" key={l.slug} delay={i * 0.05}>
                  <div className="rounded-2xl border border-ink/8 bg-white p-5 shadow-soft">
                    <p className="font-semibold text-navy">{l.name}</p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-ink/65">
                      <Icon name="map-pin" className="h-4 w-4 text-healing-teal" aria-hidden />
                      {l.address}, {l.city}
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-ink/65">
                      <Icon name="phone" className="h-4 w-4 text-healing-teal" aria-hidden />
                      {l.phone}
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-ink/65">
                      <Icon name="clock" className="h-4 w-4 text-healing-teal" aria-hidden />
                      {l.hours}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="rounded-[28px] bg-clinical-navy p-8 text-white md:p-12">
            <p className="flex items-center gap-2 text-sm font-semibold text-sunrise-gold">
              <Icon name="phone" className="h-4 w-4" aria-hidden />
              In a medical emergency
            </p>
            <p className="mt-2 max-w-2xl text-lg text-white/85">
              If you are experiencing a medical emergency, call your local emergency number
              (911 in the US) or go to the nearest emergency department. This website is not
              monitored for emergencies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
