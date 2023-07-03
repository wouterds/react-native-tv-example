import { NavigationProp, useNavigation } from '@react-navigation/native';
import Card from 'components/Card';
import Touchable from 'components/Touchable';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { useShow } from 'store/shows/hooks';
import { ShowId } from 'store/types/show';

import styles from './styles';

interface Props {
  id: ShowId | null;
}

const PopularTVShowsItem = ({ id }: Props) => {
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();

  const show = useShow(id);
  if (!show) {
    return <Card.Portrait.Shimmer />;
  }

  return (
    <Touchable
      style={styles.container}
      onPress={() => navigate(Route.Show, { id: show.id, title: show.name })}>
      <Card.Portrait item={show} />
    </Touchable>
  );
};

export default memo(PopularTVShowsItem);
