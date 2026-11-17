import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Heading } from "@/components/heading";
import { Body } from "@/components/body";

import { AUDIENCES, type AudienceSlug } from "./audiences";

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
