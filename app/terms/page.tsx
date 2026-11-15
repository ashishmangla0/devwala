import type { Metadata } from "next";
import Link from "next/link";

import { Heading } from "@/components/heading";
import { Body } from "@/components/body";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <section className="block">
      <div className="container">
        <Heading as="h1">Terms &amp; Conditions</Heading>

        <Body size="medium">Last updated: November 2026</Body>

        <Body>
          Welcome to Devwala. By accessing or using devwala.com — including our
          online courses and offline classes — you agree to these terms. Please
          read them carefully.
        </Body>

        <Heading as="h2">1. Use of the platform</Heading>
        <Body>
          You agree to use Devwala for lawful learning purposes only. You are
          responsible for maintaining the confidentiality of your account and
          for all activity that happens under it.
        </Body>

        <Heading as="h2">2. Courses &amp; enrollments</Heading>
        <Body>
          Course content, schedules, and pricing may change over time. Details
          of your enrollment, fees, and refund eligibility will be confirmed at
          the time of registration.
        </Body>

        <Heading as="h2">3. Intellectual property</Heading>
        <Body>
          All course materials, videos, and code samples belong to Devwala or
          its instructors and may not be redistributed without permission.
        </Body>

        <Heading as="h2">4. Contact</Heading>
        <Body>
          Questions about these terms? Reach us through any of our social
          channels linked in the header.
        </Body>

        <Link href="/">Back to home</Link>
      </div>
    </section>
  );
}
