import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";

export const metadata: Metadata = {
  title: "Robotic Surgery",
  description:
    "Minimally invasive, robotic-assisted cancer surgery supporting smaller incisions and faster recovery (fictional).",
};

export default function RoboticSurgeryPage() {
  return (
    <ContentPage
      eyebrow="Advanced Therapy"
      title="Robotic Cancer Surgery"
      description="Minimally invasive precision that can support smaller incisions and faster recovery."
      crumbs={[{ label: "Treatments", href: "/treatments" }, { label: "Robotic Surgery" }]}
      intro="Robotic-assisted surgery gives our surgeons enhanced precision, visualization, and control. For many patients, this can mean smaller incisions, less pain, and a quicker return to daily life."
      sections={[
        {
          heading: "Precision and control",
          body: "The surgeon directs robotic instruments that translate hand movements into fine, steady motions, enabling delicate work in complex areas.",
          points: ["High-definition 3D visualization", "Tremor-filtered movements", "Access to hard-to-reach areas"],
        },
        {
          heading: "Benefits for recovery",
          body: "Smaller incisions may reduce blood loss, scarring, and hospital stays, though every patient and procedure is different.",
        },
        {
          heading: "Right for the right cases",
          body: "Our surgical team evaluates whether a robotic approach is appropriate for you, always prioritizing the safest, most effective option.",
        },
      ]}
      highlights={[
        { icon: "bot", title: "Robotic precision", text: "Fine, steady control." },
        { icon: "sprout", title: "Faster recovery", text: "Smaller incisions." },
        { icon: "shield", title: "Safety-first", text: "Case-by-case evaluation." },
      ]}
      cta={{
        title: "Ask about robotic surgery",
        text: "Find out whether a minimally invasive approach fits your care.",
        primary: { label: "Book an Appointment", href: "/book-appointment" },
        secondary: { label: "Surgical Oncology", href: "/surgical-oncology" },
      }}
    />
  );
}
