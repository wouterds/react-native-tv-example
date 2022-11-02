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
import { Show } from 'store/types/show';
import { findNode } from 'utils/node';

import styles from './styles';

interface Props {
  item: Show | null;
  first: boolean;
  last: boolean;
}

const PopularTVShowsItem = ({ item, first, last }: Props) => {
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
      // focus item itself if it's the first item (to prevent jumping to other UI elements)
      nextFocusLeft={findNode(ref, first)}
      // focus item itself if it's the last item (to prevent jumping to other UI elements)
      nextFocusRight={findNode(ref, last)}
      // should item get initial focus
      hasTVPreferredFocus={
        // if last focused tag equals the current node
        FocusService.instance?.focusedTag ===
        findNode(ref, !!FocusService.instance?.focusedTag)
      }>
      <Card.Portrait item={item} />
    </Touchable>
  );
};

export default memo(PopularTVShowsItem);
