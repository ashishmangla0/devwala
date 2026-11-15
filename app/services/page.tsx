import type { Metadata } from "next";
import Link from "next/link";

import { Heading } from "@/components/heading";
import { Body } from "@/components/body";

export const metadata: Metadata = {
  title: "Services",
};

const SERVICES = [
  { href: "/services/technical-training", label: "Technical Training" },
  { href: "/services/faculty-development", label: "Faculty Development Program" },
];

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
          {SERVICES.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>

        <Link href="/">Back to home</Link>
      </div>
    </section>
  );
}
