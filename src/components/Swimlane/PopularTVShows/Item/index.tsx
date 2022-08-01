import Card from 'components/Card';
import Touchable from 'components/Touchable';
import React, { memo } from 'react';
import { Show } from 'store/types/show';

import styles from './styles';

interface Props {
  item: Show | null;
}

const PopularTVShowsItem = (props: Props) => {
  const { item } = props;

  if (!item) {
    return null;
  }

  return (
    <Touchable style={styles.container}>
      <Card.Show item={item} />
    </Touchable>
  );
};

export default memo(PopularTVShowsItem);