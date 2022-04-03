import React, { memo } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Channel } from 'store/channels/types';

import styles from './styles';

interface Props {
  channel: Channel;
}

const EPGRow = ({ channel }: Props) => {
  // const { events } = useEvents(channel.id, { window: ms('4h') });

  // const renderItem = useCallback(
  //   ({ item }: { index: number; item: Event }) => (
  //     <Cell event={item} key={item.id} />
  //   ),
  //   [],
  // );

  // const keyExtractor = useCallback((item: Event) => item.id, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{ uri: channel.imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      {/* <FlatList
        style={styles.events}
        data={events}
        renderItem={renderItem}
        horizontal
        removeClippedSubviews
        scrollEventThrottle={16}
        keyExtractor={keyExtractor}
        windowSize={2}
      /> */}
    </View>
  );
};

export default memo(EPGRow);
