import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Heading } from "@/components/heading";
import { Body } from "@/components/body";
import { Badge } from "@/components/badge";

import { COURSES, LEVELS, type CourseSlug } from "../courses";

import styles from "./page.module.scss";

/** Prerender the known slugs at build time. */
export async function generateStaticParams() {
  return Object.keys(COURSES).map((course) => ({ course }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string }>;
}): Promise<Metadata> {
  const { course } = await params;
  const entry = COURSES[course as CourseSlug];

  return { title: entry?.title, description: entry?.description };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  const entry = COURSES[course as CourseSlug];

  // Unknown slug → 404. dynamicParams is unavailable with cacheComponents,
  // so we validate manually per the Next.js docs.
  if (!entry) notFound();

  const level = LEVELS.find(({ key }) => key === entry.level);

  return (
    <>
      <section className="block">
        <div className="container">
          <div className={styles.head}>
            <Badge>{level?.label ?? entry.level} course</Badge>
            <Heading as="h1">{entry.title}</Heading>
            <Body className={styles.lead}>{entry.description}</Body>
          </div>

          <div className={`row ${styles.body}`}>
            <div className="col-md-7">
              <Heading as="h2">What you&apos;ll learn</Heading>
              <ul className={styles.skills}>
                {entry.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="col-md-5">
              <aside className={styles.aside}>
                <Heading as="h3">How this course runs</Heading>
                <Body size="medium">
                  Live sessions — online or at our centres in Palwal,
                  Faridabad &amp; Delhi NCR. Small batches, real projects, and
                  mentors who write code for a living.
                </Body>
                <Link href="/contact" className={styles.asideCta}>
                  Book a free demo
                </Link>
                <Link href="/courses" className={styles.backLink}>
                  ← All courses
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
