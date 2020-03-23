import IWeather from './IWeather';

interface IWeatherPage {
  weather: IWeather;
  fetchWeather(): IWeather;
}

export default IWeatherPage;
