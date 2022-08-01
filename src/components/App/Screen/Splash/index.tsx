import React, { memo } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const SplashScreen = () => (
  <>
    <StatusBar barStyle="light-content" />
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <FastImage
          source={require('assets/images/logo.png')}
          style={styles.logo}
        />
        <ActivityIndicator color={styles.loader.color} style={styles.loader} />
      </SafeAreaView>
    </View>
  </>
);

export default memo(SplashScreen);
