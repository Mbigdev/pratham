import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";
import { whyFeatures } from "@/lib/data";

export const metadata: Metadata = {
  title: "Why PRATHAM",
  description:
    "What sets PRATHAM Cancer Institute apart: personalized plans, multidisciplinary teams, advanced diagnostics, and supportive care.",
};

export default function WhyPrathamPage() {
  return (
    <ContentPage
      eyebrow="Why PRATHAM"
      title="Care built around you, not the other way around"
      description="From your first appointment to survivorship, PRATHAM coordinates expertise, technology, and support so you never navigate cancer alone."
      crumbs={[{ label: "Why PRATHAM" }]}
      intro="Cancer care is complex. Our job is to make it feel clear and coordinated — matching you with the right specialists, explaining each step, and surrounding you with support."
      sections={whyFeatures.map((f) => ({
        heading: f.title,
        body: f.description,
      }))}
      highlights={[
        { icon: "clipboard-list", title: "Personalized", text: "Plans shaped around you." },
        { icon: "users", title: "Multidisciplinary", text: "Tumor boards for complex cases." },
        { icon: "heart-handshake", title: "Supportive", text: "Care for the whole person." },
      ]}
      cta={{
        title: "Ready to take the next step?",
        text: "Book an appointment or request an expert second opinion.",
        primary: { label: "Book an Appointment", href: "/book-appointment" },
        secondary: { label: "Request a Second Opinion", href: "/second-opinion" },
      }}
    />
  );
}
