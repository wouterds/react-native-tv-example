import { combineReducers } from '@reduxjs/toolkit';

import { reducer as app } from './app/slice';
import { reducer as popularTVShows } from './popular-tv-shows/slice';
import { reducer as topRatedTVShows } from './top-rated-tv-shows/slice';

const reducer = combineReducers({
  app,
  popularTVShows,
  topRatedTVShows,
});

export default reducer;
