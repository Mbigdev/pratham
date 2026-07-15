"use client";

import { doctors } from "@/lib/data";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";

export function DoctorsShowcase() {
  const featured = doctors.slice(0, 4);

  return (
    <section className="section bg-pearl" aria-labelledby="experts-heading">
      <div className="container-page">
        <SectionHeading
          id="experts-heading"
          eyebrow="Meet our experts"
          title="Specialists who focus on your cancer"
          description="Our teams are organized around specific cancers, so you're cared for by people who know your diagnosis deeply."
          align="center"
        />

        {/* Desktop grid / mobile horizontal carousel */}
        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 no-scrollbar md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {featured.map((doctor, i) => (
            <Reveal
              key={doctor.slug}
              delay={i * 0.06}
              className="min-w-[80%] snap-start sm:min-w-[60%] md:min-w-0"
            >
              <DoctorCard doctor={doctor} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/doctors" variant="secondary" rightIcon={<Icon name="arrow-right" className="h-4 w-4" aria-hidden />}>
            View all specialists
          </Button>
        </div>
      </div>
    </section>
  );
}
