import { all, fork } from 'redux-saga/effects';

import app from './app/saga';
import popularTVShows from './popular-tv-shows/saga';
import trendingToday from './trending-today/saga';

const sagas = [app, trendingToday, popularTVShows];

const saga = function* () {
  yield all(sagas.map(fork));
};

export default saga;
