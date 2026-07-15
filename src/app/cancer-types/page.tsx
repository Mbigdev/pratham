import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CancerTypeGrid } from "@/components/cancer/CancerTypeGrid";

export const metadata: Metadata = {
  title: "Cancer Types We Treat",
  description:
    "Explore the cancers treated at PRATHAM Cancer Institute, organized by dedicated specialist teams. Fictional demonstration content.",
};

export default function CancerTypesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cancers We Treat"
        title="Specialized care for every diagnosis"
        description="Our care is organized around specific cancers, so you're matched with a team that focuses on your condition. Select a cancer type to learn more."
        crumbs={[{ label: "Cancer Types" }]}
      />
      <section className="section">
        <div className="container-page">
          <CancerTypeGrid />
        </div>
      </section>
    </>
  );
}
