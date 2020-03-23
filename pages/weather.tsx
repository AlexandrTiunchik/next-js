import { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Header, Footer, Logo, Card } from '../components/index';
import styles from '../styles/index/index.module.scss';
import Layout from '../containers/Layout';
import { fetchWeather } from '../store/weather/actions';
import { getWeather } from '../store/weather/selectors';
import { IWeatherPage } from '../interfaces/intex';

function Weather(props: IWeatherPage) {
  const { fetchWeather, weather } = props;

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <Layout>
      <div className={styles.index}>
        <Header style={styles.index__header}>
          <Logo style={styles.index__logo}>Weather</Logo>
        </Header>
        <main className={styles.index__main}>
          {weather && weather.consolidated_weather.map(item => (
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
        <Footer style={styles.index__footer}>
          <h5>Developed by Alexander Tiunchik</h5>
          <span>NextJS - 9.3.1</span>
        </Footer>
      </div>
    </Layout>
  );
}

const mapStateToPrope = (state) => ({
  weather: getWeather(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchWeather: () => dispatch(fetchWeather()),
});

export default connect(mapStateToPrope, mapDispatchToProps)(Weather);
