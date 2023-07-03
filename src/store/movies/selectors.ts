import { RootState } from 'store';

export const selectMovies = ({ movies: state }: RootState) => {
  return state;
};

export const selectMovie = (id?: number | null) => {
  return (state: RootState) => {
    if (!id) {
      return null;
    }

    return selectMovies(state)[id];
  };
};
