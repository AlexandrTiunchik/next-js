import { takeLatest, put } from 'redux-saga/effects';

import { API } from '../../services/index';
import { PUBLIC_API } from '../../constants/index';
import { FETCH_WEATHER } from './types';
import { saveWeather } from './actions';

function* loadWeather() {
  try {
    const { WEATHER } = PUBLIC_API; 
    const response = yield new API(WEATHER).withCors().get('location/44418/');
    yield put(saveWeather(response.data))
  } catch (err) {
    console.log(err)
  }
}

export default function* weatherRootSaga() {
  yield takeLatest(FETCH_WEATHER, loadWeather);
}
