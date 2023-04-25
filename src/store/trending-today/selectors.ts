import { RootState } from 'store';

export const selectTrendingToday = ({ trendingToday: state }: RootState) => {
  return state.data;
};
