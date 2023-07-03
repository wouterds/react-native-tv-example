import { RouteProp, useRoute } from '@react-navigation/native';
import Card from 'components/Card';
import ScreenWrapper from 'components/ScreenWrapper';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { useMovie } from 'store/movies/hooks';
import { useShow } from 'store/shows/hooks';
import { Movie } from 'store/types/movie';
import { Show } from 'store/types/show';

const TrendingTodayScreen = () => {
  const { params } = useRoute<RouteProp<RouteParams, Route.TrendingToday>>();
  const show = useShow(params.type === 'show' ? params.id : null);
  const movie = useMovie(params.type === 'movie' ? params.id : null);

  const item = (movie as Movie) || (show as Show);
  if (!item) {
    return <Card.Portrait.Shimmer />;
  }

  return <ScreenWrapper>{item && <Card.Hero item={item} />}</ScreenWrapper>;
};

export default memo(TrendingTodayScreen);
