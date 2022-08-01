import { createSlice } from '@reduxjs/toolkit';

import { PopularTVShowsState, Show } from './types';

const initialState: PopularTVShowsState = {
  data: [],
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPopularTVShows(state: PopularTVShowsState, action: { payload: Show[] }) {
      state.data = action.payload;
    },
  },
});

export const { setPopularTVShows } = slice.actions;
export const { reducer } = slice;
