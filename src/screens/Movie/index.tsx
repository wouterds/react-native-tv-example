import { RouteProp, useRoute } from '@react-navigation/native';
import Card from 'components/Card';
import ScreenWrapper from 'components/ScreenWrapper';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { usePopularMovie } from 'store/popular-movies/hooks';

const MovieScreen = () => {
  const { params } = useRoute<RouteProp<RouteParams, Route.Movie>>();

  const { movie } = usePopularMovie(params.id);
  if (!movie) {
    return null;
  }

  return <ScreenWrapper>{movie && <Card.Hero item={movie} />}</ScreenWrapper>;
};

export default memo(MovieScreen);
