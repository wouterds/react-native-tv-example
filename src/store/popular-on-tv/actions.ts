import { call, put } from 'redux-saga/effects';
import { Api } from 'services/api';

import { setPopularOnTV } from './slice';

export function* fetchPopularOnTV() {
  try {
    const { data } = yield call(Api.get, '/tv/popular');
    if (!data?.results?.length) {
      return false;
    }

    yield put(setPopularOnTV(data.results));

    return true;
  } catch (e) {
    console.error('fetching data failed', e);
  }

  return false;
}
