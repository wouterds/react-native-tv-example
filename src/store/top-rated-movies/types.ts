import { Movie, MovieId } from 'store/types/movie';

export type TopRatedMoviesState = {
  isLoading: boolean;
  isEmpty: boolean;
  hasError: boolean;
  data: MovieId[];
};

export interface FetchTopRatedMoviesAction {
  type: string;
  payload: Movie[];
}
