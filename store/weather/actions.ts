import { FETCH_WEATHER, SAVE_WEATHER } from './types';

export function saveWeather(payload) {
  return {
    type: SAVE_WEATHER,
    payload,
  }
}

export function fetchWeather() {
  return {
    type: FETCH_WEATHER,
  }
}
