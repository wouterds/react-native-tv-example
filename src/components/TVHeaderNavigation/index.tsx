import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { Platform, TVFocusGuideView, View } from 'react-native';

import Button from './Button';
import styles from './styles';

const TVHeaderNavigation = () => {
  const route = useRoute();
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();

  if (!Platform.isTV) {
    return null;
  }

  return (
    <TVFocusGuideView trapFocusLeft trapFocusRight style={styles.container}>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Discover}
          onPress={() => {
            navigate(Route.Discover);
          }}>
          Discover
        </Button>
      </View>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Movies}
          onPress={() => {
            navigate(Route.Movies);
          }}>
          Movies
        </Button>
      </View>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Shows}
          onPress={() => {
            navigate(Route.Shows);
          }}>
          Shows
        </Button>
      </View>
      <View style={styles.spacer} />
      <View style={styles.item}>
        <Button
          active={route.name === Route.Settings}
          onPress={() => {
            navigate(Route.Settings);
          }}>
          Settings
        </Button>
      </View>
    </TVFocusGuideView>
  );
};

export default memo(TVHeaderNavigation);
