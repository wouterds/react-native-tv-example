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

  return (
    <Touchable
      style={styles.container}
      hasTVPreferredFocus={hasTVPreferredFocus}
      onPress={() => {
        if (!item) {
          return;
        }

        navigate(Route.TrendingToday, {
          id: item.id,
          title: (item as Movie).title || (item as Show).name,
        });
      }}>
      {item ? <Card.Portrait item={item} /> : <Card.Portrait.Shimmer />}
    </Touchable>
  );
};

export default memo(TrendingTodayItem);
