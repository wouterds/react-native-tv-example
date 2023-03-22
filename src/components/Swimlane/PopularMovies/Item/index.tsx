import { NavigationProp, useNavigation } from '@react-navigation/native';
import Card from 'components/Card';
import Touchable from 'components/Touchable';
import { useTVFocus } from 'hooks/useTVFocus';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { Movie } from 'store/types/movie';

import styles from './styles';

interface Props {
  item: Movie | null;
  first: boolean;
  last: boolean;
}

const PopularMoviesItem = ({ item, first, last }: Props) => {
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();
  const { ref, nextFocusLeft, nextFocusRight } = useTVFocus({
    first,
    last,
  });

  if (!item) {
    return null;
  }

  return (
    <Touchable
      style={styles.container}
      onPress={() => navigate(Route.Movie, { id: item.id, title: item.title })}
      ref={ref}
      nextFocusLeft={nextFocusLeft}
      nextFocusRight={nextFocusRight}>
      <Card.Portrait item={item} />
    </Touchable>
  );
};

export default memo(PopularMoviesItem);
