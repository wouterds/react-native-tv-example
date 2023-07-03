import { put, takeEvery } from 'redux-saga/effects';
import { fetchPopularMoviesSuccess } from 'store/popular-movies/slice';
import { fetchTopRatedMoviesSuccess } from 'store/top-rated-movies/slice';
import { fetchUpcomingMoviesSuccess } from 'store/upcoming-movies/slice';

import { addMovies } from './slice';
import { AddMoviesAction } from './types';

function* addMoviesFlow({ payload }: AddMoviesAction) {
  yield put(addMovies(payload));
}

export default function* watchPopularMovies() {
  yield takeEvery(fetchPopularMoviesSuccess, addMoviesFlow);
  yield takeEvery(fetchUpcomingMoviesSuccess, addMoviesFlow);
  yield takeEvery(fetchTopRatedMoviesSuccess, addMoviesFlow);
}
