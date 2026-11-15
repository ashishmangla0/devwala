import type { Metadata } from "next";
import Link from "next/link";

import { Heading } from "@/app/components/heading";
import { Body } from "@/app/components/body";

export const metadata: Metadata = {
  title: "Faculty Development Program",
};

export default function FacultyDevelopmentPage() {
  return (
    <section className="block">
      <div className="container">
        <Heading as="h1">Faculty Development Program</Heading>

        <Body>
          Upskilling programs that help faculty teach modern development
          practices with confidence.
        </Body>

        <Link href="/services">All services</Link>
      </div>
    </section>
  );
}
