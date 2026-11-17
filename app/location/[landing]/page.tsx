import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Heading } from "@/components/heading";
import { Body } from "@/components/body";

import { LOCATIONS, type LocationSlug } from "./landing";

/** Prerender the known slugs at build time. */
export async function generateStaticParams() {
  return Object.keys(LOCATIONS).map((landing) => ({ landing }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ landing: string }>;
}): Promise<Metadata> {
  const { landing } = await params;
  const entry = LOCATIONS[landing as LocationSlug];

  return { title: entry?.title };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ landing: string }>;
}) {
  const { landing } = await params;
  const entry = LOCATIONS[landing as LocationSlug];

  // Unknown slug (e.g. /location/nope) → 404. dynamicParams is unavailable
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
