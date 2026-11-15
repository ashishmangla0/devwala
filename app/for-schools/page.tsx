import type { Metadata } from "next";
import Link from "next/link";

import { Heading } from "@/app/components/heading";
import { Body } from "@/app/components/body";

export const metadata: Metadata = {
  title: "For Schools",
};

export default function ForSchoolsPage() {
  return (
    <section className="block">
      <div className="container">
        <Heading as="h1">For Schools</Heading>

        <Body>
          Age-appropriate coding fundamentals that build confidence early —
          available online and on campus.
        </Body>

        <Link href="/contact">Talk to us</Link>
      </div>
    </section>
  );
}
