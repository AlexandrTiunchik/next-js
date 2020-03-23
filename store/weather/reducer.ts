import { SAVE_WEATHER } from './types';
import { IWeather } from '../../interfaces/intex';

interface IInitialState {
  weather: IWeather | null;
};

const initialState: IInitialState = {
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