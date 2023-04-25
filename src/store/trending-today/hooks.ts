import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'store';

import {
  selectTrendingToday,
  selectTrendingTodayHasError,
  selectTrendingTodayIsEmpty,
  selectTrendingTodayIsLoading,
} from './selectors';
import { fetchTrendingToday } from './slice';

interface Options {
  fetch?: boolean;
}

export const useTrendingToday = (options?: Options) => {
  const data = useSelector(selectTrendingToday);
  const isLoading = useSelector(selectTrendingTodayIsLoading);
  const isEmpty = useSelector(selectTrendingTodayIsEmpty);
  const hasError = useSelector(selectTrendingTodayHasError);

  const dispatch = useDispatch();
  const fetch = useRef(() => dispatch(fetchTrendingToday())).current;

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

export const useTrendingTodayItem = (id: number) => {
  const { data } = useTrendingToday();

  const item = useMemo(() => data.find(entry => entry.id === id), [data, id]);

  return useMemo(() => ({ item }), [item]);
};
