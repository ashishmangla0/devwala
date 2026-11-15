import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Heading } from "@/components/heading";
import { Body } from "@/components/body";

/**
 * Every audience landing page lives behind app/[audience].
 * Add an entry here → a new URL (/for-*) exists — no new folder needed.
 */
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
} as const;

type AudienceSlug = keyof typeof AUDIENCES;

/** Prerender the known slugs at build time. */
export async function generateStaticParams() {
  return Object.keys(AUDIENCES).map((audience) => ({ audience }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ audience: string }>;
}): Promise<Metadata> {
  const { audience } = await params;
  const entry = AUDIENCES[audience as AudienceSlug];

  return { title: entry?.title };
}

export default async function AudiencePage({
  params,
}: {
  params: Promise<{ audience: string }>;
}) {
  const { audience } = await params;
  const entry = AUDIENCES[audience as AudienceSlug];

  // Unknown slug (e.g. /for-anything) → 404. dynamicParams is unavailable
  // with cacheComponents, so we validate manually per the Next.js docs.
  if (!entry) notFound();

  return (
    <section className="block">
      <div className="container">
        <Heading as="h1">{entry.title}</Heading>

        <Body>{entry.description}</Body>

        <Link href="/contact">Talk to us</Link>
      </div>
    </section>
  );
}
