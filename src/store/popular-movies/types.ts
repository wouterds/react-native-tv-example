import { Movie } from 'store/types/movie';

export type PopularMoviesState = {
  isLoading: boolean;
  isEmpty: boolean;
  hasError: boolean;
  data: Movie[];
};
