import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";

export const metadata: Metadata = {
  title: "Immunotherapy",
  description:
    "Advanced immunotherapy that helps the body's own defenses recognize and fight cancer (fictional demonstration).",
};

export default function ImmunotherapyPage() {
  return (
    <ContentPage
      eyebrow="Advanced Therapy"
      title="Immunotherapy"
      description="Enlisting your body's own immune system in the fight against cancer."
      crumbs={[{ label: "Treatments", href: "/treatments" }, { label: "Immunotherapy" }]}
      intro="Immunotherapy represents one of the most significant advances in modern oncology. These therapies help your immune system recognize and respond to cancer cells."
      sections={[
        {
          heading: "How immunotherapy works",
          body: "Rather than targeting the tumor directly, immunotherapy supports your body's natural defenses so they can identify and act on cancer cells more effectively.",
          points: ["Checkpoint-based approaches", "Cellular therapies", "Combination strategies"],
        },
        {
          heading: "Personalized to your biology",
          body: "Not every cancer responds the same way. Our team uses molecular diagnostics to help determine whether immunotherapy may be appropriate for your specific situation.",
        },
        {
          heading: "Coordinated, monitored care",
          body: "Immunotherapy is delivered with careful monitoring and wraparound support, so your team can respond quickly and keep you comfortable.",
        },
      ]}
      highlights={[
        { icon: "shield-plus", title: "Immune-based", text: "Works with your defenses." },
        { icon: "dna", title: "Biology-guided", text: "Matched via diagnostics." },
        { icon: "heart-pulse", title: "Closely monitored", text: "Careful, coordinated care." },
      ]}
      cta={{
        title: "Explore your options",
        text: "Ask whether immunotherapy could be part of your plan.",
        primary: { label: "Book an Appointment", href: "/book-appointment" },
        secondary: { label: "Request a Second Opinion", href: "/second-opinion" },
      }}
    />
  );
}
