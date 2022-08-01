import Card from 'components/Card';
import Touchable from 'components/Touchable';
import React, { memo } from 'react';
import { Movie } from 'store/types/movie';

import styles from './styles';

interface Props {
  item: Movie | null;
}

const PopularMoviesItem = (props: Props) => {
  const { item } = props;

  if (!item) {
    return null;
  }

  return (
    <Touchable style={styles.container}>
      <Card.Movie item={item} />
    </Touchable>
  );
};

export default memo(PopularMoviesItem);
