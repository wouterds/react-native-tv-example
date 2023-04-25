import { call, put } from 'redux-saga/effects';
import { Api } from 'services/api';
import { normalizeResult } from 'store/utils';

import { setPopularMovies } from './slice';

export function* fetchPopularMovies() {
  try {
    const { data } = yield call(Api.get, '/movie/popular');
    if (!data?.results?.length) {
      return false;
    }

    yield put(setPopularMovies(data.results.map(normalizeResult)));

    return true;
  } catch (e) {
    console.error('fetching data failed', e);
  }

  return false;
}
