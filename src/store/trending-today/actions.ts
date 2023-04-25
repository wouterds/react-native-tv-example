import { call, put } from 'redux-saga/effects';
import { Api } from 'services/api';
import { normalizeResult } from 'store/utils/show';

import { setTrendingToday } from './slice';

export function* fetchTrendingToday() {
  try {
    const { data } = yield call(Api.get, '/trending/all/day');
    if (!data?.results?.length) {
      return false;
    }

    yield put(
      setTrendingToday(
        data.results
          // filter out persons
          .filter((item: any) => item?.media_type !== 'person')
          .map(normalizeResult),
      ),
    );

    return true;
  } catch (e) {
    console.error('fetching data failed', e);
  }

  return false;
}
