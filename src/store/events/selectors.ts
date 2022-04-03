import { RootState } from 'store';

export const selectEvents = ({ events: state }: RootState) => {
  return state.data;
};
