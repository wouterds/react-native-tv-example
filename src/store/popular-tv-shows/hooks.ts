import { useMemo } from 'react';
import { useSelector } from 'store';

import { selectPopularTVShows } from './selectors';

export const usePopularTVShows = () => {
  const popularTVShows = useSelector(selectPopularTVShows);

  return useMemo(() => ({ popularTVShows }), [popularTVShows]);
};
