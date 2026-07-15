import Link from "next/link";
import { cancerTypes } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function CancerTypesSection() {
  const featured = cancerTypes.slice(0, 8);
  return (
    <section
      className="section relative overflow-hidden"
      aria-labelledby="cancer-types-heading"
      style={{ background: "var(--color-bg-soft)" }}
    >
      {/* Orbs */}
      <div
        className="pointer-events-none absolute -right-10 top-0 h-80 w-80 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.55) 0%, transparent 70%)", filter: "blur(60px)" }}
        aria-hidden
      />

      <div className="container-page relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Cancers We Treat"
              title={<span id="cancer-types-heading">Specialized teams for every diagnosis</span>}
              description="Our care is organized around specific cancers, so you&apos;re matched with specialists who focus on your condition."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/cancer-types"
              className="btn-ghost inline-flex text-sm"
            >
              View all cancer types
              <Icon name="arrow-right" className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((cancer, i) => (
            <Reveal key={cancer.slug} delay={(i % 4) * 0.05} as="article">
              <Link
                href={`/cancer-types/${cancer.slug}`}
                className="service-card group flex h-full flex-col"
                style={{ padding: "20px" }}
              >
                <span
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(45,90,90,0.10)",
                    color: "#2d5a5a",
                    boxShadow: "inset 2px 2px 6px rgba(150,180,160,0.30), inset -2px -2px 5px rgba(255,255,255,0.80)"
                  }}
                >
                  <Icon name={cancer.icon} className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-bold" style={{ color: "#1e3d3d" }}>{cancer.name}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed" style={{ color: "#5a7a7a" }}>
                  {cancer.summary}
                </p>
                <span
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200"
                  style={{ color: "#c9a84c" }}
                >
                  Learn more
                  <Icon name="chevron-right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
