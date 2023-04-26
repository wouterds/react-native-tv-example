import { RootState } from 'store';

import { VideoId } from './types';
import { findVideoEntry } from './utils';

export const selectVideos = (id: VideoId) => {
  return ({ videos: state }: RootState) => {
    const index = findVideoEntry(state.data, id);

    return state.data[index]?.data || [];
  };
};

export const selectVideosIsLoading = (id: VideoId) => {
  return ({ videos: state }: RootState) => {
    const index = findVideoEntry(state.data, id);

    return state.data[index]?.isLoading || false;
  };
};

export const selectVideosIsEmpty = (id: VideoId) => {
  return ({ videos: state }: RootState) => {
    const index = findVideoEntry(state.data, id);

    return state.data[index]?.isEmpty || false;
  };
};

export const selectVideosHasError = (id: VideoId) => {
  return ({ videos: state }: RootState) => {
    const index = findVideoEntry(state.data, id);

    return state.data[index]?.hasError || false;
  };
};
