import { RootState } from 'store';

export const selectPopularOnTV = ({ popularOnTV: state }: RootState) => {
  return state.data;
};
