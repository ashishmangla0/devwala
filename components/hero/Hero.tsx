import type { ReactNode } from "react";
import Link from "next/link";

import { Heading } from "../heading";
import { Body } from "../body";

import styles from "./hero.module.scss";

export type HeroAction = {
  href: string;
  label: string;
};

type HeroProps = {
  /** Main headline, rendered as an <h1>. */
  title: ReactNode;
  /** Supporting copy under the headline. */
  description?: ReactNode;
  /** Primary call-to-action button. */
  primaryAction?: HeroAction;
  /** Secondary call-to-action button. */
  secondaryAction?: HeroAction;
  /** Optional visual beside the copy (image, mockup, stats card…). */
  children?: ReactNode;
  className?: string;
};

export function Hero({
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
  className,
}: HeroProps) {
  const hasActions = Boolean(primaryAction || secondaryAction);

  return (
    <section className={`block ${styles.hero}`} data-testid="hero">
      <div className={`container ${styles.hero_container}`}>
        <div className={`row ${styles.hero_row}`}>
          <div className="col-md-6">
            <Heading as="h1" className={styles.hero_title}>
              {title}
            </Heading>
            <Body as="p" className={styles.hero_description}>asdfsdafd ffs f</Body>
          </div>
          <div className="col-md-6">
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
            {title}
          </div>
        </div>
      </div>
    </section>
  );
}
