import { all, fork } from 'redux-saga/effects';

import app from './app/saga';
import popularMovies from './popular-movies/saga';
import popularTVShows from './popular-tv-shows/saga';
import topRatedMovies from './top-rated-movies/saga';
import topRatedTVShows from './top-rated-tv-shows/saga';
import trendingToday from './trending-today/saga';
import upcomingMovies from './upcoming-movies/saga';
import videos from './videos/saga';

const sagas = [
  app,
  trendingToday,
  popularTVShows,
  topRatedTVShows,
  topRatedMovies,
  popularMovies,
  upcomingMovies,
  videos,
];

const saga = function* () {
  yield all(sagas.map(fork));
};

export default saga;
