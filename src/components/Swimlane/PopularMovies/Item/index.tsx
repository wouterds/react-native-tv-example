import {
  NavigationProp,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import { Route } from 'components/App/Navigation';
import Card from 'components/Card';
import Touchable from 'components/Touchable';
import React, { memo, useRef } from 'react';
import { findNodeHandle, TouchableOpacity } from 'react-native';
import FocusService from 'services/focus';
import { Movie } from 'store/types/movie';

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
        FocusService.instance?.focusedTag
          ? FocusService.instance?.focusedTag === findNodeHandle(ref.current)
          : index === 0
      }>
      <Card.Portrait item={item} />
    </Touchable>
  );
};

export default memo(PopularMoviesItem);
