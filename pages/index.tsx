import { Header, Footer, Logo, ImageCard } from '../components/index';
import styles from '../styles/index/index.module.scss';
import Layout from '../containers/Layout';
import { IIndexPage } from '../interfaces/intex';
import { MENU } from '../constants/index';
import { navigate } from '../helpers/index';

export default function Index(props: IIndexPage) {
  const { navigateTo } = navigate;

  return (
    <Layout>
      <div className={styles.index}>
        <Header style={styles.index__header}>
          <Logo style={styles.index__logo}>Menu</Logo>
        </Header>
        <main className={styles.index__main}>
          <div className={styles['menu-navigation']}>
            {MENU.map((item, key) => (
              <ImageCard
                onClick={navigateTo(`/${item.URL}`)}
                key={key}
                img={item.IMAGE}
                desc={item.desc}
              />
            ))}
          </div>
        </main>
        <Footer style={styles.index__footer}>
          <h5>Developed by Alexander Tiunchik</h5>
          <span>NextJS - 9.3.1</span>
        </Footer>
      </div>
    </Layout>
  );
}
