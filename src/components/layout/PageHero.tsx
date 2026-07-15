import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
};

/**
 * Shared hero band for interior pages. Uses the atmospheric navy gradient
 * with a single H1. Content passed as children renders below the copy
 * (e.g. CTA buttons or quick stats).
 */
export function PageHero({ eyebrow, title, description, crumbs, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-clinical-navy text-white">
      {/* Atmospheric gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(circle at 12% 18%, rgba(85,199,197,0.28), transparent 45%), radial-gradient(circle at 85% 12%, rgba(129,119,200,0.24), transparent 45%), radial-gradient(circle at 70% 90%, rgba(22,124,128,0.3), transparent 50%)",
        }}
      />
      <div className="container-page relative py-14 md:py-20">
        {crumbs ? (
          <div className="mb-6">
            <Breadcrumbs items={crumbs} />
          </div>
        ) : null}
        <Reveal>
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-aqua backdrop-blur">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{description}</p>
            ) : null}
            {children ? <div className="mt-8">{children}</div> : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
