import ScreenWrapper from 'components/ScreenWrapper';
import Swimlane from 'components/Swimlane';
import UpcomingMovies from 'components/UpcomingMovies';
import { useComputedStyles } from 'hooks';
import React, { memo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import createStyles from './styles';

const DiscoverScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const styles = useComputedStyles(createStyles, { bottom });

  return (
    <ScreenWrapper header contentStyle={styles.container}>
      <Swimlane.TrendingToday />
      <UpcomingMovies />
      <Swimlane.PopularMovies />
      <Swimlane.PopularTVShows />
    </ScreenWrapper>
  );
};

export default memo(DiscoverScreen);
