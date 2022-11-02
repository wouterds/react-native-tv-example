import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Route } from 'components/App/Navigation';
import Card from 'components/Card';
import Touchable from 'components/Touchable';
import { useTVFocus } from 'hooks/useTVFocus';
import React, { memo } from 'react';
import FocusService from 'services/focus';
import { Movie } from 'store/types/movie';

import styles from './styles';

interface Props {
  item: Movie | null;
  first: boolean;
  last: boolean;
}

const PopularMoviesItem = ({ item, first, last }: Props) => {
  const { navigate } = useNavigation<NavigationProp<any>>();
  const { setRef, hasTVPreferredFocus, nextFocusLeft, nextFocusRight } =
    useTVFocus({
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
      ref={setRef}
      nextFocusLeft={nextFocusLeft}
      nextFocusRight={nextFocusRight}
      hasTVPreferredFocus={
        hasTVPreferredFocus ||
        // if no known last focused tag, focus the first item of the first swimlane
        // debatable if logic should be here or in the parent component (Swimlane)
        // it's a bit hidden which could introduce unexpected bugs if re-used elsewhere
        (!FocusService.instance?.focusedTag && first)
      }>
      <Card.Portrait item={item} />
    </Touchable>
  );
};

export default memo(PopularMoviesItem);
