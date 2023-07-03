import { Movie } from 'store/types/movie';

type MovieId = number;

export type MoviesState = Record<MovieId, Movie>;

export interface AddMoviesAction {
  type: string;
  payload: Movie[];
}
