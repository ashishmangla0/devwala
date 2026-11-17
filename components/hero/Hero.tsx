import type { ReactNode } from "react";
import Link from "next/link";

import { Heading } from "../heading";
import { Body } from "../body";
import { Badge } from "../badge";

import styles from "./hero.module.scss";

export type HeroAction = {
  href: string;
  label: string;
};

type HeroProps = {
  /** Small label rendered above the headline. */
  eyebrow?: ReactNode;
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
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
  className,
}: HeroProps) {
  const hasActions = Boolean(primaryAction || secondaryAction);

  return (
    <section
      className={[`block ${styles.hero}`, className].filter(Boolean).join(" ")}
      data-testid="hero"
    >
      <div className={`container ${styles.hero_container}`}>
        <div className={`row ${styles.hero_row}`}>
          <div className="col-md-6">
            <div className={styles.hero_content}>
              {eyebrow && <Badge>{eyebrow}</Badge>}

              <Heading as="h1" className={styles.hero_title}>
                {title}
              </Heading>

              {description && (
                <Body as="p" className={styles.hero_description}>
                  {description}
                </Body>
              )}

              {hasActions && (
                <div className={styles.hero_actions}>
                  {primaryAction && (
                    <Link
                      href={primaryAction.href}
                      className={`${styles.hero_button} ${styles.hero_button_primary}`}
                    >
                      {primaryAction.label}
                    </Link>
                  )}
                  {secondaryAction && (
                    <Link
                      href={secondaryAction.href}
                      className={`${styles.hero_button} ${styles.hero_button_secondary}`}
                    >
                      {secondaryAction.label}
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="col-md-6">{children}</div>
        </div>
      </div>
    </section>
  );
}
