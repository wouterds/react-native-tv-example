import React, { memo } from 'react';
import { ScrollView, View } from 'react-native';
import { useChannels } from 'store/channels/hooks';
import { Channel } from 'store/channels/types';

import { EPGContextProvider } from './context';
import Row from './Row';
import RowHeader from './Row/Header';
import styles from './styles';

const EPGGrid = () => {
  const { channels } = useChannels();

  return (
    <EPGContextProvider>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.rows} removeClippedSubviews>
          <View>{channels.map(renderRowHeader)}</View>
          <ScrollView
            contentContainerStyle={styles.events}
            removeClippedSubviews
            horizontal>
            {channels.map(renderRow)}
          </ScrollView>
        </ScrollView>
      </View>
    </EPGContextProvider>
  );
};

const renderRowHeader = (channel: Channel) => (
  <RowHeader channel={channel} key={`row-header:${channel.id}`} />
);

const renderRow = (channel: Channel) => (
  <Row channel={channel} key={`row:${channel.id}`} />
);

export default memo(EPGGrid);
