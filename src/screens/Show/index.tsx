import { RouteProp, useRoute } from '@react-navigation/native';
import Card from 'components/Card';
import ScreenWrapper from 'components/ScreenWrapper';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { usePopularTVShow } from 'store/popular-tv-shows/hooks';

const ShowScreen = () => {
  const { params } = useRoute<RouteProp<RouteParams, Route.Show>>();

  const { show } = usePopularTVShow(params.id);
  if (!show) {
    return null;
  }

  return (
    <ScreenWrapper>
      <Card.Hero item={show} />
    </ScreenWrapper>
  );
};

export default memo(ShowScreen);
