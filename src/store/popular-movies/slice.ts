import { createSlice } from '@reduxjs/toolkit';

import { FetchPopularMoviesAction, PopularMoviesState } from './types';

const initialState: PopularMoviesState = {
  isLoading: false,
  isEmpty: false,
  hasError: false,
  data: [],
};

const slice = createSlice({
  name: 'popular-movies',
  initialState,
  reducers: {
    fetchPopularMovies(state: PopularMoviesState) {
      state.isLoading = true;
    },
    fetchPopularMoviesSuccess(
      state: PopularMoviesState,
      action: FetchPopularMoviesAction,
    ) {
      state.isLoading = false;
      state.hasError = false;
      state.data = action.payload.map(movie => movie.id);
      state.isEmpty = !state.data?.length;
    },
    fetchPopularMoviesError(state: PopularMoviesState) {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
} = slice.actions;
export const { reducer } = slice;
