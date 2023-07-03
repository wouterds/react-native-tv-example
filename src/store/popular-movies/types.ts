import { Movie, MovieId } from 'store/types/movie';

export type PopularMoviesState = {
  isLoading: boolean;
  isEmpty: boolean;
  hasError: boolean;
  data: MovieId[];
};

export interface FetchPopularMoviesAction {
  type: string;
  payload: Movie[];
}
