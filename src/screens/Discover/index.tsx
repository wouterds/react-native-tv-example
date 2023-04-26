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
    <ScreenWrapper header contentStyle={styles.container}>
      <Swimlane.TrendingToday />
      <Swimlane.PopularTVShows />
      <Swimlane.PopularMovies />
    </ScreenWrapper>
  );
};

export default memo(DiscoverScreen);
