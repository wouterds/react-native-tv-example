import { Show } from 'store/types/show';

export type PopularTVShowsState = {
  isLoading: boolean;
  isEmpty: boolean;
  hasError: boolean;
  data: Show[];
};
