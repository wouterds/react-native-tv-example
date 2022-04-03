import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Channel } from 'store/channels/types';

import styles from './styles';

interface Props {
  index: number;
  item: Channel;
}

const EPGRow = ({ item: channel }: Props) => {
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

export default EPGRow;
