import { RootState } from 'store';

export const selectTopRatedTVShows = ({
  topRatedTVShows: state,
}: RootState) => {
  return state.data;
};

export const selectTopRatedTVShowsIsLoading = ({
  topRatedTVShows: state,
}: RootState) => {
  return state.isLoading;
};

export const selectTopRatedTVShowsIsEmpty = ({
  topRatedTVShows: state,
}: RootState) => {
  return state.isEmpty;
};

export const selectTopRatedTVShowsHasError = ({
  topRatedTVShows: state,
}: RootState) => {
  return state.hasError;
};
