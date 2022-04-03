import React, { memo } from 'react';
import { Platform, ScrollView, View } from 'react-native';
import { Channel } from 'store/channels/types';

import { withEPGContext } from './context';
import { usePaginatedChannels } from './hooks/usePaginatedChannels';
import Row from './Row';
import RowHeader from './Row/Header';
import styles from './styles';

const CHANNELS_PER_PAGE = Platform.isTV ? 8 : 20;

const EPGGrid = () => {
  const { channels } = usePaginatedChannels(CHANNELS_PER_PAGE);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.vertical} removeClippedSubviews>
        <View>{channels.map(renderRowHeader)}</View>
        <ScrollView
          contentContainerStyle={styles.horizontal}
          removeClippedSubviews
          horizontal>
          {channels.map(renderRow)}
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
