/**
 * Location pages served by app/location/[landing] — one entry = one URL:
 *   /location/devwala-in-palwal, /location/devwala-in-gurugram, …
 * Add a slug here and the page exists — no new folder needed.
 * (Audience pages live at the root in app/[audience].)
 */

type LocationPage = {
  title: string;
  description: string;
};

export const LOCATIONS = {
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
  "devwala-in-delhi": {
    title: "Devwala in Delhi",
    description:
      "Coding training in Delhi — live online classes and in-person mentorship for school students, college batches, and working professionals across the city.",
  },
  "devwala-in-gurugram": {
    title: "Devwala in Gurugram",
    description:
      "Devwala in Gurugram — weekday and weekend developer programs for students and career switchers, with live online access and in-person sessions in the city's tech corridor.",
  },
  "devwala-in-noida": {
    title: "Devwala in Noida",
    description:
      "Hands-on coding courses in Noida and Greater Noida — real projects, working-developer mentors, and batches timed for students and IT professionals.",
  },
  "devwala-in-ghaziabad": {
    title: "Devwala in Ghaziabad",
    description:
      "Devwala in Ghaziabad — learn to code through live online classes or in-person training, with portfolio building and interview preparation included.",
  },
  "devwala-in-sonipat": {
    title: "Devwala in Sonipat",
    description:
      "Developer training in Sonipat — classroom and online batches for students and faculty, from programming fundamentals to placement-ready projects.",
  },
  "devwala-in-rohtak": {
    title: "Devwala in Rohtak",
    description:
      "Devwala in Rohtak — structured coding programs for college students and professionals, taught live online and with periodic in-person workshops.",
  },
  "devwala-in-meerut": {
    title: "Devwala in Meerut",
    description:
      "Coding institute in Meerut — hands-on developer courses with flexible weekday and weekend batches, available online and through local sessions.",
  },
} satisfies Record<string, LocationPage>;

export type LocationSlug = keyof typeof LOCATIONS;
