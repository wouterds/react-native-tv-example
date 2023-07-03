import Banner from 'components/Banner';
import ScreenWrapper from 'components/ScreenWrapper';
import Swimlane from 'components/Swimlane';
import { useComputedStyles } from 'hooks';
import React, { memo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import createStyles from './styles';

const DiscoverScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const styles = useComputedStyles(createStyles, { bottom });

  return (
    <ScreenWrapper contentStyle={styles.container}>
      <Swimlane.TrendingToday hasTVPreferredFocus />
      <Swimlane.PopularMovies />
      <Banner.UpcomingMovies />
      <Swimlane.TopRatedTVShows />
      <Swimlane.TopRatedMovies />
      {/* <Swimlane.PopularTVShows /> */}
    </ScreenWrapper>
  );
};

export default memo(DiscoverScreen);
