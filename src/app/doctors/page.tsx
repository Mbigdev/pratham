import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { doctors } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet the fictional oncology specialists of PRATHAM Cancer Institute across medical, radiation, surgical, and pediatric oncology.",
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Specialists"
        title="Meet the PRATHAM care teams"
        description="Experienced specialists organized around specific cancers, collaborating through multidisciplinary tumor boards. All profiles shown are fictional."
        crumbs={[{ label: "Doctors" }]}
      >
        <Button href="/find-a-doctor" variant="secondary" leftIcon={<Icon name="user-search" className="h-4 w-4" aria-hidden />}>
          Search all specialists
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor, i) => (
              <Reveal key={doctor.slug} delay={i * 0.05}>
                <DoctorCard doctor={doctor} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
