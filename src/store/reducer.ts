import { combineReducers } from '@reduxjs/toolkit';

import { reducer as app } from './app/slice';
import { reducer as channels } from './channels/slice';

const reducer = combineReducers({
  app,
  channels,
});

export default reducer;
