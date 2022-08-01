import { differenceInMilliseconds } from 'date-fns';
import { put, takeEvery } from 'redux-saga/effects';
import { fetchPopularMovies } from 'store/popular-movies/actions';
import { fetchPopularTVShows } from 'store/popular-tv-shows/actions';

import { bootstrap, bootstrapError, bootstrapSuccess } from './slice';

function* bootstrapFlow() {
  const start = new Date();

  console.log('[bootstrap] bootstrapping app');

  const fetchedPopularTVShows: boolean = yield fetchPopularTVShows();
  if (!fetchedPopularTVShows) {
    yield put(bootstrapError());
    return;
  }

  const fetchedPopularMovies: boolean = yield fetchPopularMovies();
  if (!fetchedPopularMovies) {
    yield put(bootstrapError());
    return;
  }

  yield put(bootstrapSuccess());

  console.log(
    '[bootstrap] finished bootstrapping app in',
    differenceInMilliseconds(new Date(), start),
    'ms',
  );
}

export default function* watchApp() {
  yield takeEvery(bootstrap, bootstrapFlow);
}
