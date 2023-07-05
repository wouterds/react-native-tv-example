import { AxiosResponse } from 'axios';
import { formatDistanceToNowStrict } from 'date-fns';
import { call, put, takeEvery } from 'redux-saga/effects';
import { Api } from 'services/api';
import { Movie } from 'store/types/movie';
import { Normalizer } from 'store/utils';

import {
  fetchUpcomingMovies,
  fetchUpcomingMoviesError,
  fetchUpcomingMoviesSuccess,
} from './slice';

const TAG = '[store/upcoming-movies/saga]';

function* fetchUpcomingMoviesFlow() {
  const start = new Date();

  console.log(TAG, 'fetching upcoming movies...');

  const response: AxiosResponse = yield call(Api.get, '/movie/upcoming');
  if (response.status !== 200) {
    yield put(fetchUpcomingMoviesError());
    return;
  }

  if (!Array.isArray(response.data?.results)) {
    yield put(fetchUpcomingMoviesError());
    return;
  }

  const data = response.data.results
    .map(Normalizer.movie)
    .filter(Boolean)
    .filter((item: Movie) => new Date(item.release_date) > new Date());

  yield put(fetchUpcomingMoviesSuccess(data));

  console.log(
    TAG,
    `fetched upcoming movies in ${formatDistanceToNowStrict(start)}`,
  );
}

export default function* watchUpcomingMovies() {
  yield takeEvery(fetchUpcomingMovies, fetchUpcomingMoviesFlow);
}
