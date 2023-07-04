import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import DebugInfo from 'components/DebugInfo';
import { withSafeAreaContext } from 'hocs';
import ms from 'ms';
import { Navigation } from 'navigation';
import React, { useEffect, useState } from 'react';
import { LogBox, StatusBar, View } from 'react-native';
import Config from 'react-native-config';
import Screen from 'screens';
import { withStore } from 'store/withStore';

import styles from './styles';

if (Config.DISABLE_YELLOW_BOX === 'true') {
  LogBox.ignoreAllLogs();
}

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // do here potentially blocking tasks
    // timer is just for demo
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, ms('2 seconds'));

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.container}>
        <NavigationContainer
          theme={{
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: styles.container.backgroundColor,
            },
          }}>
          <DebugInfo />
          {!isReady ? <Screen.Splash /> : <Navigation />}
        </NavigationContainer>
      </View>
    </>
  );
};

export default withSafeAreaContext(withStore(App));
