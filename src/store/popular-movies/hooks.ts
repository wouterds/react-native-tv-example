import { useMemo } from 'react';
import { useSelector } from 'store';

import { selectPopularMovies } from './selectors';

export const usePopularMovies = () => {
  const popularMovies = useSelector(selectPopularMovies);

  return useMemo(() => ({ popularMovies }), [popularMovies]);
};

export const usePopularMovie = (id: number) => {
  const { popularMovies } = usePopularMovies();

  const movie = useMemo(
    () => popularMovies.find(entry => entry.id === id),
    [popularMovies, id],
  );

  return useMemo(() => ({ movie }), [movie]);
};
