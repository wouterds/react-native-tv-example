import {
  NavigationProp,
  StackActions,
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
  const { dispatch } = useNavigation<NavigationProp<RouteParams>>();

  if (!Platform.isTV) {
    return null;
  }

  return (
    <TVFocusGuideView trapFocusLeft trapFocusRight style={styles.container}>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Discover}
          onPress={() => {
            dispatch(StackActions.replace(Route.Discover));
          }}>
          Discover
        </Button>
      </View>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Movies}
          onPress={() => {
            dispatch(StackActions.replace(Route.Movies));
          }}>
          Movies
        </Button>
      </View>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Shows}
          onPress={() => {
            dispatch(StackActions.replace(Route.Shows));
          }}>
          Shows
        </Button>
      </View>
      <View style={styles.spacer} />
      <View style={styles.item}>
        <Button
          active={route.name === Route.Settings}
          onPress={() => {
            dispatch(StackActions.replace(Route.Settings));
          }}>
          Settings
        </Button>
      </View>
    </TVFocusGuideView>
  );
};

export default memo(TVHeaderNavigation);
