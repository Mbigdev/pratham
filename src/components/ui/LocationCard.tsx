import type { Location } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";

export function LocationCard({ location }: { location: Location }) {
  const mapsQuery = encodeURIComponent(`${location.address}, ${location.city}`);

  return (
    <article className="flex h-full flex-col rounded-3xl border border-ink/8 bg-white p-6 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-navy">{location.name}</h3>
          <p className="mt-1 flex items-start gap-1.5 text-sm text-ink/65">
            <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-healing-teal" aria-hidden />
            <span>
              {location.address}
              <br />
              {location.city}
            </span>
          </p>
        </div>
      </div>

      <dl className="mt-4 space-y-2 text-sm text-ink/65">
        <div className="flex items-center gap-2">
          <Icon name="clock" className="h-4 w-4 text-healing-teal" aria-hidden />
          <dt className="sr-only">Hours</dt>
          <dd>{location.hours}</dd>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="phone" className="h-4 w-4 text-healing-teal" aria-hidden />
          <dt className="sr-only">Phone</dt>
          <dd>
            <a href={`tel:${location.phone.replace(/[^+\d]/g, "")}`} className="hover:text-teal">
              {location.phone}
            </a>
          </dd>
        </div>
      </dl>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {location.features.slice(0, 4).map((f) => (
          <li key={f} className="rounded-full bg-soft-pearl px-2.5 py-1 text-xs font-medium text-ink/70">
            {f}
          </li>
        ))}
      </ul>

      <a
        href={`https://maps.google.com/?q=${mapsQuery}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 font-semibold text-healing-teal transition-colors hover:text-clinical-navy"
      >
        Get directions
        <Icon name="arrow-up-right" className="h-4 w-4" aria-hidden />
      </a>
    </article>
  );
}
