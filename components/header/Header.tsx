"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { siteConfig } from "@/config/site";

import styles from "./header.module.scss";

export type NavItem = {
  href: string;
  label: string;
};

type HeaderProps = {
  /** Main navigation items; defaults to Home + About. */
  links?: NavItem[];
  /** Call-to-action button on the right. */
  cta?: NavItem;
  className?: string;
};

const DEFAULT_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
];

const DEFAULT_CTA: NavItem = { href: "/about", label: "Get started" };

export function Header({
  links = DEFAULT_LINKS,
  cta = DEFAULT_CTA,
  className,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // The eyebrow bar sits above the sticky header — watch it so the header can
  // restyle (dark green) once it has fully scrolled out of view.
  // entry === null before the first observation, so no false "scrolled" flash.
  const { entry: eyebrowEntry } = useIntersectionObserver("#site-eyebrow");
  const scrolled = eyebrowEntry !== null && !eyebrowEntry.isIntersecting;

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.header_scrolled : ""} ${className}`}
      data-testid="header"
    >
      <div className={`container ${styles.header_container}`}>
        <Link
          href="/"
          className={styles.header_brand}
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        {/* <button
          type="button"
          className={styles.header_toggle}
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className={styles.header_line} />
          <span className={styles.header_line} />
          <span className={styles.header_line} />
        </button> */}

        {/* <nav
          id="site-navigation"
          className={[
            styles.header_nav,
            open ? styles.header_nav_open : "",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-label="Primary"
        >
          <ul className={styles.header_list}>
            {links.map(({ href, label }) => {
              const active = pathname === href;

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={[
                      styles.header_link,
                      active ? styles.header_link_active : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href={cta.href}
            className={styles.header_cta}
            onClick={() => setOpen(false)}
          >
            {cta.label}
          </Link>
        </nav> */}
      </div>
    </header>
  );
}
