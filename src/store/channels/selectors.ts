import { RootState } from 'store';

export const selectChannels = ({ channels: state }: RootState) => {
  return state.data;
};
