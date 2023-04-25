import { NavigationProp, useNavigation } from '@react-navigation/native';
import Card from 'components/Card';
import Touchable from 'components/Touchable';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { Movie } from 'store/types/movie';

import styles from './styles';

interface Props {
  item: Movie | null;
  hasTVPreferredFocus?: boolean;
}

const PopularMoviesItem = ({ item, hasTVPreferredFocus }: Props) => {
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();

  return (
    <Touchable
      style={styles.container}
      hasTVPreferredFocus={hasTVPreferredFocus}
      onPress={() => {
        if (!item) {
          return;
        }

        navigate(Route.Movie, { id: item.id, title: item.title });
      }}>
      {item ? <Card.Portrait item={item} /> : <Card.Portrait.Shimmer />}
    </Touchable>
  );
};

export default memo(PopularMoviesItem);
