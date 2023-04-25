import { AxiosResponse } from 'axios';
import { differenceInMilliseconds } from 'date-fns';
import { call, put, takeEvery } from 'redux-saga/effects';
import { Api } from 'services/api';
import { AxiosFactory, normalizeResult } from 'store/utils';

import {
  fetchPopularTVShows,
  fetchPopularTVShowsError,
  fetchPopularTVShowsSuccess,
} from './slice';

const TAG = '[store/popular-tv-shows/saga]';

function* fetchPopularTVShowsFlow() {
  const start = new Date();

  console.log(TAG, 'fetching popular TV shows...');

  const response: AxiosResponse = yield call(
    Api.get,
    '/tv/popular',
    AxiosFactory.headers,
  );
  if (response.status !== 200) {
    yield put(fetchPopularTVShowsError());
    return;
  }

  if (!Array.isArray(response.data?.results)) {
    yield put(fetchPopularTVShowsError());
    return;
  }

  const data = response.data.results
    .filter((item: any) => item?.media_type !== 'person')
    .map(normalizeResult);

  yield put(fetchPopularTVShowsSuccess(data));

  console.log(
    TAG,
    'fetched popular TV shows in',
    differenceInMilliseconds(new Date(), start),
    'ms',
  );
}

export default function* watchPopularTVShows() {
  yield takeEvery(fetchPopularTVShows, fetchPopularTVShowsFlow);
}
