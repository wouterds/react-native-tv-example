import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'store';

import { selectHasError, selectIsLoading } from './selectors';
import { bootstrap as bootstrapAction } from './slice';

export const useApp = () => {
  const dispatch = useDispatch();
  const bootstrap = useCallback(() => dispatch(bootstrapAction()), [dispatch]);
  const isLoading = useSelector(selectIsLoading);
  const hasError = useSelector(selectHasError);

  return useMemo(
    () => ({ isLoading, hasError, bootstrap }),
    [isLoading, hasError, bootstrap],
  );
};
