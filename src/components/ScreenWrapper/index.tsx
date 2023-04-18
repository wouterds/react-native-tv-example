import { useIsFocused, useRoute } from '@react-navigation/native';
import { Route } from 'navigation';
import React, { memo, ReactNode, useEffect } from 'react';
import {
  ScrollView,
  TVEventControl,
  TVFocusGuideView,
  ViewStyle,
} from 'react-native';

import styles from './styles';
import TVHeaderNavigation from './TVHeaderNavigation';

interface Props {
  children: ReactNode;
  style?: ViewStyle;
  header?: boolean;
}

const ScreenWrapper = ({ children, style, header }: Props) => {
  const isFocused = useIsFocused();
  const { name: route } = useRoute();

  useEffect(() => {
    if (isFocused) {
      if (Route.Discover === route) {
        // exit on back press
        TVEventControl.disableTVMenuKey();
      } else {
        // navigate back on back press
        TVEventControl.enableTVMenuKey();
      }
    }
  }, [route, isFocused]);

  return (
    <TVFocusGuideView
      style={[styles.container, style]}
      trapFocusLeft
      trapFocusRight
      trapFocusUp
      trapFocusDown
      autoFocus>
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {header && <TVHeaderNavigation />}
        {children}
      </ScrollView>
    </TVFocusGuideView>
  );
};

export default memo(ScreenWrapper);
