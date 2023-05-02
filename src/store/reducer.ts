import { combineReducers } from '@reduxjs/toolkit';

import { reducer as app } from './app/slice';
import { reducer as popularMovies } from './popular-movies/slice';
import { reducer as popularTVShows } from './popular-tv-shows/slice';
import { reducer as trendingToday } from './trending-today/slice';
import { reducer as upcomingMovies } from './upcoming-movies/slice';
import { reducer as videos } from './videos/slice';

const reducer = combineReducers({
  app,
  popularTVShows,
  popularMovies,
  upcomingMovies,
  trendingToday,
  videos,
});

export default reducer;
