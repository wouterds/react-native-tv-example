import { createSlice } from '@reduxjs/toolkit';

import { FetchTopRatedTVShowsAction, TopRatedTVShowsState } from './types';

const initialState: TopRatedTVShowsState = {
  isLoading: false,
  isEmpty: false,
  hasError: false,
  data: [],
};

const slice = createSlice({
  name: 'top-rated-tv-shows',
  initialState,
  reducers: {
    fetchTopRatedTVShows(state: TopRatedTVShowsState) {
      state.isLoading = true;
    },
    fetchTopRatedTVShowsSuccess(
      state: TopRatedTVShowsState,
      action: FetchTopRatedTVShowsAction,
    ) {
      state.isLoading = false;
      state.hasError = false;
      state.data = action.payload.map(show => show.id);
      state.isEmpty = !state.data?.length;
    },
    fetchTopRatedTVShowsError(state: TopRatedTVShowsState) {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const {
  fetchTopRatedTVShows,
  fetchTopRatedTVShowsSuccess,
  fetchTopRatedTVShowsError,
} = slice.actions;
export const { reducer } = slice;
