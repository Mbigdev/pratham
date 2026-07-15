import Link from "next/link";
import { careAccessCards } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function QuickCareAccess() {
  return (
    <section
      className="section relative overflow-hidden"
      aria-labelledby="quick-care-heading"
      style={{ background: "var(--color-bg-base)" }}
    >
      {/* Orbs */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-72 w-72 rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, rgba(45,90,90,0.40) 0%, transparent 70%)", filter: "blur(60px)" }}
        aria-hidden
      />

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            eyebrow="Start Here"
            title={<span id="quick-care-heading">How can we help you today?</span>}
            description="Choose the path that fits where you are. Every route connects you to a real person who can help."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {careAccessCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06} as="article">
              <Link
                href={card.href}
                className="service-card group flex h-full flex-col"
              >
                {/* Icon bubble */}
                <span
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(45,90,90,0.10)",
                    color: "#2d5a5a",
                    boxShadow: "inset 2px 2px 8px rgba(150,180,160,0.30), inset -2px -2px 6px rgba(255,255,255,0.85)"
                  }}
                >
                  <Icon name={card.icon} className="h-7 w-7" aria-hidden />
                </span>

                <h3 className="text-xl font-bold" style={{ color: "#1e3d3d" }}>{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: "#5a7a7a" }}>
                  {card.description}
                </p>
                <span
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                  style={{ color: "#c9a84c" }}
                >
                  Continue
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
