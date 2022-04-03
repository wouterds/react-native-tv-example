import { useCallback, useMemo, useState } from 'react';
import { HWKeyEvent, useTVEventHandler } from 'react-native';
import { useChannels } from 'store/channels/hooks';

import { useActiveEPGEvent } from '../context';

export const usePaginatedChannels = (pageSize: number) => {
  const { channels } = useChannels();
  const { activeEvent } = useActiveEPGEvent();
  const [startChannelIndex, setStartChannelIndex] = useState(0);

  const currentChannelIndex = useMemo(() => {
    const currentChannelId = activeEvent?.channelId;
    if (!currentChannelId) {
      return 0;
    }

    return channels.findIndex(channel => channel.id === currentChannelId);
  }, [channels, activeEvent?.channelId]);

  const onScreenChannels = useMemo(() => {
    return channels.slice(startChannelIndex, startChannelIndex + pageSize);
  }, [startChannelIndex, channels, pageSize]);

  const currentOnScreenChannelIndex = useMemo(() => {
    const currentChannelId = activeEvent?.channelId;
    if (!currentChannelId) {
      return 0;
    }

    return onScreenChannels.findIndex(
      channel => channel.id === currentChannelId,
    );
  }, [onScreenChannels, activeEvent?.channelId]);

  const eventHandler = useCallback(
    (event: HWKeyEvent) => {
      if (event.eventType === 'swipeUp' && currentOnScreenChannelIndex <= 1) {
        setStartChannelIndex(Math.max(currentChannelIndex + 2 - pageSize, 0));
      }

      if (
        event.eventType === 'swipeDown' &&
        currentOnScreenChannelIndex >= pageSize - 2
      ) {
        setStartChannelIndex(
          Math.min(currentChannelIndex - 1, channels.length - pageSize),
        );
      }
    },
    [
      currentOnScreenChannelIndex,
      currentChannelIndex,
      channels.length,
      pageSize,
    ],
  );

  useTVEventHandler(eventHandler);

  return useMemo(() => {
    return { channels: onScreenChannels };
  }, [onScreenChannels]);
};
