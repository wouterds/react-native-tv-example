import { RootState } from 'store';

export const selectTopRatedMovies = ({ topRatedMovies: state }: RootState) => {
  return state.data;
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
