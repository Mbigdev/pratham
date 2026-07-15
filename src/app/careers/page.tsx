import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the PRATHAM Cancer Institute team. Explore fictional demonstration career opportunities in oncology care.",
};

export default function CareersPage() {
  return (
    <ContentPage
      eyebrow="Discover PRATHAM"
      title="Build a career in compassionate care"
      description="Join a team united by one purpose: giving every patient a clear path forward."
      crumbs={[{ label: "Discover PRATHAM" }, { label: "Careers" }]}
      intro="At PRATHAM, people are our greatest strength. We're always looking for clinicians, researchers, and support staff who share our commitment to human-centered oncology. (All roles below are illustrative for this demonstration.)"
      sections={[
        {
          heading: "Why work here",
          body: "We invest in our people with mentorship, continuing education, and a culture built on respect.",
          points: [
            "Multidisciplinary collaboration across specialties",
            "Ongoing professional development and training",
            "A supportive, mission-driven environment",
          ],
        },
        {
          heading: "Open areas (illustrative)",
          body: "We regularly welcome talented people across clinical and non-clinical teams.",
          points: [
            "Oncology nursing and advanced practice",
            "Radiation therapy and medical physics",
            "Research coordination and data science",
            "Patient navigation and support services",
          ],
        },
        {
          heading: "Our commitment",
          body: "We are an equal-opportunity employer committed to building a diverse, inclusive workplace where everyone belongs.",
        },
      ]}
      highlights={[
        { icon: "users", title: "Great teams", text: "Collaborative, supportive culture." },
        { icon: "graduation-cap", title: "Growth", text: "Continuous learning and mentorship." },
        { icon: "heart", title: "Purpose", text: "Work that changes lives." },
      ]}
      cta={{
        title: "Interested in joining us?",
        text: "This is a demonstration site—reach out to learn how you could get involved.",
        primary: { label: "Contact us", href: "/contact" },
      }}
    />
  );
}
