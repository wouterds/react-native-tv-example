import React, { memo, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { useChannels } from 'store/channels/hooks';
import { Channel } from 'store/channels/types';

import { EPGContextProvider } from './context';
import Row from './Row';
import styles from './styles';

const EPGGrid = () => {
  const { channels } = useChannels();

  const renderItem = useCallback(
    ({ item }: { index: number; item: Channel }) => {
      return <Row channel={item} key={`channel:${item.id}`} />;
    },
    [],
  );

  const keyExtractor = useCallback((item: Channel) => `channel:${item.id}`, []);

  return (
    <EPGContextProvider>
      <View style={styles.container}>
        <FlatList
          style={styles.channels}
          data={channels}
          renderItem={renderItem}
          removeClippedSubviews
          scrollEventThrottle={16}
          keyExtractor={keyExtractor}
          windowSize={2}
        />
      </View>
    </EPGContextProvider>
  );
};

export default memo(EPGGrid);
