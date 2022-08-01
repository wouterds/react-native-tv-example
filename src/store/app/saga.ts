import { differenceInMilliseconds } from 'date-fns';
import { put, takeEvery } from 'redux-saga/effects';
import { fetchPopularOnTV } from 'store/popular-on-tv/actions';

import { bootstrap, bootstrapError, bootstrapSuccess } from './slice';

function* bootstrapFlow() {
  const start = new Date();

  console.log('[bootstrap] bootstrapping app');

  const fetchedPopularOnTV: boolean = yield fetchPopularOnTV();
  if (!fetchedPopularOnTV) {
    yield put(bootstrapError());
    return;
  }

  yield put(bootstrapSuccess());

  console.log(
    '[bootstrap] finished bootstrapping app in',
    differenceInMilliseconds(new Date(), start),
    'ms',
  );
}

export default function* watchApp() {
  yield takeEvery(bootstrap, bootstrapFlow);
}
