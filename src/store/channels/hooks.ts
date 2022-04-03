import { useMemo } from 'react';
import { useSelector } from 'store';

import { selectChannels } from './selectors';

export const useChannels = () => {
  const channels = useSelector(selectChannels);

  return useMemo(() => ({ channels }), [channels]);
};
