import { createSlice } from '@reduxjs/toolkit';

import { FetchTopRatedMoviesAction, TopRatedMoviesState } from './types';

const initialState: TopRatedMoviesState = {
  isLoading: false,
  isEmpty: false,
  hasError: false,
  data: [],
};

const slice = createSlice({
  name: 'topRated-movies',
  initialState,
  reducers: {
    fetchTopRatedMovies(state: TopRatedMoviesState) {
      state.isLoading = true;
    },
    fetchTopRatedMoviesSuccess(
      state: TopRatedMoviesState,
      action: FetchTopRatedMoviesAction,
    ) {
      state.isLoading = false;
      state.hasError = false;
      state.data = action.payload.map(movie => movie.id);
      state.isEmpty = !state.data?.length;
    },
    fetchTopRatedMoviesError(state: TopRatedMoviesState) {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const {
  fetchTopRatedMovies,
  fetchTopRatedMoviesSuccess,
  fetchTopRatedMoviesError,
} = slice.actions;
export const { reducer } = slice;
