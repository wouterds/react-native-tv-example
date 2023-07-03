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
        <Warning>
          Still to do: rework data-store and store movies and shows per object
          type instead of per api endpoint. Right now a detail page does a
          lookup in the popular shows reducer, which is obviously not entirely
          correct and why we can't find this item.
        </Warning>
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
