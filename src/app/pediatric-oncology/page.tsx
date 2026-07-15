import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";

export const metadata: Metadata = {
  title: "Pediatric Oncology",
  description:
    "Gentle, family-centered cancer care designed for children, with support for the whole family (fictional).",
};

export default function PediatricOncologyPage() {
  return (
    <ContentPage
      eyebrow="Oncology Program"
      title="Pediatric Oncology"
      description="Gentle, family-centered care designed around children and the people who love them."
      crumbs={[{ label: "Cancer Types", href: "/cancer-types" }, { label: "Pediatric Oncology" }]}
      intro="Caring for a child with cancer means caring for the whole family. Our pediatric oncology team brings specialized expertise together with a warm, reassuring environment built for young patients."
      sections={[
        {
          heading: "Care built for children",
          body: "From sensory-friendly spaces to child life specialists, everything is designed to help children feel safe. Treatment plans are tailored to growing bodies and long-term wellbeing.",
          points: ["Child life and play support", "Family counseling", "Long-term follow-up clinics"],
        },
        {
          heading: "Supporting the whole family",
          body: "We help families navigate diagnosis, treatment, school, and daily life, coordinating support services so no one faces this alone.",
        },
        {
          heading: "Survivorship for the long road ahead",
          body: "Our survivorship program supports children through and beyond treatment, monitoring growth and development with care that lasts.",
        },
      ]}
      highlights={[
        { icon: "baby", title: "Child-centered", text: "Spaces and care built for kids." },
        { icon: "heart-handshake", title: "Family support", text: "Help for the whole family." },
        { icon: "sprout", title: "Long-term care", text: "Survivorship and follow-up." },
      ]}
      cta={{
        title: "We're here for your family",
        text: "Reach out to our pediatric care coordinators for guidance.",
        primary: { label: "Book an Appointment", href: "/book-appointment" },
        secondary: { label: "Contact us", href: "/contact" },
      }}
    />
  );
}
