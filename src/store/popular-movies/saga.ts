import { AxiosResponse } from 'axios';
import { differenceInMilliseconds } from 'date-fns';
import { call, put, takeEvery } from 'redux-saga/effects';
import { Api } from 'services/api';
import { AxiosFactory, normalizeResult } from 'store/utils';

import {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
} from './slice';

const TAG = '[store/popular-movies/saga]';

function* fetchPopularMoviesFlow() {
  const start = new Date();

  console.log(TAG, 'fetching popular movies...');

  const response: AxiosResponse = yield call(
    Api.get,
    '/movie/popular',
    AxiosFactory.headers,
  );
  if (response.status !== 200) {
    yield put(fetchPopularMoviesError());
    return;
  }

  if (!Array.isArray(response.data?.results)) {
    yield put(fetchPopularMoviesError());
    return;
  }

  const data = response.data.results
    .filter((item: any) => item?.media_type !== 'person')
    .map(normalizeResult);

  yield put(fetchPopularMoviesSuccess(data));

  console.log(
    TAG,
    'fetched popular movies in',
    differenceInMilliseconds(new Date(), start),
    'ms',
  );
}

export default function* watchPopularMovies() {
  yield takeEvery(fetchPopularMovies, fetchPopularMoviesFlow);
}
