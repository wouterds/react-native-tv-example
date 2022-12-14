import { NavigationProp, useNavigation } from '@react-navigation/native';
import Card from 'components/Card';
import Touchable from 'components/Touchable';
import { useTVFocus } from 'hooks/useTVFocus';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { Show } from 'store/types/show';

import styles from './styles';

interface Props {
  item: Show | null;
  first: boolean;
  last: boolean;
  hasInitialFocus?: boolean;
}

const PopularTVShowsItem = ({ item, first, last, hasInitialFocus }: Props) => {
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();
  const { ref, hasTVPreferredFocus, nextFocusLeft, nextFocusRight } =
    useTVFocus({
      hasInitialFocus,
      first,
      last,
    });

  if (!item) {
    return null;
  }

  return (
    <Touchable
      style={styles.container}
      onPress={() => navigate(Route.Show, { id: item.id, title: item.name })}
      ref={ref}
      nextFocusLeft={nextFocusLeft}
      nextFocusRight={nextFocusRight}
      hasTVPreferredFocus={hasTVPreferredFocus}>
      <Card.Portrait item={item} />
    </Touchable>
  );
};

export default memo(PopularTVShowsItem);
