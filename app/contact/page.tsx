import type { Metadata } from "next";
import Link from "next/link";

import { SocialLinks } from "@/components/socialLinks";
import { Heading } from "@/components/heading";
import { Body } from "@/components/body";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="block">
      <div className="container">
        <Heading as="h1">Contact</Heading>

        <Body>
          Have a question about a course or a partnership? Reach us on any
          channel below — we usually reply within a day.
        </Body>

        <SocialLinks />

        <Link href="/">Back to home</Link>
      </div>
    </section>
  );
}
