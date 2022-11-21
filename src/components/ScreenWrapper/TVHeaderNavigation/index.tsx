import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useTVFocus } from 'hooks/useTVFocus';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { Platform, View } from 'react-native';
import FocusService from 'services/focus';
import { findNode } from 'utils/node';

import Button from './Button';
import styles from './styles';

const TVHeaderNavigation = () => {
  const route = useRoute();
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();

  const { ref: refDiscover, nextFocusLeft: nextFocusLeftDiscover } = useTVFocus(
    { first: true },
  );
  const { ref: refShows } = useTVFocus();
  const {
    ref: refSettings,
    nextFocusRight: nextFocusRightSettings,
    hasTVPreferredFocus: hasTVPreferredFocusSettings,
  } = useTVFocus({
    last: true,
    hasInitialFocus: route.name === Route.Settings,
  });

  if (!Platform.isTV) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Discover}
          onPress={() => {
            FocusService.instance?.clearFocusedTag();
            navigate(Route.Discover);
          }}
          ref={refDiscover}
          nextFocusLeft={nextFocusLeftDiscover}>
          Discover
        </Button>
      </View>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Movies}
          onPress={() => {
            FocusService.instance?.clearFocusedTag();
            navigate(Route.Movies);
          }}>
          Movies
        </Button>
      </View>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Shows}
          onPress={() => {
            FocusService.instance?.clearFocusedTag();
            navigate(Route.Shows);
          }}
          ref={refShows}
          nextFocusRight={findNode(refSettings)}>
          Shows
        </Button>
      </View>
      <View style={styles.spacer} />
      <View style={styles.item}>
        <Button
          active={route.name === Route.Settings}
          onPress={() => {
            FocusService.instance?.clearFocusedTag();
            navigate(Route.Settings);
          }}
          ref={refSettings}
          nextFocusLeft={findNode(refShows)}
          nextFocusRight={nextFocusRightSettings}
          hasTVPreferredFocus={hasTVPreferredFocusSettings}>
          Settings
        </Button>
      </View>
    </View>
  );
};

export default memo(TVHeaderNavigation);
