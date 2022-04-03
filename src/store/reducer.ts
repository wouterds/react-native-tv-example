import { combineReducers } from '@reduxjs/toolkit';

import { reducer as app } from './app/slice';
import { reducer as channels } from './channels/slice';
import { reducer as events } from './events/slice';

const reducer = combineReducers({
  app,
  channels,
  events,
});

export default reducer;
