import { useFPSMetrics } from 'hooks/useFPSMetrics';
import React, { useMemo } from 'react';
import { Platform, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import createStyles from './styles';

const FPS = () => {
  const { fps, average } = useFPSMetrics();
  const styles = useMemo(() => createStyles({ fps, average }), [fps, average]);
  const SafeArea = useMemo(() => {
    if (Platform.isTV) {
      return View;
    }

    return SafeAreaView;
  }, []);

  return (
    <View style={styles.container}>
      <SafeArea>
        <View style={styles.content}>
          <Text style={styles.text}>
            FPS:{' '}
            <Text style={styles.fps}>{fps.toString().padStart(2, '0')}</Text>{' '}
            AVG:{' '}
            <Text style={styles.average}>
              {average.toString().padStart(2, '0')}
            </Text>
          </Text>
        </View>
      </SafeArea>
    </View>
  );
};

export default FPS;
