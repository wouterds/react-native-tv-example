import FastImageBackground from 'components/FastImageBackground';
import { useTouchable } from 'components/Touchable/useTouchable';
import React, { memo, useMemo } from 'react';
import { Text, View } from 'react-native';
import { Movie } from 'store/types/movie';

import createStyles from './styles';

interface Props {
  item: Movie;
}

const MovieCard = ({ item }: Props) => {
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
            {item.title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(MovieCard);
