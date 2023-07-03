import { createSlice } from '@reduxjs/toolkit';

import { FetchTrendingTodaySuccessAction, TrendingTodayState } from './types';

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
      action: FetchTrendingTodaySuccessAction,
    ) {
      state.isLoading = false;
      state.hasError = false;
      state.data = action.payload.map(item => ({
        id: item.id,
        type: item.type,
      }));
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
