"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header
      className={[styles.header, className].filter(Boolean).join(" ")}
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

        <button
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
        </button>

        <nav
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
        </nav>
      </div>
    </header>
  );
}
