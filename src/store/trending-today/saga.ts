import { AxiosResponse } from 'axios';
import { differenceInMilliseconds } from 'date-fns';
import { call, put, takeEvery } from 'redux-saga/effects';
import { Api } from 'services/api';
import { AxiosFactory, normalizeResult } from 'store/utils';

import {
  fetchTrendingToday,
  fetchTrendingTodayError,
  fetchTrendingTodaySuccess,
} from './slice';

const TAG = '[store/trending-today/saga]';

function* fetchTrendingTodayFlow() {
  const start = new Date();

  console.log(TAG, 'fetching trending today...');

  const response: AxiosResponse = yield call(
    Api.get,
    '/trending/all/day',
    AxiosFactory.headers,
  );
  if (response.status !== 200) {
    yield put(fetchTrendingTodayError());
    return;
  }

  if (!Array.isArray(response.data?.results)) {
    yield put(fetchTrendingTodayError());
    return;
  }

  const data = response.data.results
    .filter((item: any) => item?.media_type !== 'person')
    .map(normalizeResult);

  yield put(fetchTrendingTodaySuccess(data));

  console.log(
    TAG,
    'fetched trending today in',
    differenceInMilliseconds(new Date(), start),
    'ms',
  );
}

export default function* watchTrendingToday() {
  yield takeEvery(fetchTrendingToday, fetchTrendingTodayFlow);
}
