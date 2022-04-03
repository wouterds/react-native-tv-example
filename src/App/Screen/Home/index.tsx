import EPG from 'components/EPG';
import React, { memo } from 'react';
import { Platform, SafeAreaView } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import styles from './styles';

const HomeScreen = () => {
  if (Platform.isTV || DeviceInfo.isTablet()) {
    return <EPG />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <EPG />
    </SafeAreaView>
  );
};

export default memo(HomeScreen);
