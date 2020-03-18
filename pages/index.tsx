import { Header, Footer } from '../components/index';
import styles from '../styles/index/index.module.scss'

export default function Index() {
  return (
    <div className={styles.index}>
      <Header style={styles.index__header} />
      <main className={styles.index__main}></main>
      <Footer style={styles.index__footer} />
    </div>
  );
}
