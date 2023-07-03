import { useMemo } from 'react';
import { useSelector } from 'store';

import { selectShow } from './selectors';

export const useShow = (id?: number | null) => {
  const show = useSelector(selectShow(id));

  return useMemo(() => show, [show]);
};
