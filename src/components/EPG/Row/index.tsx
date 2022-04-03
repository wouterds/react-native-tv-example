import React, { memo, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Channel } from 'store/channels/types';
import { useEvents } from 'store/events/hooks';
import { Event } from 'store/events/types';
import { generateEventId } from 'utils/event';

import Cell from './Cell';
import styles from './styles';

interface Props {
  channel: Channel;
}

const EPGRow = ({ channel }: Props) => {
  const { events } = useEvents(channel.id);

  const renderItem = useCallback(
    ({ item, index }: { index: number; item: Event }) => (
      <Cell event={item} index={index} key={generateEventId(item, index)} />
    ),
    [],
  );

  const keyExtractor = useCallback(
    (item: Event, index: number) => generateEventId(item, index),
    [],
  );

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
        contentContainerStyle={styles.events}
        data={events}
        renderItem={renderItem}
        horizontal
        removeClippedSubviews
        scrollEventThrottle={16}
        keyExtractor={keyExtractor}
        windowSize={2}
      />
    </View>
  );
};

export default memo(EPGRow);
