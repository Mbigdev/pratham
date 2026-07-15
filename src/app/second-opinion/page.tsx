import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SecondOpinionForm } from "@/components/forms/SecondOpinionForm";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Request a Second Opinion",
  description:
    "Confirm your diagnosis and treatment plan with an expert review from PRATHAM oncology specialists.",
};

const reassurance = [
  { icon: "shield", title: "Confidential by design", text: "Your information is treated with care and used only to coordinate your review." },
  { icon: "users", title: "Reviewed by specialists", text: "The right expert team examines your records and current plan." },
  { icon: "clock", title: "Timely response", text: "A coordinator would typically respond within two business days." },
];

export default function SecondOpinionPage() {
  return (
    <>
      <PageHero
        eyebrow="Expert Review"
        title="Request a second opinion"
        description="A second opinion can bring clarity and confidence. Share a few details and our team will guide the next step."
        crumbs={[{ label: "Second Opinion" }]}
      />
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="rounded-3xl border border-ink/8 bg-white p-6 shadow-soft md:p-8">
              <SecondOpinionForm />
            </div>
          </div>
          <aside className="space-y-4">
            {reassurance.map((r) => (
              <GlassCard key={r.title} className="p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-healing-teal/12 text-healing-teal">
                  <Icon name={r.icon} className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="mt-3 font-semibold text-navy">{r.title}</h2>
                <p className="mt-1 text-sm text-ink/70">{r.text}</p>
              </GlassCard>
            ))}
            <div className="rounded-2xl bg-clinical-navy p-5 text-white">
              <p className="flex items-center gap-2 font-semibold">
                <Icon name="phone" className="h-4 w-4 text-sunrise-gold" aria-hidden />
                Prefer to talk?
              </p>
              <p className="mt-1 text-sm text-white/80">
                Call a care coordinator at{" "}
                <a href="tel:+15550102000" className="font-semibold text-aqua underline-offset-2 hover:underline">
                  +1 (555) 010-2000
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
