import type { Metadata } from "next";
import Link from "next/link";

import { Heading } from "@/components/heading";
import { Body } from "@/components/body";

import { COURSES, LEVELS, type CourseLevel } from "./courses";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "14 hands-on HTML5 and CSS3 courses — from your first tag to a deployed portfolio site. Learn online or in person at Devwala.",
};

const courseCount = Object.keys(COURSES).length;

export default function CoursesPage() {
  return (
    <>
      <section className="block">
        <div className="container">
          <Heading as="h1">HTML5 &amp; CSS3 Courses</Heading>
          <Body className={styles.lead}>
            {courseCount} hands-on web development courses — from your first
            HTML tag to a deployed portfolio site. Every course is
            project-based, with live teaching online or in person.
          </Body>
        </div>
      </section>

      {LEVELS.map(({ key, heading, blurb }) => {
        const courses = Object.entries(COURSES).filter(
          ([, course]) => course.level === (key as CourseLevel),
        );

        return (
          <section className="block" key={key}>
            <div className="container">
              <Heading as="h2">{heading}</Heading>
              <Body className={styles.sectionIntro}>{blurb}</Body>

              <div className={`row ${styles.cards}`}>
                {courses.map(([slug, { title, description, skills }]) => (
                  <div className="col-md-4" key={slug}>
                    <article className={styles.card}>
                      <Heading as="h3">{title}</Heading>
                      <Body size="medium">{description}</Body>
                      <Body size="small" className={styles.cardMeta}>
                        {skills.length} topics
                      </Body>
                      <Link href={`/courses/${slug}`} className={styles.cardLink}>
                        Course details →
                      </Link>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Lead-gen CTA — no pricing anywhere on the site */}
      <section className="block">
        <div className="container">
          <div className={styles.ctaBand}>
            <div className={styles.ctaCopy}>
              <Heading as="h2">Not sure which course fits you?</Heading>
              <Body>
                Book a free demo — tell us your goal and we&apos;ll recommend
                the right starting point. No commitment, no pressure.
              </Body>
            </div>
            <Link href="/contact" className={styles.ctaButton}>
              Book a free demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
