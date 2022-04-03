import React, { memo } from 'react';
import { View } from 'react-native';
import { Channel } from 'store/channels/types';
import { useEvents } from 'store/events/hooks';
import { Event } from 'store/events/types';

import Cell from '../Cell';
import styles from './styles';

interface Props {
  channel: Channel;
}

const EPGRow = ({ channel }: Props) => {
  const { events } = useEvents(channel.id);

  return <View style={styles.container}>{events.map(renderCell)}</View>;
};

const renderCell = (event: Event) => (
  <Cell event={event} key={`cell:${event.id}`} />
);

export default memo(EPGRow);
