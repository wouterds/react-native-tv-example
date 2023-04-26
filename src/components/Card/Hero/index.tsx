import MaskedView from '@react-native-masked-view/masked-view';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import usePreviousValue from 'beautiful-react-hooks/usePreviousValue';
import FastImageBackground from 'components/FastImageBackground';
import { useComputedStyles } from 'hooks';
import { RouteParams } from 'navigation';
import React, { useCallback, useEffect, useMemo } from 'react';
import { Alert, Linking, Platform, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MediaAsset } from 'store/types/media-asset';
import { Movie } from 'store/types/movie';
import { Show } from 'store/types/show';
import { useVideos } from 'store/videos/hooks';

import BackButton from './BackButton';
import createStyles from './styles';
import WatchTrailer from './WatchTrailer';

interface Props {
  item: MediaAsset;
}

const HeroCard = ({ item }: Props) => {
  const { bottom } = useSafeAreaInsets();
  const styles = useComputedStyles(createStyles, { bottom });
  const { goBack } = useNavigation<NavigationProp<RouteParams>>();

  const { fetch, data, isLoading } = useVideos({
    id: item.id,
    type: item.type,
  });

  const youtubeUrl = useMemo(() => {
    if (!data?.[0]?.key) {
      return null;
    }

    return `https://www.youtube.com/watch?v=${data[0].key}`;
  }, [data]);

  const openYoutubeUrl = useCallback(async () => {
    if (youtubeUrl) {
      try {
        await Linking.openURL(youtubeUrl);
      } catch {
        Alert.alert('Could not open YouTube video');
      }
    }
  }, [youtubeUrl]);

  const wasLoading = usePreviousValue(isLoading);
  useEffect(() => {
    if (wasLoading && youtubeUrl) {
      openYoutubeUrl();
    }
  }, [youtubeUrl, wasLoading, openYoutubeUrl]);

  const onWatchTrailerPress = useCallback(() => {
    if (youtubeUrl) {
      openYoutubeUrl();
      return;
    }

    fetch();
  }, [fetch, youtubeUrl, openYoutubeUrl]);

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
        <WatchTrailer onPress={onWatchTrailerPress} />
      </View>
    </View>
  );
};

export default HeroCard;
