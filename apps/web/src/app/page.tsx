import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image 
            src="/images/hero_bg.jpg" 
            alt="Beautiful university campus" 
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.glow}></div>
        
        <div className={styles.content}>
          <div className={styles.badge}>Admissions Open 2026/2027</div>
          
          <h1 className={styles.title}>
            Shape the Future at<br />
            <span className={styles.titleHighlight}>Nexus University</span>
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

      {/* Discover Section */}
      <section className={styles.discover}>
        <div className={styles.discoverContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Discover Nexus</h2>
            <p className={styles.sectionSubtitle}>
              Experience a vibrant community where cutting-edge technology meets 
              rich academic traditions, designed to empower you for the global stage.
            </p>
          </div>

          <div className={styles.grid}>
            {/* Student Life Card */}
            <div className={styles.card}>
              <Image 
                src="/images/student_life.jpg" 
                alt="Students collaborating" 
                fill
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>Vibrant Student Life</h3>
                <p className={styles.cardText}>
                  Join diverse clubs, access modern libraries, and collaborate in 
                  world-class innovation hubs.
                </p>
              </div>
            </div>

            {/* Campus Card */}
            <div className={styles.card}>
              <Image 
                src="/images/campus.jpg" 
                alt="Futuristic science building" 
                fill
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>State-of-the-Art Facilities</h3>
                <p className={styles.cardText}>
                  Our architectural marvels aren't just beautiful—they are equipped 
                  with the latest research tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
