import { useIsFocused, useRoute } from '@react-navigation/native';
import TVHeaderNavigation from 'components/TVHeaderNavigation';
import { useComputedStyles } from 'hooks';
import { Route } from 'navigation';
import React, { memo, ReactNode, useEffect } from 'react';
import {
  ScrollView,
  TVEventControl,
  TVFocusGuideView,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import createStyles from './styles';

interface Props {
  children: ReactNode;
  style?: ViewStyle;
  header?: boolean;
}

const ScreenWrapper = ({ children, style, header }: Props) => {
  const isFocused = useIsFocused();
  const { name: route } = useRoute();
  const { bottom } = useSafeAreaInsets();
  const styles = useComputedStyles(createStyles, { bottom });

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
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {header && <TVHeaderNavigation />}
        {children}
      </ScrollView>
    </TVFocusGuideView>
  );
};

export default memo(ScreenWrapper);
