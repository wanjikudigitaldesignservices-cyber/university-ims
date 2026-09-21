import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <Link href="/privacy" className={styles.topbarLink}>Data Privacy</Link>
        <Link href="/journal" className={styles.topbarLink}>Journal</Link>
        <Link href="/elearning" className={styles.topbarLink}>E-Learning</Link>
        <Link href="/webmail" className={styles.topbarLink}>Webmail</Link>
        <Link href="https://portal-iz6dio4vl-wanjikudigitaldesignservices-9180s-projects.vercel.app" className={styles.topbarLink}>Student/Staff Portal</Link>
        <Link href="/library" className={styles.topbarLink}>Library</Link>
        <Link href="/helpdesk" className={styles.topbarLink}>Help Desk</Link>
      </div>
      
      <nav className={styles.navbar}>
        <Link href="/" className={styles.brand}>
          <div className={styles.logoIcon}>K</div>
          University of Nexus
        </Link>
        
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navItem}>HOME</Link>
          <Link href="/about" className={styles.navItem}>ABOUT US</Link>
          <Link href="/admission" className={styles.navItem}>ADMISSION</Link>
          <Link href="/academics" className={styles.navItem}>ACADEMICS</Link>
          <Link href="/research" className={styles.navItem}>RESEARCH</Link>
          <Link href="/student-affairs" className={styles.navItem}>STUDENT AFFAIRS</Link>
          
          <Link href="https://apply-ovtl8x9vj-wanjikudigitaldesignservices-9180s-projects.vercel.app" className={styles.ctaButton}>
            APPLY ONLINE
          </Link>
        </div>
      </nav>
    </header>
  );
}
