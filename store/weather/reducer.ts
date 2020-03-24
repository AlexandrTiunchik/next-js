import { SAVE_WEATHER } from './types';
import IWeatherInitialState from './IReducer';

const initialState: IWeatherInitialState = {
  weather: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_WEATHER: 
      return {
        ...state,
        weather: action.payload
      }

    default:
      return state
  }
}