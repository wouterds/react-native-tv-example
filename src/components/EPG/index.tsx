import React from 'react';
import { FlatList } from 'react-native';
import { useChannels } from 'store/channels/hooks';

import Row from './Row';
import styles from './styles';

const EPGGrid = () => {
  const { channels } = useChannels();

  return <FlatList style={styles.container} data={channels} renderItem={Row} />;
};

export default EPGGrid;
