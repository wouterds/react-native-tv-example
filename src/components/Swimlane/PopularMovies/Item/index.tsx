import {
  NavigationProp,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import { Route } from 'components/App/Navigation';
import Card from 'components/Card';
import Touchable from 'components/Touchable';
import React, { memo, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import FocusService from 'services/focus';
import { Movie } from 'store/types/movie';
import { findNode } from 'utils/node';

import styles from './styles';

interface Props {
  item: Movie | null;
  index: number;
}

const PopularMoviesItem = ({ item, index }: Props) => {
  const { navigate } = useNavigation<NavigationProp<any>>();
  const ref = useRef<TouchableOpacity | null>(null);
  useIsFocused();

  if (!item) {
    return null;
  }

  return (
    <Touchable
      style={styles.container}
      onPress={() => navigate(Route.Movie, { id: item.id, title: item.title })}
      ref={ref}
      hasTVPreferredFocus={
        // if last focused tag equals the current node
        FocusService.instance?.focusedTag ===
          findNode(ref, !!FocusService.instance?.focusedTag) ||
        // or if nothing has been focused yet, focus first item
        (!FocusService.instance?.focusedTag && index === 0)
      }>
      <Card.Portrait item={item} />
    </Touchable>
  );
};

export default memo(PopularMoviesItem);
