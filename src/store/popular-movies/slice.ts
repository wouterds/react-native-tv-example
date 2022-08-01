import { createSlice } from '@reduxjs/toolkit';
import { Movie } from 'store/types/movie';

import { PopularMoviesState } from './types';

const initialState: PopularMoviesState = {
  data: [],
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPopularMovies(state: PopularMoviesState, action: { payload: Movie[] }) {
      state.data = action.payload;
    },
  },
});

export const { setPopularMovies } = slice.actions;
export const { reducer } = slice;
