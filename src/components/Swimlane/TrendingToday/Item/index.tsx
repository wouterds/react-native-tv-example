import { NavigationProp, useNavigation } from '@react-navigation/native';
import Card from 'components/Card';
import Touchable from 'components/Touchable';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { Movie } from 'store/types/movie';
import { Show } from 'store/types/show';

import styles from './styles';

interface Props {
  item: Movie | Show | null;
  hasTVPreferredFocus?: boolean;
}

const TrendingTodayItem = ({ item, hasTVPreferredFocus }: Props) => {
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();

  if (!item) {
    return null;
  }

  return (
    <Touchable
      style={styles.container}
      hasTVPreferredFocus={hasTVPreferredFocus}
      onPress={() =>
        navigate(Route.TrendingToday, {
          id: item.id,
          title: (item as Movie).title || (item as Show).name,
        })
      }>
      <Card.Portrait item={item} />
    </Touchable>
  );
};

export default memo(TrendingTodayItem);
