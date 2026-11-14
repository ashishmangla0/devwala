import { Body } from "../body";
import { getYear } from "@/utils/date";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <section className={`${styles.footer_copyright}`}>
        <div className="container">
          <Body as="p" size="medium">
            &copy; {getYear()} My Company. All rights reserved.
          </Body>
        </div>
      </section>
    </footer>
  );
};
