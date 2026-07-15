import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";

const footerColumns = [
  {
    title: "Care & Treatments",
    links: [
      { label: "Precision Oncology",   href: "/precision-oncology" },
      { label: "Medical Oncology",     href: "/medical-oncology" },
      { label: "Radiation Oncology",   href: "/radiation-oncology" },
      { label: "Surgical Oncology",    href: "/surgical-oncology" },
      { label: "Immunotherapy",        href: "/immunotherapy" },
      { label: "All Treatments",       href: "/treatments" },
    ],
  },
  {
    title: "Cancer Types",
    links: [
      { label: "Breast Cancer",       href: "/cancer-types" },
      { label: "Lung Cancer",         href: "/cancer-types" },
      { label: "Blood Cancers",       href: "/cancer-types" },
      { label: "Brain & Spine",       href: "/cancer-types" },
      { label: "Pediatric Cancers",   href: "/cancer-types" },
      { label: "All Cancer Types",    href: "/cancer-types" },
    ],
  },
  {
    title: "Patient Resources",
    links: [
      { label: "Find a Doctor",         href: "/find-a-doctor" },
      { label: "Book Appointment",      href: "/book-appointment" },
      { label: "Second Opinion",        href: "/second-opinion" },
      { label: "International Patients",href: "/international-patients" },
      { label: "Insurance & Billing",   href: "/insurance-billing" },
      { label: "Patient Stories",       href: "/patient-stories" },
    ],
  },
  {
    title: "About Pratham",
    links: [
      { label: "About Us",    href: "/about" },
      { label: "Why Pratham", href: "/why-pratham" },
      { label: "Research",    href: "/research" },
      { label: "Locations",   href: "/locations" },
      { label: "Careers",     href: "/careers" },
      { label: "News",        href: "/news" },
    ],
  },
];

const socials = [
  { label: "Facebook",  icon: "facebook",  href: "#" },
  { label: "Instagram", icon: "instagram", href: "#" },
  { label: "LinkedIn",  icon: "linkedin",  href: "#" },
  { label: "YouTube",   icon: "youtube",   href: "#" },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        /* Deep teal — matches reference site footer */
        background: "linear-gradient(160deg, #07576F 0%, #0A80A8 55%, #063F50 100%)"
      }}
    >
      {/* Ambient orbs */}
      <div
        className="orb-gold"
        style={{ width: 350, height: 350, top: 0, right: 0, opacity: 0.18 }}
        aria-hidden
      />
      <div
        className="orb-teal"
        style={{ width: 280, height: 280, bottom: 0, left: 0, opacity: 0.15 }}
        aria-hidden
      />

      {/* Brand gradient top border */}
      <div
        className="h-[3px] w-full"
        style={{ background: "linear-gradient(90deg, #07576F, #0A80A8 40%, #EEAA25 80%, #F4C958)" }}
        aria-hidden
      />

      <div className="container-page relative">
        {/* Top columns */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Pratham Cancer Hospital home">
              <div
                className="h-10 w-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.20)"
                }}
              >
                <Logo className="h-6 w-6 text-white" tone="light" />
              </div>
              <span className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-white">Pratham</span>
                <span
                  className="text-[0.58rem] font-semibold uppercase tracking-[0.20em]"
                  style={{ color: "#EEAA25" }}
                >
                  Cancer Hospital
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Precision care. Human strength. Compassionate, coordinated cancer care built around every person we serve.
            </p>
            <div className="mt-5 space-y-2.5 text-sm">
              <a
                href="tel:+919000000006"
                className="flex items-center gap-2 font-semibold transition-colors hover:text-white"
                style={{ color: "#F4C958" }}
              >
                <Icon name="phone" className="h-4 w-4" aria-hidden />
                +91 90000 00006
              </a>
              <a
                href="mailto:care@prathamcancer.in"
                className="flex items-center gap-2 transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <Icon name="mail" className="h-4 w-4" aria-hidden />
                care@prathamcancer.in
              </a>
              <p className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                <Icon name="map-pin" className="h-4 w-4" aria-hidden />
                Visit: Pratham Cancer Hospital India
              </p>
            </div>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="mb-4 text-sm font-bold text-white">{col.title}</h2>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-link text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Medical disclaimer */}
        <div
          className="rounded-2xl p-5 text-xs leading-relaxed"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
            color: "rgba(255,255,255,0.50)"
          }}
        >
          <strong style={{ color: "rgba(255,255,255,0.75)" }}>Medical disclaimer:</strong>{" "}
          Pratham Cancer Hospital is a fictional organization for demonstration. All content is illustrative.
          This does not constitute medical advice. Call emergency services in any emergency.
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col gap-4 border-t py-6 md:flex-row md:items-center md:justify-between"
          style={{ borderTopColor: "rgba(255,255,255,0.10)" }}
        >
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs" style={{ color: "rgba(255,255,255,0.50)" }}>
            <span>© 2026 Pratham Cancer Hospital. All rights reserved.</span>
            <Link href="/patient-resources" className="transition-colors hover:text-white">Privacy</Link>
            <Link href="/patient-resources" className="transition-colors hover:text-white">Accessibility</Link>
            <Link href="/patient-resources" className="transition-colors hover:text-white">Terms</Link>
          </div>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={`Pratham on ${s.label}`}
                className="footer-social flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
              >
                <Icon name={s.icon} className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
