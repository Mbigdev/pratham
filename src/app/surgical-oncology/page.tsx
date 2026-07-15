import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";

export const metadata: Metadata = {
  title: "Surgical Oncology",
  description:
    "Precise, function-preserving cancer surgery including minimally invasive and robotic-assisted approaches (fictional).",
};

export default function SurgicalOncologyPage() {
  return (
    <ContentPage
      eyebrow="Oncology Program"
      title="Surgical Oncology"
      description="Precise, function-preserving surgery from teams focused on the best possible recovery."
      crumbs={[{ label: "Treatments", href: "/treatments" }, { label: "Surgical Oncology" }]}
      intro="Our surgical oncologists specialize in removing tumors with precision while preserving function and quality of life. Where appropriate, minimally invasive and robotic-assisted techniques support smaller incisions and faster recovery."
      sections={[
        {
          heading: "Minimally invasive options",
          body: "Many procedures can be performed through small incisions, which may reduce pain, scarring, and recovery time compared with traditional open surgery.",
          points: ["Robotic-assisted surgery", "Laparoscopic techniques", "Function preservation"],
        },
        {
          heading: "Planned as a team",
          body: "Complex cases are reviewed by our multidisciplinary tumor boards so surgery is timed and coordinated with any other treatments you need.",
        },
        {
          heading: "Recovery support",
          body: "From pre-surgical preparation to rehabilitation, our team supports you through every stage of recovery.",
        },
      ]}
      highlights={[
        { icon: "bot", title: "Robotic surgery", text: "Minimally invasive precision." },
        { icon: "users", title: "Team-planned", text: "Reviewed by tumor boards." },
        { icon: "sprout", title: "Recovery-focused", text: "Support through healing." },
      ]}
      cta={{
        title: "Discuss your surgical options",
        text: "Meet with a surgical oncologist to understand your path.",
        primary: { label: "Book an Appointment", href: "/book-appointment" },
        secondary: { label: "Explore Robotic Surgery", href: "/robotic-surgery" },
      }}
    />
  );
}
