import { useMemo } from 'react';
import { useSelector } from 'store';

import { selectTrendingToday } from './selectors';

export const useTrendingToday = () => {
  const trendingToday = useSelector(selectTrendingToday);

  return useMemo(() => ({ trendingToday }), [trendingToday]);
};

export const useTrendingTodayEntry = (id: number) => {
  const { trendingToday: trendingTodayEntries } = useTrendingToday();

  const trendingToday = useMemo(
    () => trendingTodayEntries.find(entry => entry.id === id),
    [trendingTodayEntries, id],
  );

  return useMemo(() => ({ trendingToday }), [trendingToday]);
};
