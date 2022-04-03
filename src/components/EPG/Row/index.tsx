import ms from 'ms';
import React, { memo } from 'react';
import { View } from 'react-native';
import Config from 'react-native-config';
import { Channel } from 'store/channels/types';
import { useEvents } from 'store/events/hooks';
import { Event } from 'store/events/types';

import Cell from '../Cell';
import styles from './styles';

interface Props {
  channel: Channel;
}

const EPGRow = ({ channel }: Props) => {
  const { events } = useEvents(channel.id, {
    window: ms(Config.EPG_WINDOW),
  });

  console.log(`${channel.id}: ${events.length} events`);

  return <View style={styles.container}>{events.map(renderCell)}</View>;
};

const renderCell = (event: Event) => (
  <Cell event={event} key={`cell:${event.id}`} />
);

export default memo(EPGRow);
