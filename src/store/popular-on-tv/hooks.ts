import { useMemo } from 'react';
import { useSelector } from 'store';

import { selectPopularOnTV } from './selectors';

export const usePopularOnTV = () => {
  const popularOnTV = useSelector(selectPopularOnTV);

  return useMemo(() => ({ popularOnTV }), [popularOnTV]);
};
