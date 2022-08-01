import { RootState } from 'store';

export const selectPopularTVShows = ({ popularTVShows: state }: RootState) => {
  return state.data;
};
