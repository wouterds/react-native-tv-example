import { createSlice } from '@reduxjs/toolkit';
import { Movie } from 'store/types/movie';

import { TopRatedMoviesState } from './types';

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
      action: { payload: Movie[] },
    ) {
      state.isLoading = false;
      state.hasError = false;
      state.data = action.payload;
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
