import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { getWeather } from '../store/weather/selectors';
import { fetchWeather } from '../store/weather/actions';
 
export default function WeatherConnect(Component) {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}

const mapStateToProps = (state) => ({
  weather: getWeather(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchWeather: () => dispatch(fetchWeather()),
});
