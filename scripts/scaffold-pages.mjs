import fs from 'fs';
import path from 'path';

const pages = [
  { path: 'about', title: 'About Us', icon: '🏛️' },
  { path: 'admission', title: 'Admission', icon: '🎓' },
  { path: 'academics', title: 'Academics', icon: '📚' },
  { path: 'research', title: 'Research', icon: '🔬' },
  { path: 'student-affairs', title: 'Student Affairs', icon: '🤝' },
  { path: 'privacy', title: 'Data Privacy', icon: '🔒' },
  { path: 'journal', title: 'Journal', icon: '📰' },
  { path: 'elearning', title: 'E-Learning Portal', icon: '💻' },
  { path: 'webmail', title: 'Webmail', icon: '✉️' },
  { path: 'library', title: 'Library', icon: '📖' },
  { path: 'helpdesk', title: 'Help Desk', icon: '🛠️' }
];

const basePath = path.join(process.cwd(), 'apps', 'web', 'src', 'app');

pages.forEach(p => {
  const dir = path.join(basePath, p.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const content = `import styles from '../generic.module.css';

export default function ${p.path.replace(/-/g, '')}Page() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>${p.title}</h1>
      <p className={styles.subtitle}>University of Kabianga</p>
      
      <div className={styles.contentBox}>
        <div className={styles.icon}>${p.icon}</div>
        <h2 className={styles.boxTitle}>Coming Soon</h2>
        <p className={styles.boxText}>We are currently building this section of the new website. Please check back later!</p>
      </div>
    </main>
  );
}
`;

  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
  console.log(`Created page: /${p.path}`);
});
