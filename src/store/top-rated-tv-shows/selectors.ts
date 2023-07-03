import { RootState } from 'store';
import { selectShows } from 'store/shows/selectors';

export const selectTopRatedTVShows = ({
  topRatedTVShows: state,
}: RootState) => {
  return state;
};

export const selectTopRatedTVShowsData = (state: RootState) => {
  const { data: ids } = selectTopRatedTVShows(state);
  const shows = selectShows(state);

  return ids.map(id => shows[id] || null).filter(Boolean);
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
