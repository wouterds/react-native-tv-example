import { NavigationProp, useNavigation } from '@react-navigation/native';
import Card from 'components/Card';
import Touchable from 'components/Touchable';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { Show } from 'store/types/show';

import styles from './styles';

interface Props {
  item: Show | null;
}

const PopularTVShowsItem = ({ item }: Props) => {
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();

  if (!item) {
    return <Card.Portrait.Shimmer />;
  }

  return (
    <Touchable
      style={styles.container}
      onPress={() => navigate(Route.Show, { id: item.id, title: item.name })}>
      <Card.Portrait item={item} />
    </Touchable>
  );
};

export default memo(PopularTVShowsItem);
