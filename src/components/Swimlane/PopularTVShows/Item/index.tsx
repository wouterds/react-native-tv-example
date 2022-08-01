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
import { Show } from 'store/types/show';

import styles from './styles';

interface Props {
  item: Show | null;
  index: number;
}

const PopularTVShowsItem = ({ item }: Props) => {
  const { navigate } = useNavigation<NavigationProp<any>>();
  const ref = useRef<TouchableOpacity | null>(null);
  useIsFocused();

  if (!item) {
    return null;
  }

  return (
    <Touchable
      style={styles.container}
      onPress={() => navigate(Route.Show, { id: item.id, title: item.name })}
      ref={ref}
      hasTVPreferredFocus={
        (FocusService.instance?.focusedTag &&
          FocusService.instance?.focusedTag === findNodeHandle(ref.current)) ||
        false
      }>
      <Card.Portrait item={item} />
    </Touchable>
  );
};

export default memo(PopularTVShowsItem);
