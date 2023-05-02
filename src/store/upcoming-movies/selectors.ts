import { RootState } from 'store';

export const selectUpcomingMovies = ({ upcomingMovies: state }: RootState) => {
  return state.data;
};

export const selectUpcomingMoviesIsLoading = ({
  upcomingMovies: state,
}: RootState) => {
  return state.isLoading;
};

export const selectUpcomingMoviesIsEmpty = ({
  upcomingMovies: state,
}: RootState) => {
  return state.isEmpty;
};

export const selectUpcomingMoviesHasError = ({
  upcomingMovies: state,
}: RootState) => {
  return state.hasError;
};
