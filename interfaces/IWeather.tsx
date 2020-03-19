interface IConsolidatedWeather {
  id: number;
  weather_state_abbr: string;
  weather_state_name: string;
  max_temp: number;
  min_temp: number;
  applicable_date: string;
  wind_speed: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

interface IWeather {
  title: string;
  location_type: string;
  timezone: string;
  consolidated_weather: IConsolidatedWeather[];
}

export default IWeather;
