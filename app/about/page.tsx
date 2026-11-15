import type { Metadata } from "next";
import Link from "next/link";

import { SocialLinks } from "@/components/socialLinks";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center gap-8 py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          About
        </h1>

        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Devwala is a place to build, share, and discover work from developers
          around the world. This page is a work in progress — tell us what you
          would like to read here.
        </p>

        <SocialLinks />

        <Link
          href="/"
          className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-5 font-medium text-zinc-950 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-[#1a1a1a]"
        >
          Back to home
        </Link>
      </main>
    </div>
  );
}
