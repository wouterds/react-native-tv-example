import { call, put } from 'redux-saga/effects';
import { Api } from 'services/api';
import { normalizeResult } from 'store/utils/show';

import { setPopularTVShows } from './slice';

export function* fetchPopularTVShows() {
  try {
    const { data } = yield call(Api.get, '/tv/popular');
    if (!data?.results?.length) {
      return false;
    }

    yield put(setPopularTVShows(data.results.map(normalizeResult)));

    return true;
  } catch (e) {
    console.error('fetching data failed', e);
  }

  return false;
}
