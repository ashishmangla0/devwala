import { SocialLinks } from "../socialLinks";
import styles from "./eyebrow.module.scss";

// type EyebrowProps = {

// };

export function Eyebrow() {
  return (
    <section id="site-eyebrow" className={styles.eyebrow} data-testid="eyebrow">
      <div className={`container ${styles.eyebrow_container}`}>
        <nav className={styles.eyebrow_left}>
          <a href="tel:+911234567890" rel="noopener noreferrer" className={styles.eyebrow_link}>
            <span className="icon-phone"></span>
            (+91) 1234567890
          </a>
          <a href="mailto:contact@devwala.com" rel="noopener noreferrer" className={styles.eyebrow_link}>
            <span className="icon-mail-alt"></span>
            contact@devwala.com
          </a>
          <a href="maps.google.com" target="_blank" rel="noopener noreferrer" className={styles.eyebrow_link}>
            <span className="icon-location"></span>
            102, mangla tower, palwal
          </a>
        </nav>

        <div className={styles.eyebrow_right}>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
