import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";

export const metadata: Metadata = {
  title: "About PRATHAM",
  description:
    "PRATHAM Cancer Institute is a fictional oncology hospital created to demonstrate compassionate, technology-forward cancer care.",
};

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="About Us"
      title="Compassionate cancer care, reimagined"
      description="PRATHAM Cancer Institute is a fictional oncology hospital built to show what warm, coordinated, technology-forward cancer care can feel like."
      crumbs={[{ label: "About PRATHAM" }]}
      intro="PRATHAM is a demonstration brand — every specialist, location, and program shown here is fictional. The site exists to illustrate a modern, human-centered approach to oncology care and design."
      sections={[
        {
          heading: "Our mission",
          body: "To surround every person facing cancer with expert, coordinated care and genuine human support — from the first question to life beyond treatment.",
          points: [
            "Care organized around specific cancers",
            "Multidisciplinary teams and tumor boards",
            "Technology in service of people, never the reverse",
          ],
        },
        {
          heading: "Our values",
          body: "Clarity, compassion, and precision guide everything. We believe people deserve to understand their care, feel supported through it, and benefit from the best that science offers.",
        },
        {
          heading: "A note on this demonstration",
          body: "PRATHAM is not a real hospital and provides no medical advice. It's a design and engineering showcase for a calm, trustworthy healthcare experience.",
        },
      ]}
      highlights={[
        { icon: "compass", title: "Mission-led", text: "People before everything." },
        { icon: "users", title: "Team-based", text: "Many experts, one plan." },
        { icon: "sparkles", title: "Forward-looking", text: "Modern, humane care." },
      ]}
      cta={{
        title: "See what sets PRATHAM apart",
        text: "Explore our approach to coordinated, compassionate care.",
        primary: { label: "Why PRATHAM", href: "/why-pratham" },
        secondary: { label: "Meet our doctors", href: "/doctors" },
      }}
    />
  );
}
