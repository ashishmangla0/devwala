import type { Metadata } from "next";
import Link from "next/link";

import { Heading } from "@/components/heading";
import { Body } from "@/components/body";

import { SERVICES } from "./services";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <section className="block">
      <div className="container">
        <Heading as="h1">Services</Heading>

        <Body>
          Devwala partners with colleges, schools, and institutes to deliver
          industry-ready developer training — online and offline.
        </Body>

        <ul>
          {Object.entries(SERVICES).map(([slug, { title }]) => (
            <li key={slug}>
              <Link href={`/services/${slug}`}>{title}</Link>
            </li>
          ))}
        </ul>

        <Link href="/">Back to home</Link>
      </div>
    </section>
  );
}
