import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Heading } from "@/components/heading";
import { Body } from "@/components/body";

import { LANDING_PAGES, type LandingSlug } from "./landing";

/** Prerender the known slugs at build time. */
export async function generateStaticParams() {
  return Object.keys(LANDING_PAGES).map((landing) => ({ landing }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ landing: string }>;
}): Promise<Metadata> {
  const { landing } = await params;
  const entry = LANDING_PAGES[landing as LandingSlug];

  return { title: entry?.title };
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ landing: string }>;
}) {
  const { landing } = await params;
  const entry = LANDING_PAGES[landing as LandingSlug];

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
