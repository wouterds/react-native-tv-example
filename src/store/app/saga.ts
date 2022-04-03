import { differenceInMilliseconds } from 'date-fns';
import ms from 'ms';
import { delay, put, takeEvery } from 'redux-saga/effects';

import { bootstrap, bootstrapSuccess } from './slice';

function* bootstrapFlow() {
  const start = new Date();

  console.log('[bootstrap] bootstrapping app');

  yield delay(ms('1s'));
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
