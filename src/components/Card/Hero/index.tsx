import MaskedView from '@react-native-masked-view/masked-view';
import { useNavigation } from '@react-navigation/native';
import FastImageBackground from 'components/FastImageBackground';
import { useComputedStyles } from 'hooks';
import React from 'react';
import { Platform, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MediaAsset } from 'store/types/media-asset';
import { Movie } from 'store/types/movie';
import { Show } from 'store/types/show';
import { useVideos } from 'store/videos/hooks';

import BackButton from './BackButton';
import createStyles from './styles';

interface Props {
  item: MediaAsset;
}

const HeroCard = ({ item }: Props) => {
  const { bottom } = useSafeAreaInsets();
  const styles = useComputedStyles(createStyles, { bottom });
  const { goBack } = useNavigation();

  const { data, isLoading, hasError, isEmpty } = useVideos({
    id: item.id,
    type: item.type,
  });

  console.log({ data, isLoading, hasError, isEmpty });

  return (
    <View style={styles.header}>
      <MaskedView
        renderToHardwareTextureAndroid
        style={styles.mask}
        maskElement={
          <LinearGradient
            style={styles.gradient}
            angle={10}
            useAngle
            colors={[
              'rgba(255, 255, 255, 0)',
              'rgba(255, 255, 255, 0.1)',
              'rgba(255, 255, 255, 0.2)',
              'rgba(255, 255, 255, 0.3)',
              'rgba(255, 255, 255, 0.4)',
              'rgba(255, 255, 255, 0.5)',
              'rgba(255, 255, 255, 0.75)',
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
        {Platform.isTV && <BackButton onPress={goBack} />}
        <View style={styles.spacer} />
        <Text
          style={styles.title}
          adjustsFontSizeToFit
          numberOfLines={Platform.isTV ? 1 : 2}>
          {item.type === 'movie' ? (item as Movie).title : null}
          {item.type === 'show' ? (item as Show).name : null}
        </Text>
        {!!item.overview && (
          <Text
            style={styles.overview}
            numberOfLines={Platform.isTV ? 4 : undefined}>
            {item.overview}
          </Text>
        )}
      </View>
    </View>
  );
};

export default HeroCard;
