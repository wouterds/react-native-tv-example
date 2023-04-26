import { createSlice } from '@reduxjs/toolkit';

import {
  FetchVideosAction,
  FetchVideosErrorAction,
  FetchVideosSuccessAction,
  VideosState,
} from './types';
import { findVideoEntry } from './utils';

const initialState: VideosState = {
  data: [],
};

const slice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    fetchVideos(state: VideosState, action: FetchVideosAction) {
      const index = findVideoEntry(state.data, action.payload.id);

      if (!state.data[index]) {
        state.data[index] = {
          id: action.payload.id,
          isLoading: false,
          hasError: false,
          isEmpty: false,
          data: [],
        };
      }

      state.data[index].isLoading = true;
    },
    fetchVideosSuccess(state: VideosState, action: FetchVideosSuccessAction) {
      const index = findVideoEntry(state.data, action.payload.id);

      state.data[index].isLoading = false;
      state.data[index].hasError = false;
      state.data[index].data = action.payload.data;
      state.data[index].isEmpty = action.payload.data.length === 0;
    },
    fetchVideosError(state: VideosState, action: FetchVideosErrorAction) {
      const index = findVideoEntry(state.data, action.payload.id);

      state.data[index].isLoading = false;
      state.data[index].hasError = true;
    },
  },
});

export const { fetchVideos, fetchVideosSuccess, fetchVideosError } =
  slice.actions;
export const { reducer } = slice;
