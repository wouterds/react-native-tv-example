import { createSlice } from '@reduxjs/toolkit';
import { Movie } from 'store/types/movie';

import { UpcomingMoviesState } from './types';

const initialState: UpcomingMoviesState = {
  isLoading: false,
  isEmpty: false,
  hasError: false,
  data: [],
};

const slice = createSlice({
  name: 'upcoming-movies',
  initialState,
  reducers: {
    fetchUpcomingMovies(state: UpcomingMoviesState) {
      state.isLoading = true;
    },
    fetchUpcomingMoviesSuccess(
      state: UpcomingMoviesState,
      action: { payload: Movie[] },
    ) {
      state.isLoading = false;
      state.hasError = false;
      state.data = action.payload;
      state.isEmpty = !state.data?.length;
    },
    fetchUpcomingMoviesError(state: UpcomingMoviesState) {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const {
  fetchUpcomingMovies,
  fetchUpcomingMoviesSuccess,
  fetchUpcomingMoviesError,
} = slice.actions;
export const { reducer } = slice;
