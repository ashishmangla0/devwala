import type { ElementType, HTMLAttributes, ReactNode } from "react";

import styles from "./heading.module.scss";

export type TextLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TextProps = HTMLAttributes<HTMLElement> & {
  /** Heading level to render. Defaults to "h2". */
  as?: TextLevel;
  children: ReactNode;
};

export function Heading({
  as: level = "h2",
  children,
  className,
  ...props
}: TextProps) {
  const Tag = level as ElementType;

  return (
    <Tag
      {...props}
      data-level={level}
      className={[styles.text, className].filter(Boolean).join(" ")}
    >
      {children}
    </Tag>
  );
}
