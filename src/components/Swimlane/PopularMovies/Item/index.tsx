import { NavigationProp, useNavigation } from '@react-navigation/native';
import Card from 'components/Card';
import Touchable from 'components/Touchable';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { useMovie } from 'store/movies/hooks';
import { MovieId } from 'store/types/movie';

import styles from './styles';

interface Props {
  id: MovieId | null;
}

const PopularMoviesItem = ({ id }: Props) => {
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();

  const movie = useMovie(id);
  if (!movie) {
    return <Card.Portrait.Shimmer />;
  }

  return (
    <Touchable
      style={styles.container}
      onPress={() =>
        navigate(Route.Movie, { id: movie.id, title: movie.title })
      }>
      <Card.Portrait item={movie} />
    </Touchable>
  );
};

export default memo(PopularMoviesItem);
