import { Heading } from "../heading";
import { Body } from "../body";

import styles from "./herosection.module.scss";

const STEPS = [
  {
    title: "Tell us your goal",
    text: "Book a free demo call. Whether you're a student, a career switcher, or faculty — we recommend a path that fits your schedule.",
  },
  {
    title: "Learn your way",
    text: "Join live online sessions or attend classes in person, on weekdays or weekends. Same syllabus, same mentors — your choice of room.",
  },
  {
    title: "Build real projects",
    text: "Finish with a portfolio of projects you can show, plus portfolio reviews and interview preparation.",
  },
];

export const HeroSection = () => {
  return (
    <section className={`block block--hero ${styles.herosection}`}>
      <div className="block_container container">
        <div className="row">
          <div className="col-md-6">
            <Heading as="h2">How does learning at Devwala work?</Heading>
            <Body className={styles.intro}>
              No endless video playlists. Devwala combines live teaching with
              hands-on building — online or at our centres — so you leave with
              code you wrote, not certificates you watched.
            </Body>
          </div>

          <div className="col-md-6">
            <ol className={styles.steps}>
              {STEPS.map(({ title, text }) => (
                <li key={title}>
                  <Heading as="h3">{title}</Heading>
                  <Body size="medium">{text}</Body>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
