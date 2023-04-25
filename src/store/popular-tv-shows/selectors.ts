import { RootState } from 'store';

export const selectPopularTVShows = ({ popularTVShows: state }: RootState) => {
  return state.data;
};

export const selectPopularTVShowsIsLoading = ({
  popularTVShows: state,
}: RootState) => {
  return state.isLoading;
};

export const selectPopularTVShowsIsEmpty = ({
  popularTVShows: state,
}: RootState) => {
  return state.isEmpty;
};

export const selectPopularTVShowsHasError = ({
  popularTVShows: state,
}: RootState) => {
  return state.hasError;
};
