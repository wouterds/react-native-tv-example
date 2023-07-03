import { AxiosResponse } from 'axios';
import { formatDistanceToNowStrict } from 'date-fns';
import { call, put, takeEvery } from 'redux-saga/effects';
import { Api } from 'services/api';
import { Normalizer } from 'store/utils';

import {
  fetchTopRatedTVShows,
  fetchTopRatedTVShowsError,
  fetchTopRatedTVShowsSuccess,
} from './slice';

const TAG = '[store/top-rated-tv-shows/saga]';

function* fetchTopRatedTVShowsFlow() {
  const start = new Date();

  console.log(TAG, 'fetching top rated TV shows...');

  const response: AxiosResponse = yield call(Api.get, '/tv/top_rated');
  if (response.status !== 200) {
    yield put(fetchTopRatedTVShowsError());
    return;
  }

  if (!Array.isArray(response.data?.results)) {
    yield put(fetchTopRatedTVShowsError());
    return;
  }

  const data = response.data.results.map(Normalizer.show);

  yield put(fetchTopRatedTVShowsSuccess(data));

  console.log(
    TAG,
    `fetched top rated TV shows in ${formatDistanceToNowStrict(start)}`,
  );
}

export default function* watchTopRatedTVShows() {
  yield takeEvery(fetchTopRatedTVShows, fetchTopRatedTVShowsFlow);
}
