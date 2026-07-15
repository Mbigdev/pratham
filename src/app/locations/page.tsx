import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { LocationCard } from "@/components/ui/LocationCard";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { locations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Locations & Directions",
  description:
    "Find PRATHAM Cancer Institute campuses across the Meridian District, with hours, parking, and accessibility details.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Care close to where you are"
        description="Three campuses designed around comfort, access, and coordinated cancer care. All locations are fictional."
        crumbs={[{ label: "Locations" }]}
      />
      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((l, i) => (
              <Reveal key={l.slug} delay={i * 0.06}>
                <LocationCard location={l} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-3 rounded-2xl bg-pearl p-5 text-sm text-ink/70">
            <Icon name="map-pin" className="mt-0.5 h-5 w-5 shrink-0 text-healing-teal" aria-hidden />
            <p>
              Map embeds and precise directions are omitted in this demonstration. In a production
              site, each campus would include an interactive map, transit guidance, and parking
              details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
