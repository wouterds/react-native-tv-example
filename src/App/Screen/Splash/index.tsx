import { useAppState } from '@react-native-community/hooks';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Route } from 'App/Navigation';
import { useDidMount, usePreviousValue } from 'beautiful-react-hooks';
import { differenceInMilliseconds } from 'date-fns';
import ms from 'ms';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Alert, StatusBar, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const SplashScreen = () => {
  const [finishedLoading, setFinishedLoading] = useState(false);

  useDidMount(() => {
    setTimeout(() => {
      setFinishedLoading(true);
    }, ms('2s'));
  });

  if (finishedLoading) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <SafeAreaView style={styles.content}>
          <FastImage
            source={require('assets/images/logo.png')}
            style={styles.logo}
          />
          <ActivityIndicator
            color={styles.loader.color}
            style={styles.loader}
          />
        </SafeAreaView>
      </View>
    </>
  );
};

export default SplashScreen;
