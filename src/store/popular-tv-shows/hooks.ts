import { useMemo } from 'react';
import { useSelector } from 'store';

import { selectPopularTVShows } from './selectors';

export const usePopularTVShows = () => {
  const popularTVShows = useSelector(selectPopularTVShows);

  return useMemo(() => ({ popularTVShows }), [popularTVShows]);
};

export const usePopularTVShow = (id: number) => {
  const { popularTVShows } = usePopularTVShows();

  const show = useMemo(
    () => popularTVShows.find(entry => entry.id === id),
    [popularTVShows, id],
  );

  return useMemo(() => ({ show }), [show]);
};
