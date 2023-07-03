import { RootState } from 'store';
import { selectShows } from 'store/shows/selectors';

export const selectPopularTVShows = ({ popularTVShows: state }: RootState) => {
  return state;
};

export const selectPopularTVShowsData = (state: RootState) => {
  const { data: ids } = selectPopularTVShows(state);
  const shows = selectShows(state);

  return ids.map(id => shows[id] || null).filter(Boolean);
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
