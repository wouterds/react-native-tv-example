import Swimlane from 'components/Swimlane';
import React, { memo } from 'react';
import { Platform, SafeAreaView, ScrollView, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import styles from './styles';

const DiscoverScreen = () => {
  if (Platform.isTV || DeviceInfo.isTablet()) {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Swimlane.PopularOnTV />
        </ScrollView>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Swimlane.PopularOnTV />
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(DiscoverScreen);
