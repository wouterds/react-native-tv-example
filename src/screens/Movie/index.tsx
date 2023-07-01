import { RouteProp, useRoute } from '@react-navigation/native';
import Card from 'components/Card';
import ScreenWrapper from 'components/ScreenWrapper';
import Warning from 'components/Warning';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { usePopularMovie } from 'store/popular-movies/hooks';
import { size } from 'utils/styles';

const MovieScreen = () => {
  const { params } = useRoute<RouteProp<RouteParams, Route.Movie>>();

  const { movie } = usePopularMovie(params.id);
  if (!movie) {
    return (
      <ScreenWrapper style={{ padding: size(35) }}>
        <Warning>
          Still to do: rework data-store and store movies and shows per object
          type instead of per api endpoint. Right now a detail page does a
          lookup in the popular movies reducer, which is obviously not entirely
          correct and why we can't find this item.
        </Warning>
      </ScreenWrapper>
    );
  }

  return <ScreenWrapper>{movie && <Card.Hero item={movie} />}</ScreenWrapper>;
};

export default memo(MovieScreen);
