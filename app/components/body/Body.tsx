import type { ElementType, HTMLAttributes, ReactNode } from "react";

import styles from "./body.module.scss";

type BodyProps = HTMLAttributes<HTMLElement> & {
  /** Element to render. Defaults to "p". */
  as?: "p" | "span" | "div";
  children: ReactNode;
};

export function Body({
  as: Tag = "p",
  children,
  className,
  ...props
}: BodyProps) {
  const Element = Tag as ElementType;

  return (
    <Element
      {...props}
      className={[styles.body, className].filter(Boolean).join(" ")}
    >
      {children}
    </Element>
  );
}
