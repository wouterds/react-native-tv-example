import { Movie, MovieId } from 'store/types/movie';
import { Show, ShowId } from 'store/types/show';

export type TrendingTodayState = {
  isLoading: boolean;
  isEmpty: boolean;
  hasError: boolean;
  data: Array<{
    id: MovieId | ShowId;
    type: 'movie' | 'show';
  }>;
};

export interface FetchTrendingTodaySuccessAction {
  type: string;
  payload: Array<Movie | Show>;
}
