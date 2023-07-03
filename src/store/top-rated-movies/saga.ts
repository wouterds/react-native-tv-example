import { AxiosResponse } from 'axios';
import { formatDistanceToNowStrict } from 'date-fns';
import { call, put, takeEvery } from 'redux-saga/effects';
import { Api } from 'services/api';
import { Normalizer } from 'store/utils';

import {
  fetchTopRatedMovies,
  fetchTopRatedMoviesError,
  fetchTopRatedMoviesSuccess,
} from './slice';

const TAG = '[store/topRated-movies/saga]';

function* fetchTopRatedMoviesFlow() {
  const start = new Date();

  console.log(TAG, 'fetching top rated movies...');

  const response: AxiosResponse = yield call(Api.get, '/movie/top_rated');
  if (response.status !== 200) {
    yield put(fetchTopRatedMoviesError());
    return;
  }

  if (!Array.isArray(response.data?.results)) {
    yield put(fetchTopRatedMoviesError());
    return;
  }

  const data = response.data.results.map(Normalizer.movie);

  yield put(fetchTopRatedMoviesSuccess(data));

  console.log(
    TAG,
    `fetched top rated movies in ${formatDistanceToNowStrict(start)}`,
  );
}

export default function* watchTopRatedMovies() {
  yield takeEvery(fetchTopRatedMovies, fetchTopRatedMoviesFlow);
}
