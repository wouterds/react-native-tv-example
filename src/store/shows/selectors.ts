import { RootState } from 'store';

export const selectShows = ({ shows: state }: RootState) => {
  return state;
};

export const selectShow = (id?: number | null) => {
  return (state: RootState) => {
    if (!id) {
      return null;
    }

    return selectShows(state)[id];
  };
};
