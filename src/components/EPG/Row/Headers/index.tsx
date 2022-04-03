import React, { memo } from 'react';
import { ScrollView } from 'react-native';
import { useChannels } from 'store/channels/hooks';
import { Channel } from 'store/channels/types';

import RowHeader from './Header';

const renderRowHeader = (channel: Channel) => (
  <RowHeader channel={channel} key={`channel:${channel.id}`} />
);

const EPGRowHeaders = () => {
  const { channels } = useChannels();

  return (
    <ScrollView removeClippedSubviews>
      {channels.map(renderRowHeader)}
    </ScrollView>
  );
};

export default memo(EPGRowHeaders);
