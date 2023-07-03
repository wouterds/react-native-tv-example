import { Show, ShowId } from 'store/types/show';

export type TopRatedTVShowsState = {
  isLoading: boolean;
  isEmpty: boolean;
  hasError: boolean;
  data: ShowId[];
};

export interface FetchTopRatedTVShowsAction {
  type: string;
  payload: Show[];
}
