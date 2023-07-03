import { createSlice } from '@reduxjs/toolkit';

import { AddMoviesAction, MoviesState } from './types';

const initialState: MoviesState = {};

const slice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies(state: MoviesState, { payload: movies }: AddMoviesAction) {
      for (const movie of movies) {
        state[movie.id] = movie;
      }
    },
  },
});

export const { addMovies } = slice.actions;
export const { reducer } = slice;
