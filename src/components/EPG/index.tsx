import React, { memo, useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { useChannels } from 'store/channels/hooks';
import { Channel } from 'store/channels/types';

import { EPGContextProvider } from './context';
import RowHeader from './Row/Header';
import styles from './styles';

const EPGGrid = () => {
  const { channels } = useChannels();

  const renderChannel = useCallback(
    (channel: Channel) => (
      <RowHeader channel={channel} key={`channel:${channel.id}`} />
    ),
    [],
  );

  return (
    <EPGContextProvider>
      <View style={styles.container}>
        <ScrollView removeClippedSubviews>
          {channels.map(renderChannel)}
        </ScrollView>
      </View>
    </EPGContextProvider>
  );
};

export default memo(EPGGrid);
