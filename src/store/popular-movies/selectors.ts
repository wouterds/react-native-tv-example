import { RootState } from 'store';

export const selectPopularMovies = ({ popularMovies: state }: RootState) => {
  return state.data;
};
