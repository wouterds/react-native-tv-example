import React, { memo } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Channel } from 'store/channels/types';
import { useEvents } from 'store/events/hooks';

import styles from './styles';

interface Props {
  channel: Channel;
}

const EPGRow = ({ channel }: Props) => {
  const events = useEvents(channel.id);

  if (channel.id === 'Een.be') {
    console.log(channel, events);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{ uri: channel.imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default memo(EPGRow);
