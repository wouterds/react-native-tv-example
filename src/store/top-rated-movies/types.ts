import { Movie } from 'store/types/movie';

export type TopRatedMoviesState = {
  isLoading: boolean;
  isEmpty: boolean;
  hasError: boolean;
  data: Movie[];
};
