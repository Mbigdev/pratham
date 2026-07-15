import Link from "next/link";
import type { Doctor } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { accentMap } from "@/lib/utils";

const avatarGradients: Record<string, string> = {
  teal: "from-healing-teal to-aqua",
  violet: "from-soft-violet to-aqua",
  aqua: "from-aqua to-healing-teal",
  coral: "from-gentle-coral to-sunrise-gold",
  gold: "from-sunrise-gold to-gentle-coral",
};

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const accent = accentMap[doctor.accent] ?? accentMap.teal;
  const gradient = avatarGradients[doctor.accent] ?? avatarGradients.teal;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-clinical-navy/8 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
      {/* Avatar band — abstract gradient with initials (no stock photos of real people) */}
      <div className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${gradient}`}>
        <span
          className="flex h-20 w-20 items-center justify-center rounded-full bg-white/25 text-2xl font-bold text-white backdrop-blur-sm"
          aria-hidden
        >
          {doctor.initials}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-navy">
          <Link href={`/doctors/${doctor.slug}`} className="after:absolute after:inset-0">
            {doctor.name}
          </Link>
        </h3>
        <p className={`text-sm font-semibold ${accent.text}`}>{doctor.specialty}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {doctor.focus.slice(0, 3).map((f) => (
            <span
              key={f}
              className="rounded-full bg-soft-pearl px-2.5 py-1 text-xs font-medium text-ink/70"
            >
              {f}
            </span>
          ))}
        </div>

        <dl className="mt-4 space-y-1.5 text-sm text-ink/65">
          <div className="flex items-center gap-2">
            <Icon name="award" className="h-4 w-4 text-healing-teal" aria-hidden />
            <dt className="sr-only">Experience</dt>
            <dd>{doctor.experience} experience</dd>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="map-pin" className="h-4 w-4 text-healing-teal" aria-hidden />
            <dt className="sr-only">Location</dt>
            <dd>{doctor.location}</dd>
          </div>
        </dl>

        <span className="relative mt-5 inline-flex items-center gap-1.5 font-semibold text-healing-teal">
          View profile
          <Icon name="arrow-right" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </article>
  );
}
