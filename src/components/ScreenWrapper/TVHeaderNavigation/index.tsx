import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { Route, RouteParams } from 'components/App/Navigation';
import React, { memo, RefObject, useEffect, useRef, useState } from 'react';
import {
  findNodeHandle,
  Platform,
  TouchableOpacity,
  TVFocusGuideView,
  View,
} from 'react-native';
import FocusService from 'services/focus';

import Button from './Button';
import styles from './styles';

const TVHeaderNavigation = () => {
  const route = useRoute();
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();
  const [refHack, setRefHack] = useState(false);

  // make sure refs can be used in the component
  // the initial render they will be set but their values will be not
  // yet be available for use in the render function
  useEffect(() => {
    setRefHack(true);
  }, [refHack]);

  const refDiscover = useRef();
  const refMovies = useRef();
  const refShows = useRef();
  const refSettings = useRef();

  // map of refs by route name
  const refs: Record<string, RefObject<unknown>> = {
    [Route.Discover]: refDiscover,
    [Route.Movies]: refMovies,
    [Route.Shows]: refShows,
    [Route.Settings]: refSettings,
  };

  // button ref of current active screen
  const activeRef = refs[route.name] as RefObject<TouchableOpacity>;

  // target destinations for TVFocusGuideView
  const destinations = activeRef.current
    ? [findNodeHandle(activeRef.current) as number]
    : [];

  if (!Platform.isTV) {
    return null;
  }

  return (
    <TVFocusGuideView style={styles.container} destinations={destinations}>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Discover}
          clearOnBlur
          onBlur={() => FocusService.instance?.clearFocusedTag()}
          onPress={() => navigate(Route.Discover)}
          ref={refDiscover}
          nextFocusLeft={
            refDiscover?.current && findNodeHandle(refDiscover?.current)
          }
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
          ref={refMovies}>
          Movies
        </Button>
      </View>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Shows}
          clearOnBlur
          onBlur={() => FocusService.instance?.clearFocusedTag()}
          onPress={() => navigate(Route.Shows)}
          hasTVPreferredFocus={route.name === Route.Shows}
          ref={refShows}
          nextFocusRight={
            refSettings?.current && findNodeHandle(refSettings?.current)
          }>
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
          ref={refSettings}
          nextFocusLeft={refShows?.current && findNodeHandle(refShows?.current)}
          nextFocusRight={
            refSettings?.current && findNodeHandle(refSettings?.current)
          }>
          Settings
        </Button>
      </View>
    </TVFocusGuideView>
  );
};

export default memo(TVHeaderNavigation);