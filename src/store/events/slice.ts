import { createSlice } from '@reduxjs/toolkit';

import { Event, EventState } from './types';

const initialState: EventState = {
  data: [],
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setEvents(state: EventState, action: { payload: Event[] }) {
      state.data = action.payload;
    },
  },
});

export const { setEvents } = slice.actions;
export const { reducer } = slice;
