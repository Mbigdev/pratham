import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/ContentPage";

export const metadata: Metadata = {
  title: "Diagnostics",
  description:
    "Molecular diagnostics, advanced imaging, and pathology at PRATHAM Cancer Institute (fictional).",
};

export default function DiagnosticsPage() {
  return (
    <ContentPage
      eyebrow="Diagnostics"
      title="Molecular Diagnostics & Imaging"
      description="Advanced imaging and laboratory science that characterize cancer with clarity."
      crumbs={[{ label: "Treatments", href: "/treatments" }, { label: "Diagnostics" }]}
      intro="Accurate diagnosis is the foundation of effective care. Our diagnostic teams combine imaging, pathology, and molecular science to understand your cancer precisely."
      sections={[
        {
          heading: "Advanced imaging",
          body: "High-resolution imaging helps locate and characterize tumors, guiding treatment planning across every program.",
          points: ["PET, CT, and MRI capabilities", "Image-guided biopsy support", "Coordinated radiology review"],
        },
        {
          heading: "Molecular & genomic testing",
          body: "Genomic profiling reveals the specific characteristics of your tumor, informing precision treatment decisions.",
        },
        {
          heading: "Pathology partnership",
          body: "Our pathologists work directly with your care team, ensuring diagnostic findings translate into a clear plan.",
        },
      ]}
      highlights={[
        { icon: "microscope", title: "Molecular", text: "Genomic profiling." },
        { icon: "activity", title: "Imaging", text: "High resolution." },
        { icon: "file-check", title: "Clarity", text: "Plain-language results." },
      ]}
      cta={{
        title: "Understand your diagnosis",
        text: "Our teams help you make sense of every result.",
        primary: { label: "Book an Appointment", href: "/book-appointment" },
        secondary: { label: "Explore Treatments", href: "/treatments" },
      }}
    />
  );
}
