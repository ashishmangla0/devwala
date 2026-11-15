import type { Metadata } from "next";
import Link from "next/link";

import { Heading } from "@/app/components/heading";
import { Body } from "@/app/components/body";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="block">
      <div className="container">
        <Heading as="h1">Privacy Policy</Heading>

        <Body size="medium">Last updated: November 2026</Body>

        <Body>
          This policy explains what information Devwala collects when you use
          devwala.com and our online/offline classes, and how we use and
          protect it.
        </Body>

        <Heading as="h2">1. Information we collect</Heading>
        <Body>
          Information you provide directly (name, email, enrollment details)
          and data collected automatically (pages visited, browser type) used
          to improve the platform.
        </Body>

        <Heading as="h2">2. How we use your information</Heading>
        <Body>
          To deliver courses you enroll in, send course updates, respond to
          enquiries, and keep the platform secure.
        </Body>

        <Heading as="h2">3. Sharing &amp; retention</Heading>
        <Body>
          We never sell your personal data. We only share it with service
          providers needed to run Devwala, and keep it only as long as
          necessary for the purposes above.
        </Body>

        <Heading as="h2">4. Your rights</Heading>
        <Body>
          You may request a copy of your data, correction, or deletion at any
          time by contacting us through our social channels.
        </Body>

        <Link href="/">Back to home</Link>
      </div>
    </section>
  );
}
