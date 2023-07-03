import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'store';

import {
  selectPopularTVShowsData,
  selectPopularTVShowsHasError,
  selectPopularTVShowsIsEmpty,
  selectPopularTVShowsIsLoading,
} from './selectors';
import { fetchPopularTVShows } from './slice';

interface Options {
  fetch?: boolean;
}

export const usePopularTVShows = (options?: Options) => {
  const data = useSelector(selectPopularTVShowsData);
  const isLoading = useSelector(selectPopularTVShowsIsLoading);
  const isEmpty = useSelector(selectPopularTVShowsIsEmpty);
  const hasError = useSelector(selectPopularTVShowsHasError);

  const dispatch = useDispatch();
  const fetch = useRef(() => dispatch(fetchPopularTVShows())).current;

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
