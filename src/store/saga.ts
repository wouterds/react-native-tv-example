import { all, fork } from 'redux-saga/effects';

import app from './app/saga';

const sagas = [app];

const saga = function* () {
  yield all(sagas.map(fork));
};

export default saga;
