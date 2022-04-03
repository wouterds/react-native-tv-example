import { createSlice } from '@reduxjs/toolkit';

import { AppState } from './types';

const initialState: AppState = {
  isLoading: false,
  hasError: false,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    bootstrap(state: AppState) {
      state.isLoading = true;
      state.hasError = false;
    },
    bootstrapSuccess(state: AppState) {
      state.isLoading = false;
      state.hasError = false;
    },
    bootstrapError(state: AppState) {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const { bootstrap, bootstrapSuccess, bootstrapError } = slice.actions;
export const { reducer } = slice;
