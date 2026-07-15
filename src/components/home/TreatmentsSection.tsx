import Link from "next/link";
import { treatments } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function TreatmentsSection() {
  return (
    <section
      className="section relative overflow-hidden"
      aria-labelledby="treatments-heading"
      style={{ background: "#EDF3F6" }}
    >
      <div className="orb-teal" style={{ width: 400, height: 400, top: 0, right: 0, opacity: 0.12 }} aria-hidden />
      <div className="orb-gold" style={{ width: 300, height: 300, bottom: 0, left: 0, opacity: 0.10 }} aria-hidden />

      <div className="container-page relative">
        <Reveal>
          {/* Section badge — exact reference site: badge pill above heading */}
          <div className="mb-5 flex justify-center">
            <span className="badge-teal">
              <Icon name="sparkles" className="h-3 w-3" aria-hidden />
              What we do
            </span>
          </div>
          <SectionHeading
            align="center"
            eyebrow=""
            title={
              <span id="treatments-heading">
                Full-spectrum cancer care,{" "}
                <span className="text-gradient-brand">under one roof</span>
              </span>
            }
            description="From the first scan to survivorship, every service is designed around you."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, i) => (
            <Reveal key={treatment.slug} delay={(i % 3) * 0.07} as="article">
              <Link href={`/treatments/${treatment.slug}`} className="service-card group relative flex h-full flex-col overflow-hidden block">
                {/* Hover glow */}
                <span
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(circle, rgba(238,170,37,0.25) 0%, transparent 70%)",
                    filter: "blur(18px)"
                  }}
                  aria-hidden
                />

                {/* Icon bubble */}
                <span
                  className="icon-bubble icon-bubble-lg relative mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "rgba(7,87,111,0.08)", color: "#07576F" }}
                >
                  <Icon name={treatment.icon} className="h-6 w-6" aria-hidden />
                </span>

                <h3 className="relative text-lg font-bold" style={{ color: "#07576F" }}>
                  {treatment.name}
                </h3>
                {/* Gold gradient tagline */}
                <p className="relative mt-1 text-xs font-semibold uppercase tracking-wider text-gradient-gold">
                  {treatment.tagline}
                </p>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed" style={{ color: "#536D7C" }}>
                  {treatment.description}
                </p>

                <span
                  className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                  style={{ color: "#07576F" }}
                >
                  Explore treatment
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
