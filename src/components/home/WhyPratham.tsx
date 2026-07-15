import { whyFeatures } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import Link from "next/link";

const microStats = [
  { value: "98%", label: "Patient Satisfaction" },
  { value: "40+", label: "Specialities"         },
  { value: "15",  label: "Awards Won"           },
  { value: "5 ★", label: "CAN Rating"           },
];

export function WhyPratham() {
  return (
    <section
      className="section relative overflow-hidden"
      aria-labelledby="why-heading"
      style={{ background: "#F0F5F8" }}
    >
      <div className="orb-teal" style={{ width: 350, height: 350, top: "-10%", right: "20%", opacity: 0.18 }} aria-hidden />
      <div className="orb-gold" style={{ width: 280, height: 280, bottom: 0, left: 0, opacity: 0.15 }} aria-hidden />

      <div className="container-page relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">

          {/* ── LEFT: Text ── */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              {/* Badge — GOLD gradient pill, exactly as reference site "Why Pratham" badge */}
              <span className="badge-gold mb-5 inline-flex">
                Why Pratham
              </span>

              <SectionHeading
                eyebrow=""
                title={
                  <span id="why-heading">
                    Care that treats the{" "}
                    {/* "person" in teal color — exact reference site */}
                    <span style={{ color: "#0A80A8" }}>person</span>
                    , not just the disease.
                  </span>
                }
                description="We combine leading edge oncology with warmth, dignity and clarity because healing happens faster when you feel truly cared for."
              />

              {/* Bullet list — exact reference site: gold dot, no icon */}
              <ul className="mt-7 space-y-3">
                {[
                  "Multidisciplinary tumour boards for every complex case",
                  "Latest-generation Linear Accelerators & Robotic OT",
                  "Transparent pricing and dedicated care coordination",
                  "In-house pharmacy, blood bank and 24/7 ICU",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ background: "#EEAA25" }}
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed" style={{ color: "#536D7C" }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/why-pratham" className="btn-brand mt-8 inline-flex btn-sm">
                Discover our approach
                <Icon name="arrow-right" className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>

          {/* ── RIGHT: Feature cards + Stats ── */}
          <div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {whyFeatures.map((feature, i) => (
                <Reveal key={feature.title} delay={(i % 2) * 0.06} as="li">
                  <div className="service-card group flex h-full gap-4 cursor-default" style={{ padding: "20px" }}>
                    <span
                      className="icon-bubble transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "rgba(7,87,111,0.08)", color: "#07576F" }}
                    >
                      <Icon name={feature.icon} className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-bold" style={{ color: "#07576F" }}>{feature.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed" style={{ color: "#536D7C" }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            {/* Micro stats — matches reference site 2×2 grid */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              {microStats.map((s, i) => (
                <Reveal key={s.label} delay={0.1 + i * 0.05}>
                  <div className="stat-card" style={{ padding: "16px 12px" }}>
                    <span className="block text-2xl font-bold text-gradient-brand">{s.value}</span>
                    <span
                      className="mt-1 block text-xs font-medium uppercase tracking-wider"
                      style={{ color: "#536D7C" }}
                    >
                      {s.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
