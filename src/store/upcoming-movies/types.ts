import { Movie } from 'store/types/movie';

export type UpcomingMoviesState = {
  isLoading: boolean;
  isEmpty: boolean;
  hasError: boolean;
  data: Movie[];
};
