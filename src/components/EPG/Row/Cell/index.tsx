import { useEPG } from 'components/EPG/context';
import { differenceInMinutes, lightFormat } from 'date-fns';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Event } from 'store/events/types';
import { generateEventId } from 'utils/event';

import createStyles from './styles';

interface Props {
  event: Event;
  index: number;
}

const EPGCell = ({ event, index }: Props) => {
  const duration = useMemo(
    () => differenceInMinutes(event.endTime, event.startTime),
    [event.endTime, event.startTime],
  );

  const eventId = useMemo(
    () => generateEventId(event.channelId, index),
    [event.channelId, index],
  );

  const { setActiveEvent, activeEvent } = useEPG();

  const onFocus = useCallback(() => {
    setActiveEvent(eventId);
  }, [eventId, setActiveEvent]);

  const isFocused = useMemo(() => {
    return eventId === activeEvent;
  }, [eventId, activeEvent]);

  const styles = useMemo(
    () => createStyles({ duration, isFocused }),
    [duration, isFocused],
  );

  useEffect(() => {
    console.log(eventId, isFocused);
  }, [eventId, isFocused]);

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
