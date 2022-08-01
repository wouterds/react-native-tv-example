import React, { memo, ReactNode } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  View,
  ViewStyle,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import styles from './styles';

const Wrapper = Platform.isTV || DeviceInfo.isTablet() ? View : SafeAreaView;

const ScreenWrapper = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: ViewStyle;
}) => {
  return (
    <Wrapper style={[styles.container, style]}>
      <ScrollView style={styles.content}>{children}</ScrollView>
    </Wrapper>
  );
};

export default memo(ScreenWrapper);
