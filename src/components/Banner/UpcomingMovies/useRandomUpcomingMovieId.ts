import { useEffect, useMemo, useState } from 'react';
import { useUpcomingMovies } from 'store/upcoming-movies/hooks';

export const useRandomUpcomingMovieId = (refreshInterval: number) => {
  const { data } = useUpcomingMovies({ fetch: true });
  const [index, setIndex] = useState(-1);
  const [nextIndex, setNextIndex] = useState(index);
  const nextMovieId = useMemo(() => data[nextIndex], [data, nextIndex]);
  const movieId = useMemo(() => data[index], [data, index]);

  useEffect(() => {
    if (data.length && index === -1) {
      setNextIndex(Math.floor(Math.random() * data.length));
    }
  }, [data.length, index]);

  useEffect(() => {
    if (index !== -1) {
      const timeout = setTimeout(() => {
        setNextIndex((index + 1) % data.length);
      }, refreshInterval);

      return () => clearTimeout(timeout);
    }
  }, [index, data.length, refreshInterval]);

  useEffect(() => {
    if (nextIndex > -1 && nextIndex !== index) {
      setIndex(nextIndex);
    }
  }, [nextIndex, index]);

  return useMemo(() => ({ movieId, nextMovieId }), [movieId, nextMovieId]);
};
