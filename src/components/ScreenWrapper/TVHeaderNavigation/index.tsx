import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { Route, RouteParams } from 'components/App/Navigation';
import { useTVFocus } from 'hooks/useTVFocus';
import React, { memo } from 'react';
import { Platform, TVFocusGuideView, View } from 'react-native';

import Button from './Button';
import styles from './styles';

const TVHeaderNavigation = () => {
  const route = useRoute();
  const { reset } = useNavigation<NavigationProp<RouteParams>>();

  const {
    setRef: setRefDiscover,
    hasTVPreferredFocus: hasTVPreferredFocusDiscover,
    nextFocusLeft: nextFocusLeftDiscover,
  } = useTVFocus({
    first: true,
  });
  const {
    setRef: setRefMovies,
    hasTVPreferredFocus: hasTVPreferredFocusMovies,
  } = useTVFocus();
  const { setRef: setRefShows, hasTVPreferredFocus: hasTVPreferredFocusShows } =
    useTVFocus();
  const {
    setRef: setRefSettings,
    hasTVPreferredFocus: hasTVPreferredFocusSettings,
    nextFocusRight: nextFocusRightSettings,
  } = useTVFocus({
    last: true,
  });

  if (!Platform.isTV) {
    return null;
  }

  return (
    <TVFocusGuideView style={styles.container}>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Discover}
          onPress={() => reset({ routes: [{ name: Route.Discover }] })}
          ref={setRefDiscover}
          hasTVPreferredFocus={hasTVPreferredFocusDiscover}
          nextFocusLeft={nextFocusLeftDiscover}>
          Discover
        </Button>
      </View>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Movies}
          onPress={() => reset({ routes: [{ name: Route.Movies }] })}
          ref={setRefMovies}
          hasTVPreferredFocus={hasTVPreferredFocusMovies}>
          Movies
        </Button>
      </View>
      <View style={styles.item}>
        <Button
          active={route.name === Route.Shows}
          onPress={() => reset({ routes: [{ name: Route.Shows }] })}
          ref={setRefShows}
          hasTVPreferredFocus={hasTVPreferredFocusShows}>
          Shows
        </Button>
      </View>
      <View style={styles.spacer} />
      <View style={styles.item}>
        <Button
          active={route.name === Route.Settings}
          onPress={() => reset({ routes: [{ name: Route.Settings }] })}
          ref={setRefSettings}
          hasTVPreferredFocus={hasTVPreferredFocusSettings}
          nextFocusRight={nextFocusRightSettings}>
          Settings
        </Button>
      </View>
    </TVFocusGuideView>
  );
};

export default memo(TVHeaderNavigation);
