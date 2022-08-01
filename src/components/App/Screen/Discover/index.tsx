import Swimlane from 'components/Swimlane';
import React, { memo } from 'react';
import { Platform, SafeAreaView, ScrollView, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import styles from './styles';

const Wrapper = Platform.isTV || DeviceInfo.isTablet() ? View : SafeAreaView;

const DiscoverScreen = () => {
  return (
    <Wrapper style={styles.container}>
      <ScrollView style={styles.content}>
        <Swimlane.PopularTVShows />
        <Swimlane.TopRatedTVShows />
      </ScrollView>
    </Wrapper>
  );
};

export default memo(DiscoverScreen);
