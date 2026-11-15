/**
 * Root landing pages served by app/[landing] — one entry = one URL.
 * Add a slug here and the page exists: no new folder needed.
 *
 * Covers two families:
 *  - Audiences:  /for-colleges, /for-schools, /for-institutes
 *  - Locations:  /devwala-in-palwal, /devwala-in-faridabad, /devwala-in-delhi-ncr
 */

/** URL slug → shared shape for every landing page. */
type LandingPage = {
  title: string;
  description: string;
};

const AUDIENCES = {
  "for-colleges": {
    title: "For Colleges",
    description:
      "Curriculum-aligned developer training, workshops, and placement preparation for college students.",
  },
  "for-schools": {
    title: "For Schools",
    description:
      "Age-appropriate coding fundamentals that build confidence early — available online and on campus.",
  },
  "for-institutes": {
    title: "For Institutes",
    description:
      "White-labeled technical programs and faculty support for training institutes.",
  },
} satisfies Record<string, LandingPage>;

const LOCATIONS = {
  "devwala-in-palwal": {
    title: "Devwala in Palwal",
    description:
      "Join Devwala in Palwal — in-person classroom training plus live online sessions with mentors, projects, and placement support.",
  },
  "devwala-in-faridabad": {
    title: "Devwala in Faridabad",
    description:
      "Devwala in Faridabad brings hands-on developer courses to the city — learn online, practice offline, build real projects.",
  },
  "devwala-in-delhi-ncr": {
    title: "Devwala in Delhi NCR",
    description:
      "Devwala across Delhi NCR — weekend and weekday programs for students and professionals, taught online and at our centers.",
  },
} satisfies Record<string, LandingPage>;

/** Everything app/[landing] can render. */
export const LANDING_PAGES = {
  ...AUDIENCES,
  ...LOCATIONS,
} as const;

export type LandingSlug = keyof typeof LANDING_PAGES;
