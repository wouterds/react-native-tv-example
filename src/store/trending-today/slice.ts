import { createSlice } from '@reduxjs/toolkit';
import { Movie } from 'store/types/movie';
import { Show } from 'store/types/show';

import { TrendingTodayState } from './types';

const initialState: TrendingTodayState = {
  isLoading: false,
  isEmpty: false,
  hasError: false,
  data: [],
};

const slice = createSlice({
  name: 'trending-today',
  initialState,
  reducers: {
    fetchTrendingToday(state: TrendingTodayState) {
      state.isLoading = true;
    },
    fetchTrendingTodaySuccess(
      state: TrendingTodayState,
      action: { payload: Array<Movie | Show> },
    ) {
      state.isLoading = false;
      state.hasError = false;
      state.data = action.payload;
      state.isEmpty = !state.data?.length;
    },
    fetchTrendingTodayError(state: TrendingTodayState) {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const {
  fetchTrendingToday,
  fetchTrendingTodaySuccess,
  fetchTrendingTodayError,
} = slice.actions;
export const { reducer } = slice;
