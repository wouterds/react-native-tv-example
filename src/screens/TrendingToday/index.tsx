import { RouteProp, useRoute } from '@react-navigation/native';
import Card from 'components/Card';
import ScreenWrapper from 'components/ScreenWrapper';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { useTrendingTodayEntry } from 'store/trending-today/hooks';

const TrendingTodayScreen = () => {
  const { params } = useRoute<RouteProp<RouteParams, Route.TrendingToday>>();
  const { trendingToday } = useTrendingTodayEntry(params.id);

  if (!trendingToday) {
    return null;
  }

  return (
    <ScreenWrapper>
      {trendingToday && <Card.Hero item={trendingToday} />}
    </ScreenWrapper>
  );
};

export default memo(TrendingTodayScreen);
