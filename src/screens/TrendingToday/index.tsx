import { RouteProp, useRoute } from '@react-navigation/native';
import Card from 'components/Card';
import ScreenWrapper from 'components/ScreenWrapper';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { useTrendingTodayItem } from 'store/trending-today/hooks';

const TrendingTodayScreen = () => {
  const { params } = useRoute<RouteProp<RouteParams, Route.TrendingToday>>();

  const { item } = useTrendingTodayItem(params.id);
  if (!item) {
    // render empty state?
    return null;
  }

  return <ScreenWrapper>{item && <Card.Hero item={item} />}</ScreenWrapper>;
};

export default memo(TrendingTodayScreen);
