import { combineReducers } from '@reduxjs/toolkit';

import { reducer as app } from './app/slice';
import { reducer as popularMovies } from './popular-movies/slice';
import { reducer as popularTVShows } from './popular-tv-shows/slice';

const reducer = combineReducers({
  app,
  popularTVShows,
  popularMovies,
});

export default reducer;
