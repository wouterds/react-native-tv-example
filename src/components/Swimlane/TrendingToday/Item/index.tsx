import { NavigationProp, useNavigation } from '@react-navigation/native';
import Card from 'components/Card';
import Touchable from 'components/Touchable';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { useMovie } from 'store/movies/hooks';
import { useShow } from 'store/shows/hooks';
import { Movie } from 'store/types/movie';
import { Show } from 'store/types/show';

import styles from './styles';

interface Props {
  type: 'movie' | 'show' | null;
  id: number | null;
  hasTVPreferredFocus?: boolean;
}

const TrendingTodayItem = ({ id, type, hasTVPreferredFocus }: Props) => {
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();
  const show = useShow(type === 'show' ? id : null);
  const movie = useMovie(type === 'movie' ? id : null);

  const item = (movie as Movie) || (show as Show);
  if (!item) {
    return <Card.Portrait.Shimmer />;
  }

  return (
    <Touchable
      style={styles.container}
      hasTVPreferredFocus={hasTVPreferredFocus}
      onPress={() =>
        navigate(Route.TrendingToday, {
          id: item.id,
          title: (movie?.title || show?.name) as string,
          type: type as string,
        })
      }>
      <Card.Portrait item={(movie as Movie) || (show as Show)} />
    </Touchable>
  );
};

export default memo(TrendingTodayItem);
