import type { Metadata } from "next";
import Link from "next/link";

import { Heading } from "@/app/components/heading";
import { Body } from "@/app/components/body";

export const metadata: Metadata = {
  title: "Technical Training",
};

export default function TechnicalTrainingPage() {
  return (
    <section className="block">
      <div className="container">
        <Heading as="h1">Technical Training</Heading>

        <Body>
          Hands-on programming training — languages, frameworks, and real
          projects — delivered online or at your campus.
        </Body>

        <Link href="/services">All services</Link>
      </div>
    </section>
  );
}
