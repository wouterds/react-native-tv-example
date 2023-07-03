import { RootState } from 'store';
import { selectMovies } from 'store/movies/selectors';

export const selectTopRatedMovies = ({ topRatedMovies: state }: RootState) => {
  return state;
};

export const selectTopRatedMoviesData = (state: RootState) => {
  const { data: ids } = selectTopRatedMovies(state);
  const movies = selectMovies(state);

  return ids.map(id => movies[id] || null).filter(Boolean);
};

export const selectTopRatedMoviesIsLoading = ({
  topRatedMovies: state,
}: RootState) => {
  return state.isLoading;
};

export const selectTopRatedMoviesIsEmpty = ({
  topRatedMovies: state,
}: RootState) => {
  return state.isEmpty;
};

export const selectTopRatedMoviesHasError = ({
  topRatedMovies: state,
}: RootState) => {
  return state.hasError;
};
