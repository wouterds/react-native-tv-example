import { RootState } from 'store';

export const selectTopRatedTVShows = ({
  topRatedTVShows: state,
}: RootState) => {
  return state.data;
};
