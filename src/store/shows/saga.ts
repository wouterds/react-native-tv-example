import { put, takeEvery } from 'redux-saga/effects';
import { fetchPopularTVShowsSuccess } from 'store/popular-tv-shows/slice';
import { fetchTopRatedTVShowsSuccess } from 'store/top-rated-tv-shows/slice';
import { fetchTrendingTodaySuccess } from 'store/trending-today/slice';
import { Show } from 'store/types/show';

import { addShows } from './slice';
import { AddMixedShowsAction, AddShowsAction } from './types';

function* addShowsFlow({ payload }: AddShowsAction) {
  yield put(addShows(payload));
}

function* addMixedShowsFlow({ payload }: AddMixedShowsAction) {
  yield put(addShows(payload.filter(item => item.type === 'show') as Show[]));
}

export default function* watchPopularShows() {
  yield takeEvery(fetchPopularTVShowsSuccess, addShowsFlow);
  yield takeEvery(fetchTopRatedTVShowsSuccess, addShowsFlow);
  yield takeEvery(fetchTrendingTodaySuccess, addMixedShowsFlow);
}
