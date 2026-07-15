import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { StoriesSection } from "@/components/home/StoriesSection";

export const metadata: Metadata = {
  title: "Patient Stories",
  description:
    "Voices from the PRATHAM community. Individual experiences vary; all stories are fictional and shared for demonstration.",
};

export default function PatientStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Stories"
        title="Voices from our community"
        description="Every journey is different. These fictional stories reflect the kind of coordinated, human care we strive for."
        crumbs={[{ label: "Patients & Families" }, { label: "Patient Stories" }]}
      />
      <StoriesSection />
    </>
  );
}
