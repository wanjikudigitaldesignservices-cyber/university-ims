import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.glow}></div>
        
        <div className={styles.content}>
          <div className={styles.badge}>Admissions Open 2026/2027</div>
          
          <h1 className={styles.title}>
            Shape the Future at<br />University of Nexus
          </h1>
          
          <p className={styles.subtitle}>
            A world-class institution dedicated to academic excellence, innovative research, 
            and creating the next generation of global leaders. Join our dynamic community today.
          </p>
          
          <div className={styles.actions}>
            <Link href="https://apply-ovtl8x9vj-wanjikudigitaldesignservices-9180s-projects.vercel.app" className={styles.primaryBtn}>
              Apply Online Today
            </Link>
            <Link href="/academics" className={styles.secondaryBtn}>
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
