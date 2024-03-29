import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'store';

import {
  selectPopularMoviesData,
  selectPopularMoviesHasError,
  selectPopularMoviesIsEmpty,
  selectPopularMoviesIsLoading,
} from './selectors';
import { fetchPopularMovies } from './slice';

interface Options {
  fetch?: boolean;
}

export const usePopularMovies = (options?: Options) => {
  const data = useSelector(selectPopularMoviesData);
  const isLoading = useSelector(selectPopularMoviesIsLoading);
  const isEmpty = useSelector(selectPopularMoviesIsEmpty);
  const hasError = useSelector(selectPopularMoviesHasError);

  const dispatch = useDispatch();
  const fetch = useRef(() => dispatch(fetchPopularMovies())).current;

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
