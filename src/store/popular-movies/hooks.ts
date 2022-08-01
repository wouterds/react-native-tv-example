import { useMemo } from 'react';
import { useSelector } from 'store';

import { selectPopularMovies } from './selectors';

export const usePopularMovies = () => {
  const popularMovies = useSelector(selectPopularMovies);

  return useMemo(() => ({ popularMovies }), [popularMovies]);
};
