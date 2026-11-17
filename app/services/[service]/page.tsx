import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Heading } from "@/components/heading";
import { Body } from "@/components/body";

import { SERVICES, type ServiceSlug } from "../services";

/** Prerender the known slugs at build time. */
export async function generateStaticParams() {
  return Object.keys(SERVICES).map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const entry = SERVICES[service as ServiceSlug];

  return { title: entry?.title };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const entry = SERVICES[service as ServiceSlug];

  // Unknown slug (e.g. /services/nope) → 404. dynamicParams is unavailable
  // with cacheComponents, so we validate manually per the Next.js docs.
  if (!entry) notFound();

  return (
    <section className="block">
      <div className="container">
        <Heading as="h1">{entry.title}</Heading>

        <Body>{entry.description}</Body>

        <Link href="/services">All services</Link>
      </div>
    </section>
  );
}
