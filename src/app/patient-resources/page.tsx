import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";

export const metadata: Metadata = {
  title: "Patient Resources",
  description:
    "Guides and support to help you navigate diagnosis, treatment, and recovery at PRATHAM Cancer Institute (fictional).",
};

export default function PatientResourcesPage() {
  return (
    <ContentPage
      eyebrow="Patient Resources"
      title="Support for every step of your journey"
      description="Practical guides and support services to help you and your family navigate diagnosis, treatment, and life beyond."
      crumbs={[{ label: "Patient Resources" }]}
      intro="A cancer diagnosis brings many questions. These resources are designed to help you feel informed, prepared, and supported. All content here is part of a fictional demonstration."
      sections={[
        {
          heading: "Preparing for your visit",
          body: "Knowing what to bring and what to expect can ease anxiety. Our coordinators help you gather records, understand your schedule, and prepare questions.",
          points: ["What to bring to appointments", "Questions to ask your care team", "Understanding your treatment plan"],
        },
        {
          heading: "Support services",
          body: "Nutrition, counseling, financial guidance, and family support are woven into your care. You don't have to seek them out alone — your team connects you.",
          points: ["Nutrition and wellness", "Counseling and mental health", "Caregiver and family support"],
        },
        {
          heading: "Life during and after treatment",
          body: "From managing side effects to survivorship planning, we help you live as fully as possible throughout and beyond treatment.",
        },
      ]}
      highlights={[
        { icon: "clipboard-list", title: "Guides", text: "Prepare with confidence." },
        { icon: "heart-handshake", title: "Support", text: "Help for the whole family." },
        { icon: "sprout", title: "Survivorship", text: "Care beyond treatment." },
      ]}
      cta={{
        title: "Questions about resources?",
        text: "Our coordinators can point you to the right support.",
        primary: { label: "Contact us", href: "/contact" },
        secondary: { label: "Patient Stories", href: "/patient-stories" },
      }}
    />
  );
}
