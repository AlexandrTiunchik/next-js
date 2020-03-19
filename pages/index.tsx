import axios from 'axios';

import { Header, Footer, Logo, Card } from '../components/index';
import styles from '../styles/index/index.module.scss';
import Layout from '../containers/Layout';
import { IIndexPage } from '../interfaces/intex';

export default function Index(props: IIndexPage) {
  const { weather } = props;

  return (
    <Layout>
      <div className={styles.index}>
        <Header style={styles.index__header}>
          <Logo style={styles.index__logo}>Weather</Logo>
        </Header>
        <main className={styles.index__main}>
          
          {weather.consolidated_weather.map(item => (
            <Card
              key={item.id}
              state={item.weather_state_name}
              maxTemp={item.max_temp}
              minTemp={item.min_temp}
              date={item.applicable_date}
              image={`/icons/${item.weather_state_abbr}.svg`}
            />
          ))}

        </main>
        <Footer style={styles.index__footer} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get('https://www.metaweather.com/api/location/44418/');
  const weather = res.data;

  return {
    props: {
      weather
    }
  }
}