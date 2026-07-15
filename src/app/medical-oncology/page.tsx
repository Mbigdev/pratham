import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";

export const metadata: Metadata = {
  title: "Medical Oncology",
  description:
    "Systemic cancer therapies including chemotherapy, targeted therapy, and immunotherapy at PRATHAM Cancer Institute (fictional).",
};

export default function MedicalOncologyPage() {
  return (
    <ContentPage
      eyebrow="Oncology Program"
      title="Medical Oncology"
      description="Systemic treatment planned and delivered by specialists who focus on your specific cancer."
      crumbs={[{ label: "Treatments", href: "/treatments" }, { label: "Medical Oncology" }]}
      intro="Our medical oncologists coordinate the systemic therapies that treat cancer throughout the body—chemotherapy, targeted therapy, hormone therapy, and immunotherapy—matched carefully to your diagnosis and goals."
      sections={[
        {
          heading: "A plan shaped around you",
          body: "Every treatment plan begins with a full understanding of your cancer's biology, your health, and what matters to you. We explain the options and expected timelines in plain language.",
          points: [
            "Genomics-informed therapy selection",
            "Coordinated infusion and oral therapy",
            "Proactive side-effect management",
          ],
        },
        {
          heading: "Comfort-focused infusion care",
          body: "Our infusion centers are designed for calm and comfort, with nursing teams who monitor your response and adjust supportive care as needed throughout treatment.",
        },
        {
          heading: "Supportive care alongside treatment",
          body: "Nutrition, symptom management, counseling, and family support walk alongside your medical treatment so your whole experience is cared for, not just your cancer.",
        },
      ]}
      highlights={[
        { icon: "dna", title: "Precision-guided", text: "Therapy matched to tumor biology." },
        { icon: "heart-pulse", title: "Whole-person care", text: "Support for body and mind." },
        { icon: "users", title: "Team approach", text: "Reviewed by tumor boards." },
      ]}
      cta={{
        title: "Talk with a medical oncologist",
        text: "Request a consultation or an expert second opinion.",
        primary: { label: "Book an Appointment", href: "/book-appointment" },
        secondary: { label: "Request a Second Opinion", href: "/second-opinion" },
      }}
    />
  );
}
