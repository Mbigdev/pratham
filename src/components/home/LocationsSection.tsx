"use client";

import { locations } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { LocationCard } from "@/components/ui/LocationCard";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";

export function LocationsSection() {
  return (
    <section className="section bg-pearl" aria-labelledby="locations-heading">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="locations-heading"
            eyebrow="Locations"
            title="Care close to where you are"
            description="Three campuses across the Meridian District, each designed around comfort and access."
            className="max-w-2xl"
          />
          <Button href="/locations" variant="secondary" className="shrink-0" rightIcon={<Icon name="arrow-right" className="h-4 w-4" aria-hidden />}>
            View all locations
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {locations.map((location, i) => (
            <Reveal key={location.slug} delay={i * 0.06}>
              <LocationCard location={location} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
