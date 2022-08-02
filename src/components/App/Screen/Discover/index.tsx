import ScreenWrapper from 'components/ScreenWrapper';
import Swimlane from 'components/Swimlane';
import Title from 'components/Title';
import React, { memo } from 'react';
import { Platform } from 'react-native';
import { horizontalSpacing } from 'utils/styles';

import styles from './styles';

const DiscoverScreen = () => {
  console.log('Render discover screen');

  return (
    <ScreenWrapper>
      {Platform.isTV && (
        <Title style={[horizontalSpacing, styles.title]}>Discover</Title>
      )}
      <Swimlane.PopularMovies />
      <Swimlane.PopularTVShows />
    </ScreenWrapper>
  );
};

export default memo(DiscoverScreen);
