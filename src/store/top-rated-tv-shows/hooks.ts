import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'store';

import {
  selectTopRatedTVShows,
  selectTopRatedTVShowsHasError,
  selectTopRatedTVShowsIsEmpty,
  selectTopRatedTVShowsIsLoading,
} from './selectors';
import { fetchTopRatedTVShows } from './slice';

interface Options {
  fetch?: boolean;
}

export const useTopRatedTVShows = (options?: Options) => {
  const data = useSelector(selectTopRatedTVShows);
  const isLoading = useSelector(selectTopRatedTVShowsIsLoading);
  const isEmpty = useSelector(selectTopRatedTVShowsIsEmpty);
  const hasError = useSelector(selectTopRatedTVShowsHasError);

  const dispatch = useDispatch();
  const fetch = useRef(() => dispatch(fetchTopRatedTVShows())).current;

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

export const useTopRatedTVShow = (id: number) => {
  const { data } = useTopRatedTVShows();

  const show = useMemo(() => data.find(entry => entry.id === id), [data, id]);

  return useMemo(() => ({ show }), [show]);
};
