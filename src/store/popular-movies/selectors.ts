import { RootState } from 'store';

export const selectPopularMovies = ({ popularMovies: state }: RootState) => {
  return state.data;
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
