import { useDeviceOrientation } from '@react-native-community/hooks';
import { useComputedStyles, useFPSMetrics } from 'hooks';
import React, { memo, useMemo } from 'react';
import { Text, View } from 'react-native';
import { getReadableVersion } from 'react-native-device-info';
import { SafeAreaView } from 'react-native-safe-area-context';

import createStyles from './styles';

const DebugInfo = () => {
  const orientation = useDeviceOrientation();
  const { fps, average } = useFPSMetrics(); // "FPS" kinda, but not really
  const cpu = useMemo(() => Math.round((1 - fps / 60) * 100) / 100, [fps]);
  const cpuAvg = useMemo(
    () => Math.round((1 - average / 60) * 100) / 100,
    [average],
  );
  const styles = useComputedStyles(createStyles, { cpu, cpuAvg, orientation });

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top', 'right']}>
        <View style={styles.box}>
          <View style={styles.content}>
            <Text style={[styles.text, styles.config]}>
              {__DEV__ ? 'DEBUG' : 'RELEASE'}&nbsp;
            </Text>
            <Text style={styles.text}>V{getReadableVersion()}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.content}>
            <View style={styles.bars}>
              <View style={styles.row}>
                <View style={[styles.bar, styles.live, styles.live1]} />
                <View style={[styles.bar, styles.avg, styles.avg1]} />
              </View>
              <View style={styles.row}>
                <View style={[styles.bar, styles.live, styles.live2]} />
                <View style={[styles.bar, styles.avg, styles.avg2]} />
              </View>
              <View style={styles.row}>
                <View style={[styles.bar, styles.live, styles.live3]} />
                <View style={[styles.bar, styles.avg, styles.avg3]} />
              </View>
              <View style={styles.row}>
                <View style={[styles.bar, styles.live, styles.live4]} />
                <View style={[styles.bar, styles.avg, styles.avg4]} />
              </View>
              <View style={styles.row}>
                <View style={[styles.bar, styles.live, styles.live5]} />
                <View style={[styles.bar, styles.avg, styles.avg5]} />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default memo(DebugInfo);
