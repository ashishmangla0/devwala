/**
 * Every service lives behind app/services/[service].
 * Add an entry here → the hub page lists it and /services/<slug> exists
 * automatically — no new folder needed.
 */
export const SERVICES = {
  "technical-training": {
    title: "Technical Training",
    description:
      "Hands-on programming training — languages, frameworks, and real projects — delivered online or at your campus.",
  },
  "faculty-development": {
    title: "Faculty Development Program",
    description:
      "Upskilling programs that help faculty teach modern development practices with confidence.",
  },
} as const;

export type ServiceSlug = keyof typeof SERVICES;
