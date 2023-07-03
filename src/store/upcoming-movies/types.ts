import { Movie, MovieId } from 'store/types/movie';

export type UpcomingMoviesState = {
  isLoading: boolean;
  isEmpty: boolean;
  hasError: boolean;
  data: MovieId[];
};

export interface FetchUpcomingMoviesAction {
  type: string;
  payload: Movie[];
}
