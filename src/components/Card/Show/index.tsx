import FastImageBackground from 'components/FastImageBackground';
import { useTouchable } from 'components/Touchable/useTouchable';
import React, { memo, useMemo } from 'react';
import { Text, View } from 'react-native';
import { Show } from 'store/types/show';

import createStyles from './styles';

interface Props {
  item: Show;
}

const ShowCard = ({ item }: Props) => {
  const { hasFocus } = useTouchable();
  const styles = useMemo(() => createStyles({ hasFocus }), [hasFocus]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.focusArea}>
          <FastImageBackground
            source={{
              uri: item.poster_url,
            }}
            style={styles.coverImage}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>
            {item.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(ShowCard);
