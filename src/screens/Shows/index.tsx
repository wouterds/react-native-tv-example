import ScreenWrapper from 'components/ScreenWrapper';
import Swimlane from 'components/Swimlane';
import React, { memo } from 'react';

const ShowsScreen = () => {
  return (
    <ScreenWrapper header>
      <Swimlane.PopularTVShows initialFocus />
    </ScreenWrapper>
  );
};

export default memo(ShowsScreen);
