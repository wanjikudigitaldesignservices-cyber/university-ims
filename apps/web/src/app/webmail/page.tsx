import styles from '../generic.module.css';

export default function webmailPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Webmail</h1>
      <p className={styles.subtitle}>University of Nexus</p>
      
      <div className={styles.contentBox}>
        <div className={styles.icon}>✉️</div>
        <h2 className={styles.boxTitle}>Coming Soon</h2>
        <p className={styles.boxText}>We are currently building this section of the new website. Please check back later!</p>
      </div>
    </main>
  );
}
