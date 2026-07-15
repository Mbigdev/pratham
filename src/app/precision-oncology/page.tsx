import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";

export const metadata: Metadata = {
  title: "Precision Oncology",
  description:
    "Genomics-guided cancer care at PRATHAM — matching therapies to the biology of your tumor. Fictional demonstration content.",
};

export default function Page() {
  return (
    <ContentPage
      eyebrow="Precision Oncology"
      title="Treatment shaped by your tumor's biology"
      description="We use genomic profiling and molecular insights to match therapies to the specific characteristics of your cancer."
      crumbs={[{ label: "Precision Oncology" }]}
      intro="Precision oncology moves beyond a one-size-fits-all approach. By understanding the genetic and molecular signature of your cancer, our teams can identify therapies more likely to help you and avoid those less likely to work."
      sections={[
        {
          heading: "How precision oncology works",
          body: "We analyze tumor tissue and, in some cases, blood samples to identify mutations and biomarkers that drive your cancer. Those insights inform a treatment plan tailored to you.",
          points: [
            "Comprehensive genomic profiling of tumor samples",
            "Biomarker testing to guide targeted and immune therapies",
            "Molecular tumor board review of complex cases",
            "Matching to relevant clinical trials when appropriate",
          ],
        },
        {
          heading: "A collaborative, evolving plan",
          body: "Your plan is reviewed by a multidisciplinary team and adjusted as we learn more. We explain each option in plain language so you can make informed decisions with confidence.",
        },
      ]}
      highlights={[
        { icon: "dna", title: "Genomic profiling", text: "Deep insight into your tumor's biology." },
        { icon: "target", title: "Targeted therapy", text: "Treatments matched to specific mutations." },
        { icon: "flask", title: "Trial access", text: "Options that reflect emerging science." },
      ]}
      cta={{
        title: "Explore whether precision oncology fits your care",
        text: "Talk with our team about genomic testing and personalized options.",
        primary: { label: "Book an appointment", href: "/book-appointment" },
        secondary: { label: "Request a second opinion", href: "/second-opinion" },
      }}
    />
  );
}
