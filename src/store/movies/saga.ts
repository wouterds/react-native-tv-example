import { put, takeEvery } from 'redux-saga/effects';
import { fetchPopularMoviesSuccess } from 'store/popular-movies/slice';
import { fetchTopRatedMoviesSuccess } from 'store/top-rated-movies/slice';
import { fetchTrendingTodaySuccess } from 'store/trending-today/slice';
import { Movie } from 'store/types/movie';
import { fetchUpcomingMoviesSuccess } from 'store/upcoming-movies/slice';

import { addMovies } from './slice';
import { AddMixedMoviesAction, AddMoviesAction } from './types';

function* addMoviesFlow({ payload }: AddMoviesAction) {
  yield put(addMovies(payload));
}

function* addMixedMoviesFlow({ payload }: AddMixedMoviesAction) {
  yield put(
    addMovies(payload.filter(item => item.type === 'movie') as Movie[]),
  );
}

export default function* watchPopularMovies() {
  yield takeEvery(fetchPopularMoviesSuccess, addMoviesFlow);
  yield takeEvery(fetchUpcomingMoviesSuccess, addMoviesFlow);
  yield takeEvery(fetchTopRatedMoviesSuccess, addMoviesFlow);
  yield takeEvery(fetchTrendingTodaySuccess, addMixedMoviesFlow);
}
