import { useIsFocused, useRoute } from '@react-navigation/native';
import TVHeaderNavigation from 'components/TVHeaderNavigation';
import { Route } from 'navigation';
import React, { memo, ReactNode, useEffect } from 'react';
import {
  ScrollView,
  TVEventControl,
  TVFocusGuideView,
  ViewStyle,
} from 'react-native';

import styles from './styles';

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
    <TVFocusGuideView style={[styles.container, style]} autoFocus>
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
