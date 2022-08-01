import { useMemo } from 'react';
import { useSelector } from 'store';

import { selectTopRatedTVShows } from './selectors';

export const useTopRatedTVShows = () => {
  const topRatedTVShows = useSelector(selectTopRatedTVShows);

  return useMemo(() => ({ topRatedTVShows }), [topRatedTVShows]);
};
