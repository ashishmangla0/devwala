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
        eyebrow="Online & offline developer learning"
        title="Learn to Code Your Way — Anywhere"
        description="Devwala is a developer learning platform where you train live online or in person — small batches, real projects, and mentors who write code for a living. New to programming or switching careers, we'll map a path to your goal."
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
            <li>Courses built around real projects, not video playlists</li>
            <li>Mentors who are working developers</li>
            <li>Portfolio reviews and interview preparation</li>
          </ul>
        </div>
      </Hero>

      <HeroSection />

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
              <Heading as="h2">Ready to learn to code?</Heading>
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
