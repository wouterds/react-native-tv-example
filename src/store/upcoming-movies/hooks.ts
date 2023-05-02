import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'store';

import {
  selectUpcomingMovies,
  selectUpcomingMoviesHasError,
  selectUpcomingMoviesIsEmpty,
  selectUpcomingMoviesIsLoading,
} from './selectors';
import { fetchUpcomingMovies } from './slice';

interface Options {
  fetch?: boolean;
}

export const useUpcomingMovies = (options?: Options) => {
  const data = useSelector(selectUpcomingMovies);
  const isLoading = useSelector(selectUpcomingMoviesIsLoading);
  const isEmpty = useSelector(selectUpcomingMoviesIsEmpty);
  const hasError = useSelector(selectUpcomingMoviesHasError);

  const dispatch = useDispatch();
  const fetch = useRef(() => dispatch(fetchUpcomingMovies())).current;

  useEffect(() => {
    if (options?.fetch) {
      fetch();
    }
  }, [options?.fetch, fetch]);

  return useMemo(
    () => ({ fetch, isLoading, isEmpty, hasError, data }),
    [fetch, isLoading, isEmpty, hasError, data],
  );
};
