import { Show, ShowId } from 'store/types/show';

export type PopularTVShowsState = {
  isLoading: boolean;
  isEmpty: boolean;
  hasError: boolean;
  data: ShowId[];
};

export interface FetchPopularTVShowsAction {
  type: string;
  payload: Show[];
}
