import { combineReducers } from '@reduxjs/toolkit';

import { reducer as app } from './app/slice';
import { reducer as popularOnTV } from './popular-on-tv/slice';

const reducer = combineReducers({
  app,
  popularOnTV,
});

export default reducer;
