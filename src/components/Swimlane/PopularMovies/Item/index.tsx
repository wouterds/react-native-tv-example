import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Route } from 'components/App/Navigation';
import Card from 'components/Card';
import Touchable from 'components/Touchable';
import React, { memo } from 'react';
import { Movie } from 'store/types/movie';

import styles from './styles';

interface Props {
  item: Movie | null;
}

const PopularMoviesItem = ({ item }: Props) => {
  const { navigate } = useNavigation<NavigationProp<any>>();

  if (!item) {
    return null;
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
