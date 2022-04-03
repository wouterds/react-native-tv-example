import { differenceInMinutes, lightFormat } from 'date-fns';
import React, { memo, useMemo } from 'react';
import { Text, View } from 'react-native';
import { Event } from 'store/events/types';

import createStyles from './styles';

interface Props {
  event: Event;
}

const EPGCell = ({ event }: Props) => {
  const duration = useMemo(
    () => differenceInMinutes(event.endTime, event.startTime),
    [event.endTime, event.startTime],
  );

  const styles = useMemo(() => createStyles({ duration }), [duration]);

  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1}>
        {event.title}
      </Text>
      <Text style={styles.time} numberOfLines={1}>
        {lightFormat(event.startTime, 'HH:mm')} -{' '}
        {lightFormat(event.endTime, 'HH:mm')}
      </Text>
    </View>
  );
};

export default memo(EPGCell);
