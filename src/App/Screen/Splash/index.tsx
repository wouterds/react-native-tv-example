import { differenceInMilliseconds } from 'date-fns';
import ms from 'ms';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from 'store/app/hooks';

import styles from './styles';

const SplashScreen = () => {
  const mountTime = useRef<Date>();
  const { bootstrap, isLoading, hasError } = useApp();
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (mountTime.current && !isLoading && !hasError) {
      setTimeout(() => {
        setIsHidden(true);
      }, Math.max(ms('2 seconds') - differenceInMilliseconds(new Date(), mountTime.current), ms('2 seconds')));
      return;
    }

    if (!mountTime.current) {
      mountTime.current = new Date();
      bootstrap();
    }
  }, [hasError, isLoading, bootstrap]);

  if (isHidden) {
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
