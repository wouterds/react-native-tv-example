import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'store';

import {
  selectTopRatedMovies,
  selectTopRatedMoviesHasError,
  selectTopRatedMoviesIsEmpty,
  selectTopRatedMoviesIsLoading,
} from './selectors';
import { fetchTopRatedMovies } from './slice';

interface Options {
  fetch?: boolean;
}

export const useTopRatedMovies = (options?: Options) => {
  const data = useSelector(selectTopRatedMovies);
  const isLoading = useSelector(selectTopRatedMoviesIsLoading);
  const isEmpty = useSelector(selectTopRatedMoviesIsEmpty);
  const hasError = useSelector(selectTopRatedMoviesHasError);

  const dispatch = useDispatch();
  const fetch = useRef(() => dispatch(fetchTopRatedMovies())).current;

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
