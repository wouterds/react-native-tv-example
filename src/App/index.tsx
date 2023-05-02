import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import DebugInfo from 'components/DebugInfo';
import { differenceInMilliseconds } from 'date-fns';
import { withSafeAreaContext } from 'hocs';
import ms from 'ms';
import { Navigation } from 'navigation';
import React, { useEffect, useRef, useState } from 'react';
import { LogBox, StatusBar, View } from 'react-native';
import Config from 'react-native-config';
import Screen from 'screens';
import { useApp } from 'store/app/hooks';
import { withStore } from 'store/withStore';

import styles from './styles';

if (Config.DISABLE_YELLOW_BOX === 'true') {
  LogBox.ignoreAllLogs();
}

const App = () => {
  const mountTime = useRef<Date>();
  const { bootstrap, isLoading, hasError } = useApp();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!mountTime.current) {
      mountTime.current = new Date();
      bootstrap();
    }

    if (mountTime.current && !isLoading && !hasError) {
      setTimeout(() => {
        setIsReady(true);
        // some arbitrary logic to make sure the splash is always shown at least 1 second
      }, Math.max(ms('1 seconds') - differenceInMilliseconds(new Date(), mountTime.current), ms('1 seconds')));
      return;
    }
  }, [hasError, isLoading, bootstrap]);

  return (
    <View style={styles.container}>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: styles.container.backgroundColor,
          },
        }}>
        <StatusBar barStyle="light-content" />
        <DebugInfo />
        {!isReady ? <Screen.Splash /> : <Navigation />}
      </NavigationContainer>
    </View>
  );
};

export default withSafeAreaContext(withStore(App));
