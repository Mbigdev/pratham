import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";

export const metadata: Metadata = {
  title: "Radiation Oncology",
  description:
    "Image-guided, high-precision radiation therapy designed to treat tumors while protecting healthy tissue (fictional).",
};

export default function RadiationOncologyPage() {
  return (
    <ContentPage
      eyebrow="Oncology Program"
      title="Radiation Oncology"
      description="Targeted energy delivered with precision, designed to protect the healthy tissue around your tumor."
      crumbs={[{ label: "Treatments", href: "/treatments" }, { label: "Radiation Oncology" }]}
      intro="Our radiation oncology team uses advanced imaging and planning to shape radiation precisely to your tumor, sparing surrounding healthy tissue and supporting your comfort throughout treatment."
      sections={[
        {
          heading: "Precision planning",
          body: "Detailed imaging and computer-assisted planning let us target tumors with millimeter accuracy, adapting as your body and tumor change over the course of treatment.",
          points: ["Image-guided delivery", "Stereotactic techniques", "Adaptive planning"],
        },
        {
          heading: "Comfort at every session",
          body: "Radiation sessions are quick and painless. Our therapists guide you through each visit and coordinate closely with your wider care team.",
        },
        {
          heading: "Coordinated with your full plan",
          body: "Radiation is one part of a coordinated strategy. We work alongside medical and surgical oncology so your treatments fit together seamlessly.",
        },
      ]}
      highlights={[
        { icon: "radiation", title: "High precision", text: "Millimeter-level targeting." },
        { icon: "shield", title: "Tissue-sparing", text: "Protecting what's healthy." },
        { icon: "clock", title: "Efficient", text: "Short, painless sessions." },
      ]}
      cta={{
        title: "Learn if radiation is right for you",
        text: "Speak with a radiation oncologist about your options.",
        primary: { label: "Book an Appointment", href: "/book-appointment" },
        secondary: { label: "Request a Second Opinion", href: "/second-opinion" },
      }}
    />
  );
}
