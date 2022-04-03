import { Event } from 'store/events/types';

export const generateEventId = (
  eventOrChannelId: Event | string,
  index: number,
) => {
  if (typeof eventOrChannelId === 'string') {
    return `channel:${eventOrChannelId}.event:${index}`;
  }

  return `channel:${eventOrChannelId.channelId}.event:${index}`;
};
