import { Show } from 'store/types/show';

export type TopRatedTVShowsState = {
  isLoading: boolean;
  isEmpty: boolean;
  hasError: boolean;
  data: Show[];
};
