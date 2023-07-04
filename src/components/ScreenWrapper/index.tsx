import { useHeaderHeight } from '@react-navigation/elements';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { useComputedStyles } from 'hooks';
import { Route } from 'navigation';
import React, { memo, ReactNode, useEffect } from 'react';
import {
  ScrollView,
  TVEventControl,
  TVFocusGuideView,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import createStyles from './styles';

interface Props {
  children: ReactNode;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
}

const ScreenWrapper = ({ children, style, contentStyle }: Props) => {
  const isFocused = useIsFocused();
  const { name: route } = useRoute();
  const { height } = useWindowDimensions();
  const { top, bottom } = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  const styles = useComputedStyles(createStyles, {
    height,
    headerHeight,
    top,
    bottom,
  });

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
        style={styles.contentContainer}
        contentContainerStyle={[styles.content, contentStyle]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </TVFocusGuideView>
  );
};

export default memo(ScreenWrapper);
