import styles from '../generic.module.css';

export default function aboutPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.subtitle}>University of Kabianga</p>
      
      <div className={styles.contentBox}>
        <div className={styles.icon}>🏛️</div>
        <h2 className={styles.boxTitle}>Coming Soon</h2>
        <p className={styles.boxText}>We are currently building this section of the new website. Please check back later!</p>
      </div>
    </main>
  );
}
