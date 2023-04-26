import { AxiosResponse } from 'axios';
import { formatDistanceToNowStrict } from 'date-fns';
import { call, put, takeEvery } from 'redux-saga/effects';
import { Api } from 'services/api';
import { AxiosFactory, Normalizer } from 'store/utils';

import {
  fetchTrendingToday,
  fetchTrendingTodayError,
  fetchTrendingTodaySuccess,
} from './slice';

const TAG = '[store/trending-today/saga]';

function* fetchTrendingTodayFlow() {
  const start = new Date();

  console.log(TAG, 'fetching trending today...');

  const response: AxiosResponse = yield call(Api.get, '/trending/all/day', {
    headers: { ...AxiosFactory.headers },
  });
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
    .map(Normalizer.result);

  yield put(fetchTrendingTodaySuccess(data));

  console.log(
    TAG,
    `fetched trending today in ${formatDistanceToNowStrict(start)}`,
  );
}

export default function* watchTrendingToday() {
  yield takeEvery(fetchTrendingToday, fetchTrendingTodayFlow);
}
