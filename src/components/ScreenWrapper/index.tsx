import React, { memo, ReactNode } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';

import styles from './styles';
import TVHeaderNavigation from './TVHeaderNavigation';

interface Props {
  children: ReactNode;
  style?: ViewStyle;
  header?: boolean;
}

const ScreenWrapper = ({ children, style, header }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <ScrollView style={styles.content}>
        {header && <TVHeaderNavigation />}
        {children}
      </ScrollView>
    </View>
  );
};

export default memo(ScreenWrapper);
