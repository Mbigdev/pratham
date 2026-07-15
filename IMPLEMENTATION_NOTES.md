# Implementation Notes — AURELIS Cancer Institute

A fictional oncology hospital website built to demonstrate calm, trustworthy,
conversion-focused healthcare UX. All content, people, locations, and statistics
are invented for this demonstration and provide no medical advice.

## Stack

- **Next.js (App Router)** with TypeScript
- **Tailwind CSS** with a custom design-token layer (`tailwind.config.ts`)
- **Framer Motion** for reveal/transition motion (respects reduced-motion)
- **lucide-react** icons, wrapped in a single `Icon` component with a name→component map
- **Plus Jakarta Sans** via `next/font` (self-hosted, `--font-jakarta`)

## Design system

Tokens live in `tailwind.config.ts` and `globals.css`:

- Palette: `clinical-navy`, `healing-teal`, `aqua`, `soft-violet`, `sunrise-gold`,
  `gentle-coral`, plus warm neutrals. Short aliases (`navy`, `teal`, `ink`, `pearl`, …)
  are provided for ergonomics.
- Elevation via named shadows (`soft`, `elevated`, `floating`, `glass`).
- Motion easings (`gentle`, `calm`) and a small set of keyframe animations.
- Utility classes `.container-page`, `.section`, and `.skip-link` in `globals.css`.

## Structure

- `src/app/*` — route pages (App Router). One folder per navigation destination.
- `src/components/layout/*` — Header, MegaMenu, MobileMenu, SearchDialog, Footer,
  PageHero, Breadcrumbs, and the reusable `ContentPage` template.
- `src/components/home/*` — homepage sections.
- `src/components/forms/*` — multi-step appointment + second-opinion forms.
- `src/components/ui/*` — primitives (Button, Icon, cards).
- `src/lib/data.ts` — all fictional content (doctors, cancer types, treatments,
  locations, stories, news, etc.).
- `src/lib/navigation.ts` — mega-menu structure + flat searchable route index.

## Routes

Every navigation link resolves to a real, polished page — no dead links or stubs:

- **Home** (`/`) with hero video slider, quick-care access, why-AURELIS, cancer
  types, treatments, doctors, care journey, international, locations, stories, CTA.
- **Oncology programs**: precision, medical, radiation, surgical, pediatric.
- **Advanced therapies**: immunotherapy, robotic-surgery, bone-marrow-transplant,
  diagnostics.
- **Discovery**: cancer-types (+ `[slug]`), treatments (+ `[slug]`), doctors
  (+ `[slug]`), find-a-doctor, locations.
- **Patients & families**: book-appointment, second-opinion, urgent-care,
  international-patients, patient-resources, insurance-billing, patient-stories.
- **Discover AURELIS**: about, why-aurelis, research, news, careers, contact.
- **404**: custom `not-found.tsx` with helpful links.

Secondary content pages share the `ContentPage` template so each is structured,
accessible, and consistent while still carrying page-specific copy.

## Accessibility

- Single skip-link to `#main-content` (in `layout.tsx`).
- Semantic landmarks, `aria-current` breadcrumbs, `role="alert"` on the urgent-care
  emergency banner.
- Minimum 44px tap targets on buttons; visible focus rings.
- Motion respects `prefers-reduced-motion`.
- Decorative icons/media marked `aria-hidden`.

Note: full WCAG conformance requires manual testing with assistive technologies and
expert review; this covers structural/authoring-level accessibility only.

## Media / assets

- `public/media/hero-poster.svg` — lightweight gradient poster for the hero. It
  renders on its own; the `<video>` `poster` shows until/unless a real clip is added.
- `src/app/icon.svg` — favicon (App Router icon convention).
- `src/app/manifest.ts` — PWA web manifest.

**Hero video:** `HeroVideoSlider` points `<source>` at `/media/hero.mp4`, which is not
committed. The repo root contains `DigMed (1).mp4` (~153 MB) — far too large to ship as
a web background (target under ~6 MB, muted, looped). To use it, transcode a short,
compressed clip and place it at `public/media/hero.mp4`, e.g.:

```
ffmpeg -i "DigMed (1).mp4" -t 12 -vf "scale=1920:-2" -an -c:v libx264 -crf 28 \
  -movflags +faststart public/media/hero.mp4
```

Until then the poster provides a polished, calm fallback with no layout shift.

## Verification

Run locally:

```
npm run dev        # http://localhost:3000
npm run build      # production build + type check
npm run lint
```
