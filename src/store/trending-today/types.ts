import { Movie } from 'store/types/movie';
import { Show } from 'store/types/show';

export type TrendingTodayState = {
  data: Array<Movie | Show>;
};
