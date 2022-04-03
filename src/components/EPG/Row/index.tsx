import { differenceInMinutes } from 'date-fns';
import ms from 'ms';
import React, { memo, useCallback, useMemo } from 'react';
import { FlatList, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Channel } from 'store/channels/types';
import { useEvents } from 'store/events/hooks';
import { Event } from 'store/events/types';
import { epgDurationToWidth } from 'utils/styles';

import { useActiveEPGEvent } from '../context';
import Cell from './Cell';
import styles from './styles';

interface Props {
  channel: Channel;
}

const EPGRow = ({ channel }: Props) => {
  const { events } = useEvents(channel.id, { window: ms('4h') });

  const renderItem = useCallback(
    ({ item }: { index: number; item: Event }) => (
      <Cell event={item} key={item.id} />
    ),
    [],
  );

  const keyExtractor = useCallback((item: Event) => item.id, []);

  const activeEvent = useActiveEPGEvent();
  const offsetX = useMemo(() => {
    if (!activeEvent) {
      return 0;
    }

    const duration =
      differenceInMinutes(activeEvent.endTime, activeEvent.startTime) + 30;

    return epgDurationToWidth(duration);
  }, [activeEvent]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{ uri: channel.imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <FlatList
        style={styles.events}
        data={events}
        renderItem={renderItem}
        horizontal
        removeClippedSubviews
        scrollEventThrottle={16}
        keyExtractor={keyExtractor}
        contentOffset={{ x: offsetX, y: 0 }}
      />
    </View>
  );
};

export default memo(EPGRow);
