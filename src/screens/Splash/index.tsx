import React, { memo } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const SplashScreen = () => (
  <>
    <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor="transparent"
    />
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <FastImage
          source={require('resources/images/logo.png')}
          style={styles.logo}
        />
        <ActivityIndicator
          style={styles.loader}
          color={styles.loader.color}
          size="large"
        />
      </SafeAreaView>
    </View>
  </>
);

export default memo(SplashScreen);
