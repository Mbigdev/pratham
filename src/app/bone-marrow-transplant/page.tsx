import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";

export const metadata: Metadata = {
  title: "Bone Marrow Transplant",
  description:
    "Bone marrow and stem cell transplant program with coordinated cellular therapy and long-term support (fictional).",
};

export default function BoneMarrowTransplantPage() {
  return (
    <ContentPage
      eyebrow="Advanced Therapy"
      title="Bone Marrow Transplant"
      description="Cellular therapy and transplant care for blood cancers, delivered by a dedicated team."
      crumbs={[{ label: "Treatments", href: "/treatments" }, { label: "Bone Marrow Transplant" }]}
      intro="Our transplant program supports patients with blood cancers and related conditions through every phase — evaluation, conditioning, transplant, and long-term recovery."
      sections={[
        {
          heading: "Autologous and allogeneic transplant",
          body: "Depending on your diagnosis, transplant may use your own cells or those of a matched donor. Your team explains which approach fits your situation.",
          points: ["Comprehensive donor matching support", "Dedicated transplant unit", "Infection-prevention protocols"],
        },
        {
          heading: "Wraparound support",
          body: "Transplant is a journey. Nutrition, counseling, and caregiver support walk alongside your medical care from start to recovery.",
        },
        {
          heading: "Long-term follow-up",
          body: "Our survivorship team monitors your recovery and long-term health well after transplant, coordinating with your wider care team.",
        },
      ]}
      highlights={[
        { icon: "droplet", title: "Cellular therapy", text: "Blood cancer focus." },
        { icon: "shield", title: "Protected care", text: "Dedicated unit." },
        { icon: "heart-handshake", title: "Full support", text: "Patient & caregiver." },
      ]}
      cta={{
        title: "Learn about transplant care",
        text: "Speak with our team about evaluation and next steps.",
        primary: { label: "Book an Appointment", href: "/book-appointment" },
        secondary: { label: "Request a Second Opinion", href: "/second-opinion" },
      }}
    />
  );
}
