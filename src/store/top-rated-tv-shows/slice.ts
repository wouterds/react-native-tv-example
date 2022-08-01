import { createSlice } from '@reduxjs/toolkit';
import { Show } from 'store/types/show';

import { TopRatedTVShows } from './types';

const initialState: TopRatedTVShows = {
  data: [],
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTopRatedTVShows(state: TopRatedTVShows, action: { payload: Show[] }) {
      state.data = action.payload;
    },
  },
});

export const { setTopRatedTVShows } = slice.actions;
export const { reducer } = slice;
