/**
 * Every audience landing page lives behind app/[audience].
 * Add an entry here → a new URL (/for-*) exists — no new folder needed.
 */
export const AUDIENCES = {
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
} as const;

export type AudienceSlug = keyof typeof AUDIENCES;
