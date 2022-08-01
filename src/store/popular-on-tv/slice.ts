import { createSlice } from '@reduxjs/toolkit';

import { PopularOnTVState, Show } from './types';

const initialState: PopularOnTVState = {
  data: [],
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPopularOnTV(state: PopularOnTVState, action: { payload: Show[] }) {
      state.data = action.payload;
    },
  },
});

export const { setPopularOnTV } = slice.actions;
export const { reducer } = slice;
