import { addMilliseconds, subMilliseconds } from 'date-fns';
import ms from 'ms';
import { useMemo } from 'react';
import { useSelector } from 'store';

import { selectChannelEvents, selectEvent } from './selectors';

interface UseEventsOptions {
  window?: number;
}

export const useEvents = (channelId: string, options?: UseEventsOptions) => {
  const events = useSelector(selectChannelEvents(channelId));
  const window = useMemo(() => options?.window, [options?.window]);

  return useMemo(() => {
    if (!window) {
      return { events };
    }

    return {
      events: events.filter(event => {
        if (
          event.startTime > addMilliseconds(new Date(), window) &&
          event.endTime > addMilliseconds(new Date(), window)
        ) {
          return false;
        }

        if (
          event.startTime < subMilliseconds(new Date(), window) &&
          event.endTime < subMilliseconds(new Date(), window)
        ) {
          return false;
        }

        return true;
      }),
    };
  }, [events, window]);
};

export const useEvent = (eventId: string) => {
  const event = useSelector(selectEvent(eventId));

  return useMemo(
    () => ({
      event,
    }),
    [event],
  );
};
