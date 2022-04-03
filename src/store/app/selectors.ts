import { RootState } from 'store';

export const selectIsLoading = ({ app: state }: RootState) => {
  return state.isLoading;
};

export const selectHasError = ({ app: state }: RootState) => {
  return state.hasError;
};
