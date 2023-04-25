import ScreenWrapper from 'components/ScreenWrapper';
import Swimlane from 'components/Swimlane';
import React, { memo } from 'react';

const DiscoverScreen = () => {
  return (
    <ScreenWrapper header>
      <Swimlane.TrendingToday hasInitialFocus />
      <Swimlane.PopularTVShows />
      <Swimlane.PopularMovies />
    </ScreenWrapper>
  );
};

export default memo(DiscoverScreen);
