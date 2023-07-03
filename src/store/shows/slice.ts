import { createSlice } from '@reduxjs/toolkit';

import { AddShowsAction, ShowsState } from './types';

const initialState: ShowsState = {};

const slice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    addShows(state: ShowsState, { payload: shows }: AddShowsAction) {
      for (const show of shows) {
        state[show.id] = show;
      }
    },
  },
});

export const { addShows } = slice.actions;
export const { reducer } = slice;
