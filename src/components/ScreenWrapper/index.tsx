import React, { memo, ReactNode } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';

import styles from './styles';
import TVHeaderNavigation from './TVHeaderNavigation';

const ScreenWrapper = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: ViewStyle;
}) => {
  return (
    <View style={[styles.container, style]}>
      <ScrollView style={styles.content}>
        <TVHeaderNavigation />
        {children}
      </ScrollView>
    </View>
  );
};

export default memo(ScreenWrapper);
