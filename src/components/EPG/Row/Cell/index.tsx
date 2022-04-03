import { differenceInMinutes, lightFormat } from 'date-fns';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
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
  const [isFocused, setIsFocused] = useState(false);
  const onFocus = useCallback(() => setIsFocused(true), []);
  const onBlur = useCallback(() => setIsFocused(false), []);

  const styles = useMemo(
    () => createStyles({ duration, isFocused }),
    [duration, isFocused],
  );

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onFocus={onFocus}
      onBlur={onBlur}>
      <Text style={[styles.text, styles.title]} numberOfLines={1}>
        {event.title}
      </Text>
      <Text style={[styles.text, styles.time]} numberOfLines={1}>
        {lightFormat(event.startTime, 'HH:mm')} -{' '}
        {lightFormat(event.endTime, 'HH:mm')}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(EPGCell);
