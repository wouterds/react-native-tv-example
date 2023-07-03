import { Movie } from 'store/types/movie';
import { Show, ShowId } from 'store/types/show';

export type ShowsState = Record<ShowId, Show>;

export interface AddShowsAction {
  type: string;
  payload: Show[];
}

export interface AddMixedShowsAction {
  type: string;
  payload: Array<Movie | Show>;
}
