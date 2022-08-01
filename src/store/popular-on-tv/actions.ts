import Config from 'react-native-config';
import { call, put } from 'redux-saga/effects';
import { Api } from 'services/api';

import { setPopularOnTV } from './slice';
import { Show } from './types';

const normalizeResult = (item: any): Show => {
  return {
    ...item,
    poster_url: Config.IMAGE_BASE_URL + item.poster_path,
    backdrop_url: Config.IMAGE_BASE_URL + item.backdrop_path,
  };
};

export function* fetchPopularOnTV() {
  try {
    const { data } = yield call(Api.get, '/tv/popular');
    if (!data?.results?.length) {
      return false;
    }

    yield put(setPopularOnTV(data.results.map(normalizeResult)));

    return true;
  } catch (e) {
    console.error('fetching data failed', e);
  }

  return false;
}
