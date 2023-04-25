import { Movie } from 'store/types/movie';
import { Show } from 'store/types/show';

export type TrendingTodayState = {
  isLoading: boolean;
  isEmpty: boolean;
  hasError: boolean;
  data: Array<Movie | Show>;
};
