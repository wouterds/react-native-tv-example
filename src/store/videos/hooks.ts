import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'store';

import {
  selectVideos,
  selectVideosHasError,
  selectVideosIsEmpty,
  selectVideosIsLoading,
} from './selectors';
import { fetchVideos } from './slice';
import { VideoId } from './types';

interface Options {
  fetch?: boolean;
}

export const useVideos = (id: VideoId, options?: Options) => {
  const data = useSelector(selectVideos(id));
  const isLoading = useSelector(selectVideosIsLoading(id));
  const isEmpty = useSelector(selectVideosIsEmpty(id));
  const hasError = useSelector(selectVideosHasError(id));

  const dispatch = useDispatch();
  const fetch = useRef(() => dispatch(fetchVideos({ id }))).current;

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
