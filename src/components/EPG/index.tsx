import React, { memo, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useChannels } from 'store/channels/hooks';
import { Channel } from 'store/channels/types';

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

  return (
    <FlatList
      style={styles.container}
      data={channels}
      renderItem={renderItem}
    />
  );
};

export default memo(EPGGrid);
