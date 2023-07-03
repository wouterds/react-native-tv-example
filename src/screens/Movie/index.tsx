import { RouteProp, useRoute } from '@react-navigation/native';
import Card from 'components/Card';
import ScreenWrapper from 'components/ScreenWrapper';
import Warning from 'components/Warning';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { useMovie } from 'store/movies/hooks';
import { size } from 'styles';

const MovieScreen = () => {
  const { params } = useRoute<RouteProp<RouteParams, Route.Movie>>();
  const movie = useMovie(params.id);

  if (!movie) {
    return (
      <ScreenWrapper style={{ padding: size(35) }}>
        <Warning>Didn't find the movie you were looking for.</Warning>
      </ScreenWrapper>
    );
  }

  return <ScreenWrapper>{movie && <Card.Hero item={movie} />}</ScreenWrapper>;
};

export default memo(MovieScreen);
