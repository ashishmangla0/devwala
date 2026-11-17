import Link from "next/link";

import { HeroSection } from "@/components/herosection";
import { SOCIAL_LINKS } from "@/components/socialLinks";
import { Heading } from "@/components/heading";
import { Body } from "@/components/body";
import { Hero } from "@/components/hero";
import { siteConfig } from "@/config/site";

import { SERVICES } from "@/app/services/services";
import { AUDIENCES } from "@/app/[audience]/audiences";
import { LOCATIONS } from "@/app/location/[landing]/landing";

import styles from "./page.module.scss";

// JSON-LD: tells search & AI systems who operates this site (GEO/AIO)
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  sameAs: SOCIAL_LINKS.map(({ href }) => href),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <Hero
        eyebrow="Where Gen Z learns to code"
        title="Learn to Code. Build Real Projects. Crack Placements."
        description="Devwala trains college students, faculty, and career switchers to code — live online or in person, with small batches, mentors who actually ship code, and projects worth putting on your resume. No fluff, no theory dumps — just skills that hold up in an interview."
        primaryAction={{ href: "/contact", label: "Book a free demo" }}
        secondaryAction={{ href: "/services", label: "Explore programs" }}
      >
        <div className={styles.heroCard}>
          <Body as="p" className={styles.heroCardTitle}>
            What you get
          </Body>
          <ul className={styles.heroCardList}>
            <li>
              Live online <strong>and</strong> classroom batches — Palwal,
              Faridabad &amp; Delhi NCR
            </li>
            <li>Projects you can link in interviews, not playlists you&apos;ll never finish</li>
            <li>Mentors who are working developers</li>
            <li>Placement prep — mock interviews, resume reviews &amp; DSA practice</li>
          </ul>
        </div>
      </Hero>

      <HeroSection />

      {/* Built for students & faculty — speaks to the Gen Z audience directly */}
      <section className="block">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Heading as="h2">
                Why do students &amp; teachers pick Devwala?
              </Heading>
              <Body className={styles.sectionIntro}>
                Short answer: we teach the way Gen Z actually learns — fast,
                hands-on, and built around your timetable. Here&apos;s the
                longer answer.
              </Body>
            </div>

            <div className="col-md-6">
              <ul className={styles.reasons}>
                <li>
                  <Heading as="h3">No 40-hour playlists</Heading>
                  <Body size="medium">
                    Live sessions where you code along, ask questions in
                    real time, and actually finish what you start.
                  </Body>
                </li>
                <li>
                  <Heading as="h3">A portfolio that does the talking</Heading>
                  <Body size="medium">
                    You leave with real projects on GitHub — the thing
                    recruiters click before they read your resume.
                  </Body>
                </li>
                <li>
                  <Heading as="h3">Placement season, handled</Heading>
                  <Body size="medium">
                    Mock interviews, resume reviews, and DSA practice so
                    you walk into placements prepared, not panicked.
                  </Body>
                </li>
                <li>
                  <Heading as="h3">For teachers too</Heading>
                  <Body size="medium">
                    Faculty get curriculum-aligned workshops and lab
                    sessions — bring industry-grade teaching to your
                    campus without rewriting your syllabus.
                  </Body>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs — data from app/services/services.ts */}
      <section className="block">
        <div className="container">
          <Heading as="h2">
            Which training programs does Devwala offer?
          </Heading>
          <Body className={styles.sectionIntro}>
            Two ways to train with Devwala — pick the one that matches you or
            your institution.
          </Body>

          <div className={`row ${styles.cards}`}>
            {Object.entries(SERVICES).map(([slug, { title, description }]) => (
              <div className="col-md-6" key={slug}>
                <article className={styles.card}>
                  <Heading as="h3">{title}</Heading>
                  <Body size="medium">{description}</Body>
                  <Link href={`/services/${slug}`} className={styles.cardLink}>
                    Learn more →
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences — data from app/[audience]/audiences.ts */}
      <section className="block">
        <div className="container">
          <Heading as="h2">Who does Devwala train?</Heading>
          <Body className={styles.sectionIntro}>
            From school students to college campuses and training institutes —
            programs shaped for each audience.
          </Body>

          <div className={`row ${styles.cards}`}>
            {Object.entries(AUDIENCES).map(([slug, { title, description }]) => (
              <div className="col-md-4" key={slug}>
                <article className={styles.card}>
                  <Heading as="h3">{title}</Heading>
                  <Body size="medium">{description}</Body>
                  <Link href={`/${slug}`} className={styles.cardLink}>
                    Details →
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations — data from app/location/[landing]/landing.ts */}
      <section className="block">
        <div className="container">
          <Heading as="h2">Where is Devwala located?</Heading>
          <Body className={styles.sectionIntro}>
            Learn online from anywhere, or attend classes in person at our
            centres in Haryana and Delhi NCR.
          </Body>

          <div className={`row ${styles.cards}`}>
            {Object.entries(LOCATIONS).map(([slug, { title, description }]) => (
              <div className="col-md-4" key={slug}>
                <article className={styles.card}>
                  <Heading as="h3">{title}</Heading>
                  <Body size="medium">{description}</Body>
                  <Link
                    href={`/location/${slug}`}
                    className={styles.cardLink}
                  >
                    Visit page →
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead-gen CTA — no pricing on the site, everything drives to contact */}
      <section className="block">
        <div className="container">
          <div className={styles.ctaBand}>
            <div className={styles.ctaCopy}>
              <Heading as="h2">Your first line of code starts here</Heading>
              <Body>
                Book a free demo — tell us your goal and we&apos;ll recommend
                the right program. No commitment, no pressure.
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
