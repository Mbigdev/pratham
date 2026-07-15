import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { DoctorFinder } from "@/components/doctors/DoctorFinder";

export const metadata: Metadata = {
  title: "Find a Doctor",
  description:
    "Search PRATHAM Cancer Institute oncology specialists by name, specialty, focus area, or location.",
};

export default function FindADoctorPage() {
  return (
    <>
      <PageHero
        eyebrow="Find a Doctor"
        title="Find the right specialist for you"
        description="Our teams are organized around specific cancers. Search by name, specialty, or focus to find the expert who fits your needs."
        crumbs={[{ label: "Find a Doctor" }]}
      />
      <section className="section">
        <div className="container-page">
          <DoctorFinder />
        </div>
      </section>
    </>
  );
}
