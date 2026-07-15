# Reference Notes

This document records the reference-site inspection performed before building the
AURELIS Cancer Institute website, in line with the project brief.

## URLs successfully accessed

None. All four reference URLs were attempted programmatically and returned blocking
responses:

| URL | Result |
| --- | --- |
| https://www.medanta.org/ | HTTP 403 Forbidden |
| https://www.apollohospitals.com/ | 400 content-blocked |
| https://gangahospital.gt.tc/ | HTTP 403 Forbidden |
| https://www.maxhealthcare.in/ | HTTP 403 Forbidden |

Because none of the reference sites could be inspected, **no specific design details,
layouts, copy, imagery, or components were derived from them.** Everything in this
project is original.

## General healthcare UX & conversion patterns applied (from domain knowledge, not from the blocked sites)

These are well-established, generic patterns common across the healthcare/hospital
website category. They were applied at a principle level only:

- **Fast "quick access" conversion entry point** near the top of the homepage so
  stressed users can immediately find a doctor, a specialty, or book care without
  scrolling. Implemented as the AURELIS floating frosted-glass search/booking panel
  over the hero.
- **Persistent conversion affordances** in the header: a primary "Book Appointment"
  button plus an always-visible urgent/emergency contact. Stress-oriented audiences
  benefit from never having to hunt for help.
- **Service/specialty discovery grids** (cancer types, treatments) with client-side
  search and filter, reducing navigation friction.
- **Trust signals** surfaced early: multidisciplinary care, precision oncology,
  specialist showcase, patient stories (with clear "experiences vary" disclaimers).
- **Care-journey storytelling** to reduce anxiety by making the path predictable.
- **International-patient support** as a distinct, prominent journey.
- **Multi-step appointment flow** with a progress indicator to reduce cognitive load
  versus one long form.

## Ideas adapted at a principle level (Apollo-style hero, per brief)

The brief explicitly requested the "Apollo-style healthcare quick access" *conversion
idea*: a muted background video with a prominent floating search/booking panel. This
was implemented as an **original AURELIS design** — our own layout, tokens, copy,
segmented tabs, motion, and glassmorphism treatment. It is not a copy of any Apollo
slide or component.

## Inaccessible URLs

All four listed above. No design specifics were invented for any of them.
