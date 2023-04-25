import { all, fork } from 'redux-saga/effects';

import app from './app/saga';
import trendingToday from './trending-today/saga';

const sagas = [app, trendingToday];

const saga = function* () {
  yield all(sagas.map(fork));
};

export default saga;
