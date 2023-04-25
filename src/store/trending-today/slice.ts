import { createSlice } from '@reduxjs/toolkit';
import { Movie } from 'store/types/movie';

import { TrendingTodayState } from './types';

const initialState: TrendingTodayState = {
  data: [],
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTrendingToday(state: TrendingTodayState, action: { payload: Movie[] }) {
      state.data = action.payload;
    },
  },
});

export const { setTrendingToday } = slice.actions;
export const { reducer } = slice;
