import { Movie } from 'store/types/movie';
import { Show } from 'store/types/show';

type MovieId = number;

export type MoviesState = Record<MovieId, Movie>;

export interface AddMoviesAction {
  type: string;
  payload: Movie[];
}

export interface AddMixedMoviesAction {
  type: string;
  payload: Array<Movie | Show>;
}
