import { RootState } from 'store';

export const selectTrendingToday = ({ trendingToday: state }: RootState) => {
  return state.data;
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
