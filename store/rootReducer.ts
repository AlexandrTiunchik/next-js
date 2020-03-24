import { combineReducers } from 'redux';

import weatherReducer from './weather/reducer';
import IRootReducer from './IRootReducer';

export default combineReducers<IRootReducer>({
  weatherReducer,
});
