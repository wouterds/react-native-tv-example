import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { Route, RouteParams } from 'components/App/Navigation';
import { useTVFocus } from 'hooks/useTVFocus';
import React, { memo, RefObject, useMemo } from 'react';
import { Platform, TVFocusGuideView, View } from 'react-native';
import FocusService from 'services/focus';
import { findNode } from 'utils/node';

import Button from './Button';
import styles from './styles';

const TVHeaderNavigation = () => {
  const route = useRoute();
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();

  const {
    setRef: setRefDiscover,
    nextFocusLeft: nextFocusLeftDiscover,
    ref: refDiscover,
  } = useTVFocus({
    first: true,
  });
  const { setRef: setRefMovies, ref: refMovies } = useTVFocus();
  const { setRef: setRefShows, ref: refShows } = useTVFocus();
  const {
    setRef: setRefSettings,
    nextFocusRight: nextFocusRightSettings,
    ref: refSettings,
  } = useTVFocus({
    last: true,
  });

  const refs: Record<string, RefObject<unknown>> = useMemo(
    () => ({
      [Route.Discover]: refDiscover,
      [Route.Movies]: refMovies,
      [Route.Shows]: refShows,
      [Route.Settings]: refSettings,
    }),
    [refDiscover, refMovies, refShows, refSettings],
  );

  if (!Platform.isTV) {
    return null;
  }

  return (
    <TVFocusGuideView
      style={styles.container}
      destinations={[findNode(refs[route.name]) as number]}>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Discover}
          clearOnBlur
          onBlur={() => FocusService.instance?.clearFocusedTag()}
          onPress={() => navigate(Route.Discover)}
          ref={setRefDiscover}
          nextFocusLeft={nextFocusLeftDiscover}
          hasTVPreferredFocus={route.name === Route.Discover}>
          Discover
        </Button>
      </View>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Movies}
          clearOnBlur
          onBlur={() => FocusService.instance?.clearFocusedTag()}
          onPress={() => navigate(Route.Movies)}
          ref={setRefMovies}
          hasTVPreferredFocus={route.name === Route.Movies}>
          Movies
        </Button>
      </View>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Shows}
          clearOnBlur
          onBlur={() => FocusService.instance?.clearFocusedTag()}
          onPress={() => navigate(Route.Shows)}
          ref={setRefShows}
          nextFocusRight={findNode(refSettings)}
          hasTVPreferredFocus={route.name === Route.Shows}>
          Shows
        </Button>
      </View>
      <View style={styles.spacer} />
      <View style={styles.item}>
        <Button
          active={route.name === Route.Settings}
          clearOnBlur
          onBlur={() => FocusService.instance?.clearFocusedTag()}
          onPress={() => navigate(Route.Settings)}
          ref={setRefSettings}
          nextFocusRight={nextFocusRightSettings}
          nextFocusLeft={findNode(refShows)}
          hasTVPreferredFocus={route.name === Route.Settings}>
          Settings
        </Button>
      </View>
    </TVFocusGuideView>
  );
};

export default memo(TVHeaderNavigation);
