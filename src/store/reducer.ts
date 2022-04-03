import { combineReducers } from '@reduxjs/toolkit';

import { reducer as app } from './app/slice';

const reducer = combineReducers({
  app,
});

export default reducer;
