import { createSlice } from '@reduxjs/toolkit';

import { AppState } from './types';

const initialState: AppState = {};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export const {} = slice.actions;
export const { reducer } = slice;
