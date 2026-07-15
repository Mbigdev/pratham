import { Icon } from "@/components/ui/Icon";
import Link from "next/link";

export function CtaBanner() {
  return (
    <section
      className="section relative overflow-hidden"
      aria-labelledby="cta-heading"
      style={{ background: "var(--color-bg-base)" }}
    >
      {/* Outer orbs */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.50) 0%, transparent 70%)", filter: "blur(60px)" }}
        aria-hidden
      />

      <div className="container-page">
        {/* Glass card */}
        <div
          className="relative overflow-hidden rounded-[28px] p-8 md:p-14"
          style={{
            background: "rgba(255,255,255,0.72)",
            backdropFilter: "blur(32px) saturate(160%)",
            WebkitBackdropFilter: "blur(32px) saturate(160%)",
            border: "1px solid rgba(255,255,255,0.85)",
            boxShadow:
              "0 24px 80px rgba(30,61,61,0.14), 0 8px 24px rgba(30,61,61,0.08), inset 0 1px 0 rgba(255,255,255,0.95)",
          }}
        >
          {/* Inner ambient glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.12) 0%, transparent 55%), radial-gradient(ellipse at 70% 50%, rgba(45,90,90,0.10) 0%, transparent 55%)",
            }}
            aria-hidden
          />
          {/* Gold top accent line */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-32 rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
            aria-hidden
          />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold"
              style={{
                background: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.40)",
                color: "#a8882e"
              }}
            >
              <Icon name="heart-handshake" className="h-4 w-4" aria-hidden />
              We&apos;re here for you
            </span>

            <h2
              id="cta-heading"
              className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl"
              style={{ color: "#1e3d3d" }}
            >
              You don&apos;t have to face cancer alone.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed" style={{ color: "#5a7a7a" }}>
              Speak with a care coordinator who can help you understand your options and take the next step, at your pace.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/book-appointment" className="btn-gold text-base px-8 py-3.5">
                Book an Appointment
                <Icon name="arrow-right" className="h-5 w-5" aria-hidden />
              </Link>
              <Link href="/second-opinion" className="btn-teal text-base px-8 py-3.5">
                Request a Second Opinion
              </Link>
              <Link
                href="tel:+919000000006"
                className="btn-ghost text-base px-7 py-3.5"
              >
                <Icon name="phone" className="h-5 w-5" aria-hidden />
                Call a Care Coordinator
              </Link>
            </div>

            <p className="mt-6 text-sm" style={{ color: "#5a7a7a" }}>
              Experiencing a medical emergency?{" "}
              <a
                href="/urgent-care"
                className="font-semibold underline underline-offset-2"
                style={{ color: "#c9a84c" }}
              >
                See urgent care guidance
              </a>{" "}
              or call your local emergency number.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
