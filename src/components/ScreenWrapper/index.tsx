import React, { memo, ReactNode } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';

import styles from './styles';

const ScreenWrapper = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: ViewStyle;
}) => {
  return (
    <View style={[styles.container, style]}>
      <ScrollView style={styles.content}>{children}</ScrollView>
    </View>
  );
};

export default memo(ScreenWrapper);
