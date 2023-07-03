import { useMemo } from 'react';
import { useSelector } from 'store';

import { selectMovie } from './selectors';

export const useMovie = (id?: number | null) => {
  const movie = useSelector(selectMovie(id));

  return useMemo(() => movie, [movie]);
};
