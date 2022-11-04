import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { Route, RouteParams } from 'components/App/Navigation';
import React, { memo } from 'react';
import { Platform, TVFocusGuideView, View } from 'react-native';

import Button from './Button';
import styles from './styles';

const TVHeaderNavigation = () => {
  const route = useRoute();
  const { reset } = useNavigation<NavigationProp<RouteParams>>();

  if (!Platform.isTV) {
    return null;
  }

  return (
    <TVFocusGuideView style={styles.container}>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Discover}
          onPress={() => reset({ routes: [{ name: Route.Discover }] })}>
          Discover
        </Button>
      </View>
      <View style={styles.item}>
        <Button active={route.name === Route.Movie}>Movies</Button>
      </View>
      <View style={styles.item}>
        <Button active={route.name === Route.Show}>Shows</Button>
      </View>
      <View style={styles.spacer} />
      <View style={styles.item}>
        <Button
          active={route.name === Route.Settings}
          onPress={() => reset({ routes: [{ name: Route.Settings }] })}>
          Settings
        </Button>
      </View>
    </TVFocusGuideView>
  );
};

export default memo(TVHeaderNavigation);
