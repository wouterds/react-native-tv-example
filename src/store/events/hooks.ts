import { addMilliseconds, subMilliseconds } from 'date-fns';
import { useMemo } from 'react';
import { useSelector } from 'store';

import { selectChannelEvents, selectEvent } from './selectors';

interface UseEventsOptions {
  window?: number;
}

export const useEvents = (
  channelId: string | string[],
  options?: UseEventsOptions,
) => {
  const events = useSelector(selectChannelEvents(channelId));
  const window = useMemo(() => options?.window, [options?.window]);

  const filteredEvents = useMemo(() => {
    if (!window) {
      return events;
    }

    return events.filter(event => {
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
    });
  }, [events, window]);

  const firstEvent = useMemo(() => {
    let _firstEvent: Date | null = null;
    for (const event of filteredEvents) {
      if (!_firstEvent || event.startTime < _firstEvent) {
        _firstEvent = event.startTime;
      }
    }

    return _firstEvent;
  }, [filteredEvents]);

  return useMemo(() => {
    return { events: filteredEvents, firstEvent };
  }, [filteredEvents, firstEvent]);
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
