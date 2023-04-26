import { NavigationProp, useNavigation } from '@react-navigation/native';
import Card from 'components/Card';
import Touchable from 'components/Touchable';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { Movie } from 'store/types/movie';

import styles from './styles';

interface Props {
  item: Movie | null;
}

const PopularMoviesItem = ({ item }: Props) => {
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();

  if (!item) {
    return <Card.Portrait.Shimmer />;
  }

  return (
    <Touchable
      style={styles.container}
      onPress={() => navigate(Route.Movie, { id: item.id, title: item.title })}>
      <Card.Portrait item={item} />
    </Touchable>
  );
};

export default memo(PopularMoviesItem);
