import React, { memo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { usePopularMovies } from 'store/popular-movies/hooks';

import Item from './Item';
import styles from './styles';

const PopularMoviesSwimlane = () => {
  const { popularMovies } = usePopularMovies();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies</Text>
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
          />
        )}
      />
    </View>
  );
};

export default memo(PopularMoviesSwimlane);
