import { usePreviousValue } from 'beautiful-react-hooks';
import { useEPG } from 'components/EPG/context';
import { differenceInMinutes, lightFormat } from 'date-fns';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
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

  const { setActiveEventId, activeEventId } = useEPG();

  const onFocus = useCallback(() => {
    setActiveEventId(event.id);
  }, [event.id, setActiveEventId]);

  const isFocused = useMemo(() => {
    return event.id === activeEventId;
  }, [event.id, activeEventId]);

  const styles = useMemo(
    () => createStyles({ duration, isFocused }),
    [duration, isFocused],
  );

  const wasFocused = usePreviousValue(isFocused);
  useEffect(() => {
    if (typeof wasFocused !== 'undefined' && wasFocused !== isFocused) {
      console.log(event.id, `focus changed (isFocused=${isFocused})`);
    }
  }, [event.id, isFocused, wasFocused]);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onFocus={onFocus}
      tvParallaxProperties={{ enabled: false }}>
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
