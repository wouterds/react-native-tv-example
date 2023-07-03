import { RouteProp, useRoute } from '@react-navigation/native';
import Card from 'components/Card';
import ScreenWrapper from 'components/ScreenWrapper';
import Warning from 'components/Warning';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { useShow } from 'store/shows/hooks';
import { size } from 'styles';

const ShowScreen = () => {
  const { params } = useRoute<RouteProp<RouteParams, Route.Show>>();

  const show = useShow(params.id);
  if (!show) {
    return (
      <ScreenWrapper style={{ padding: size(35) }}>
        <Warning>Didn't find the show you were looking for.</Warning>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      <Card.Hero item={show} />
    </ScreenWrapper>
  );
};

export default memo(ShowScreen);
