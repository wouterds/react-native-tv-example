import React, { memo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { usePopularMovies } from 'store/popular-movies/hooks';

import Item from './Item';
import styles from './styles';

interface Props {
  hideTitle?: boolean;
  hasInitialFocus?: boolean;
}

const PopularMoviesSwimlane = ({ hideTitle, hasInitialFocus }: Props) => {
  const { popularMovies } = usePopularMovies();

  return (
    <View style={styles.container}>
      {!hideTitle && <Text style={styles.title}>Movies</Text>}
      <FlatList
        contentContainerStyle={styles.flatList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={popularMovies}
        keyExtractor={({ id }) => `swimlane.popular-movies.${id}`}
        renderItem={({ item, index }) => (
          <Item
            item={item}
            first={index === 0}
            last={index === popularMovies.length - 1}
            hasInitialFocus={hasInitialFocus}
          />
        )}
      />
    </View>
  );
};

export default memo(PopularMoviesSwimlane);
