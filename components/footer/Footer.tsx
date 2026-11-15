import Link from "next/link";

import { Body } from "../body";
import { getYear } from "@/utils/date";
import styles from "./footer.module.scss";

const LEGAL_LINKS = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer_copyright}>
        <div className={`container ${styles.footer_copyright_container}`}>
          <Body as="p" size="medium" className={styles.footer_text}>
            &copy; {getYear()} My Company. All rights reserved.
          </Body>

          <nav className={styles.footer_links} aria-label="Legal">
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={styles.footer_link}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </footer>
  );
};
