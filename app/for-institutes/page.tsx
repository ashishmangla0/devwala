import type { Metadata } from "next";
import Link from "next/link";

import { Heading } from "@/app/components/heading";
import { Body } from "@/app/components/body";

export const metadata: Metadata = {
  title: "For Institutes",
};

export default function ForInstitutesPage() {
  return (
    <section className="block">
      <div className="container">
        <Heading as="h1">For Institutes</Heading>

        <Body>
          White-labeled technical programs and faculty support for training
          institutes.
        </Body>

        <Link href="/contact">Talk to us</Link>
      </div>
    </section>
  );
}
