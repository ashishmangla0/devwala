import type { Metadata } from "next";
import Link from "next/link";

import { Heading } from "@/components/heading";
import { Body } from "@/components/body";

export const metadata: Metadata = {
  title: "For Colleges",
};

export default function ForCollegesPage() {
  return (
    <section className="block">
      <div className="container">
        <Heading as="h1">For Colleges</Heading>

        <Body>
          Curriculum-aligned developer training, workshops, and placement
          preparation for college students.
        </Body>

        <Link href="/contact">Talk to us</Link>
      </div>
    </section>
  );
}
