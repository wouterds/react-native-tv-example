import MaskedView from '@react-native-masked-view/masked-view';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import FastImageBackground from 'components/FastImageBackground';
import { useYouTubeMP4 } from 'hooks';
import { Route, RouteParams } from 'navigation';
import React, { memo, useEffect } from 'react';
import { ActivityIndicator, Platform, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';

import styles from './styles';

const PlayerScreen = () => {
  const { params } = useRoute<RouteProp<RouteParams, Route.Player>>();
  const { goBack } = useNavigation();
  const { loading, url } = useYouTubeMP4(params.youTubeId);

  useEffect(() => {
    if (!loading && !url) {
      goBack();
    }
  }, [loading, url, goBack]);

  return (
    <View style={styles.container}>
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
          source={{ uri: params.backgroundImageUrl }}
        />
      </MaskedView>
      <View style={styles.content}>
        <View style={styles.loader}>
          <ActivityIndicator
            style={styles.loaderIndicator}
            color={styles.loaderText.color}
          />
          <Text style={styles.loaderText}>Loading...</Text>
        </View>
        {!!url && (
          <Video
            style={styles.video}
            source={{ uri: url }}
            disableFocus
            controls
            resizeMode="cover"
            fullscreen
            onEnd={goBack}
            preventsDisplaySleepDuringVideoPlayback
            pictureInPicture={!Platform.isTV}
            ignoreSilentSwitch="ignore"
          />
        )}
      </View>
    </View>
  );
};

export default memo(PlayerScreen);
