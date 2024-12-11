import styles from './AppBundle.module.css';
import img1 from '../assets/icons/1.jpg';
import img2 from '../assets/icons/2.jpg';
import img3 from '../assets/icons/3.jpg';
import img4 from '../assets/icons/4.jpg';

export default function AppBundle() {
  return (
    <div className={styles.container}>
      <div className={styles.AppBundle}>
        <img src={img1} alt="Icon 1" />
        <img src={img2} alt="Icon 2" />
        <img src={img3} alt="Icon 3" />
        <img src={img4} alt="Icon 4" />
      </div>
      <div className={styles.box}>
        <div className={styles.title}>This Week's Recommended Apps</div>
        <div className={`${styles.wave} ${styles['-one']}`}></div>
        <div className={`${styles.wave} ${styles['-two']}`}></div>
        <div className={`${styles.wave} ${styles['-three']}`}></div>
      </div>
    </div>
  );
}
