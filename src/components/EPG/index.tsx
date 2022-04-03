import React, { memo, useCallback, useMemo, useState } from 'react';
import { HWKeyEvent, ScrollView, useTVEventHandler, View } from 'react-native';
import { useChannels } from 'store/channels/hooks';
import { Channel } from 'store/channels/types';

import { useActiveEPGEvent, withEPGContext } from './context';
import Row from './Row';
import RowHeader from './Row/Header';
import styles from './styles';

const DISPLAYED_CHANNELS = 8;

const EPGGrid = () => {
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
    return channels.slice(
      startChannelIndex,
      startChannelIndex + DISPLAYED_CHANNELS,
    );
  }, [startChannelIndex, channels]);

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
        setStartChannelIndex(
          Math.max(currentChannelIndex + 2 - DISPLAYED_CHANNELS, 0),
        );
      }

      if (
        event.eventType === 'swipeDown' &&
        currentOnScreenChannelIndex >= DISPLAYED_CHANNELS - 2
      ) {
        setStartChannelIndex(
          Math.min(
            currentChannelIndex - 1,
            channels.length - DISPLAYED_CHANNELS,
          ),
        );
      }
    },
    [currentOnScreenChannelIndex, currentChannelIndex, channels.length],
  );

  useTVEventHandler(eventHandler);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.vertical} removeClippedSubviews>
        <View>{onScreenChannels.map(renderRowHeader)}</View>
        <ScrollView
          contentContainerStyle={styles.horizontal}
          removeClippedSubviews
          horizontal>
          {onScreenChannels.map(renderRow)}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const renderRowHeader = (channel: Channel) => (
  <RowHeader channel={channel} key={`row-header:${channel.id}`} />
);

const renderRow = (channel: Channel) => (
  <Row channel={channel} key={`row:${channel.id}`} />
);

export default memo(withEPGContext(EPGGrid));
