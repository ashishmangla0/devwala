import { SocialLinks } from '../socialLinks';
import styles from './eyebrow.module.scss';

// type EyebrowProps = {
 
// };

export function Eyebrow() {
  return (
    <section className={styles.eyebrow} data-testid="eyebrow">
      <div className={`container ${styles.eyebrow_container}`}>
        <div>1</div>


        <div className={styles.eyebrow_right}>
          <SocialLinks/>

        </div>
      </div>
     
    </section>
  );
}