import { call, put } from 'redux-saga/effects';
import { Api } from 'services/api';
import { normalizeResult } from 'store/utils/show';

import { setTopRatedTVShows } from './slice';

export function* fetchTopRatedTVShows() {
  try {
    const { data } = yield call(Api.get, '/tv/top_rated');
    if (!data?.results?.length) {
      return false;
    }

    yield put(setTopRatedTVShows(data.results.map(normalizeResult)));

    return true;
  } catch (e) {
    console.error('fetching data failed', e);
  }

  return false;
}
