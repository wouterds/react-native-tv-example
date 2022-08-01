import MaskedView from '@react-native-masked-view/masked-view';
import FastImageBackground from 'components/FastImageBackground';
import React from 'react';
import { Platform, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Movie } from 'store/types/movie';
import { Show } from 'store/types/show';

import styles from './styles';

interface Props {
  item: Show | Movie;
}

const HeroCard = ({ item }: Props) => {
  return (
    <View style={styles.header}>
      <MaskedView
        renderToHardwareTextureAndroid
        style={styles.mask}
        maskElement={
          <LinearGradient
            style={styles.gradient}
            angle={-30}
            colors={[
              'rgba(255, 255, 255, 0)',
              'rgba(255, 255, 255, 0.2)',
              'rgba(255, 255, 255, 0.4)',
              'rgba(255, 255, 255, 0.6)',
              'rgba(255, 255, 255, 0.8)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.25)',
              'rgba(255, 255, 255, 0)',
            ]}
          />
        }>
        <FastImageBackground
          style={styles.image}
          source={{ uri: item.backdrop_url }}
        />
      </MaskedView>
      <View style={styles.content}>
        <Text
          style={styles.title}
          adjustsFontSizeToFit
          numberOfLines={Platform.isTV ? 1 : 2}>
          {'title' in item && item.title}
          {'name' in item && item.name}
        </Text>
        <Text
          style={styles.overview}
          numberOfLines={Platform.isTV ? 6 : undefined}>
          {item.overview}
        </Text>
      </View>
    </View>
  );
};

export default HeroCard;
