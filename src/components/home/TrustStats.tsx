import { trustStats } from "@/lib/data";
import { Reveal } from "@/components/motion/Reveal";

export function TrustStats() {
  return (
    <section
      className="relative overflow-hidden py-16"
      aria-label="Pratham Cancer Hospital at a glance"
      style={{ background: "#F0F5F8" }}
    >
      {/* Background orbs */}
      <div className="orb-teal" style={{ width: 300, height: 300, top: "-30%", left: "-5%", opacity: 0.25 }} aria-hidden />
      <div className="orb-gold" style={{ width: 250, height: 250, bottom: "-20%", right: "-5%", opacity: 0.20 }} aria-hidden />

      <div className="container-page relative">
        <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {trustStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="stat-card transition-all duration-300">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  {/* Brand gradient text — exact from reference */}
                  <span className="block text-4xl font-bold text-gradient-brand sm:text-5xl">
                    {stat.value}
                  </span>
                  <span
                    className="mt-2 block text-sm font-medium uppercase tracking-wider"
                    style={{ color: "#536D7C" }}
                  >
                    {stat.label}
                  </span>
                  {/* Brand gradient underline */}
                  <span
                    className="mt-3 block h-0.5 w-8 mx-auto rounded-full"
                    style={{ background: "linear-gradient(90deg, #07576F, #EEAA25)" }}
                    aria-hidden
                  />
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
