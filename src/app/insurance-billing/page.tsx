import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";

export const metadata: Metadata = {
  title: "Insurance & Billing",
  description: "Financial guidance, insurance coordination, and billing support at PRATHAM Cancer Institute.",
};

export default function InsuranceBillingPage() {
  return (
    <ContentPage
      eyebrow="Patients & Families"
      title="Insurance & billing support"
      description="Clear, compassionate financial guidance so you can focus on your care, not paperwork."
      crumbs={[{ label: "Patients & Families" }, { label: "Insurance & Billing" }]}
      intro="Understanding the cost of cancer care can feel overwhelming. Our financial counselors help you navigate coverage, estimates, and payment options with transparency and patience."
      sections={[
        {
          heading: "Insurance coordination",
          body: "Our team works with you to verify benefits and understand what your plan covers before treatment begins.",
          points: [
            "Benefits verification and pre-authorization support",
            "Help understanding in-network and out-of-network coverage",
            "Coordination with your insurer on referrals and approvals",
          ],
        },
        {
          heading: "Cost estimates & transparency",
          body: "Where possible, we provide good-faith cost estimates so there are fewer surprises along the way.",
          points: [
            "Plain-language explanations of charges",
            "Itemized billing on request",
            "A single point of contact for questions",
          ],
        },
        {
          heading: "Financial assistance",
          body: "For patients who need it, our counselors can discuss payment plans and point toward assistance programs.",
          points: [
            "Flexible payment plan options",
            "Guidance toward charitable and grant programs",
            "Support for international self-pay patients",
          ],
        },
      ]}
      highlights={[
        { icon: "credit-card", title: "Payment plans", text: "Flexible options tailored to you." },
        { icon: "file-text", title: "Clear estimates", text: "Good-faith cost estimates up front." },
        { icon: "heart-handshake", title: "Counselors", text: "Dedicated financial guidance." },
      ]}
      cta={{
        title: "Have a billing question?",
        text: "A financial counselor can walk you through your options.",
        primary: { label: "Contact us", href: "/contact" },
        secondary: { label: "Book an appointment", href: "/book-appointment" },
      }}
    />
  );
}
