import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'store';

import {
  selectPopularTVShows,
  selectPopularTVShowsHasError,
  selectPopularTVShowsIsEmpty,
  selectPopularTVShowsIsLoading,
} from './selectors';
import { fetchPopularTVShows } from './slice';

interface Options {
  fetch?: boolean;
}

export const usePopularTVShows = (options?: Options) => {
  const data = useSelector(selectPopularTVShows);
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

export const usePopularTVShow = (id: number) => {
  const { data } = usePopularTVShows();

  const show = useMemo(() => data.find(entry => entry.id === id), [data, id]);

  return useMemo(() => ({ show }), [show]);
};
