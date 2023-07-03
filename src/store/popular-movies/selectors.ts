import { RootState } from 'store';
import { selectMovies } from 'store/movies/selectors';

export const selectPopularMovies = ({ popularMovies: state }: RootState) => {
  return state;
};

export const selectPopularMoviesData = (state: RootState) => {
  const { data: ids } = selectPopularMovies(state);
  const movies = selectMovies(state);

  return ids.map(id => movies[id] || null).filter(Boolean);
};

export const selectPopularMoviesIsLoading = ({
  popularMovies: state,
}: RootState) => {
  return state.isLoading;
};

export const selectPopularMoviesIsEmpty = ({
  popularMovies: state,
}: RootState) => {
  return state.isEmpty;
};

export const selectPopularMoviesHasError = ({
  popularMovies: state,
}: RootState) => {
  return state.hasError;
};
