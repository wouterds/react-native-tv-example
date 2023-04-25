import { createSlice } from '@reduxjs/toolkit';
import { Show } from 'store/types/show';

import { PopularTVShowsState } from './types';

const initialState: PopularTVShowsState = {
  isLoading: false,
  isEmpty: false,
  hasError: false,
  data: [],
};

const slice = createSlice({
  name: 'popular-tv-shows',
  initialState,
  reducers: {
    fetchPopularTVShows(state: PopularTVShowsState) {
      state.isLoading = true;
    },
    fetchPopularTVShowsSuccess(
      state: PopularTVShowsState,
      action: { payload: Show[] },
    ) {
      state.isLoading = false;
      state.hasError = false;
      state.data = action.payload;
      state.isEmpty = !state.data?.length;
    },
    fetchPopularTVShowsError(state: PopularTVShowsState) {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const {
  fetchPopularTVShows,
  fetchPopularTVShowsSuccess,
  fetchPopularTVShowsError,
} = slice.actions;
export const { reducer } = slice;
