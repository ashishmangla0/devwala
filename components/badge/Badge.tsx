import type { ReactNode } from "react";

import styles from "./badge.module.scss";

type BadgeProps = {
  /** Label text. */
  children?: ReactNode;
  className?: string;
};

/**
 * Small decorative label — lime circle + two dark half-circles, then bold text.
 * The marks are drawn entirely in CSS (::before / ::after + box-shadow),
 * so the markup is a single empty span.
 */
export function Badge({
  children = "Elevate Your Brand With Us",
  className="",
}: BadgeProps) {
  return (
    <span
      className={`${styles.badge} ${className}`.trim()}
      data-testid="badge"
    >
      <span className={styles.badge_marks} aria-hidden="true" />
      {children}
    </span>
  );
}
