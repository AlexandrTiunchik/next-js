import { Footer, Header } from '../components/index';
import styles from '../styles/about/about.module.scss';

export default function About() {
  return (
    <div className={styles.about}>
      <Header style={styles.about__header}/>
      <main className={styles.about__main}>
        <p>About page</p>
      </main>
      <Footer style={styles.about__footer} />
    </div>
  );
}
