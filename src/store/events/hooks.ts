import { useMemo } from 'react';
import { useSelector } from 'store';

import { selectChannelEvents } from './selectors';

export const useEvents = (channelId: string) => {
  const events = useSelector(selectChannelEvents(channelId));

  return useMemo(() => ({ events }), [events]);
};
