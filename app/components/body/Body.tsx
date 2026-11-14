import type { ElementType, HTMLAttributes, ReactNode } from "react";

import styles from "./body.module.scss";

type BodyProps = HTMLAttributes<HTMLElement> & {
  /** Element to render. Defaults to "p". */
  as?: "p" | "span" | "div";
  /** Font size: "normal" = 1rem, "medium" = 14px, "small" = 12px. */
  size?: "normal" | "medium" | "small";
  children: ReactNode;
};

export function Body({
  as: Tag = "p",
  size="normal",
  children,
  className="",
  ...props
}: BodyProps) {
  const Element = Tag as ElementType;
  const sizeClass = styles[`body_${size}`];

  return (
    <Element
      {...props}
      className={`${styles.body} ${sizeClass} ${className}`}
    >
      {children}
    </Element>
  );
}
