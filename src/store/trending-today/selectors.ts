import { RootState } from 'store';
import { selectMovies } from 'store/movies/selectors';
import { selectShows } from 'store/shows/selectors';

export const selectTrendingToday = ({ trendingToday: state }: RootState) => {
  return state;
};
export const selectTrendingTodayData = (state: RootState) => {
  const { data } = selectTrendingToday(state);
  const movies = selectMovies(state);
  const shows = selectShows(state);

  return data
    .map(item => {
      if (item.type === 'movie') {
        return movies[item.id];
      }

      if (item.type === 'show') {
        return shows[item.id];
      }

      return null;
    })
    .filter(Boolean);
};

export const selectTrendingTodayIsLoading = ({
  trendingToday: state,
}: RootState) => {
  return state.isLoading;
};

export const selectTrendingTodayIsEmpty = ({
  trendingToday: state,
}: RootState) => {
  return state.isEmpty;
};

export const selectTrendingTodayHasError = ({
  trendingToday: state,
}: RootState) => {
  return state.hasError;
};
