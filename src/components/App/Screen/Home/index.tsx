import React, { memo, useEffect } from 'react';
import { Platform, SafeAreaView } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { usePopularOnTV } from 'store/popular-on-tv/hooks';

import styles from './styles';

const HomeScreen = () => {
  const { popularOnTV } = usePopularOnTV();

  useEffect(() => {
    console.log('✅ data', popularOnTV);
  }, [popularOnTV]);

  if (Platform.isTV || DeviceInfo.isTablet()) {
    return null;
  }

  return <SafeAreaView style={styles.container}>{null}</SafeAreaView>;
};

export default memo(HomeScreen);
