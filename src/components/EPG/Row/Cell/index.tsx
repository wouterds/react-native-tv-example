import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { Event } from 'store/events/types';

import styles from './styles';

interface Props {
  event: Event;
}

const EPGCell = ({ event }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1}>
        {event.title}
      </Text>
    </View>
  );
};

export default memo(EPGCell);
