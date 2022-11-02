import React, { memo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { usePopularMovies } from 'store/popular-movies/hooks';
import { horizontalSpacing } from 'utils/styles';

import Item from './Item';
import styles from './styles';

const PopularMoviesSwimlane = () => {
  const { popularMovies } = usePopularMovies();

  return (
    <View style={styles.container}>
      <Text style={[horizontalSpacing, styles.title]}>Popular Movies</Text>
      <FlatList
        contentContainerStyle={[horizontalSpacing, styles.flatList]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={popularMovies}
        keyExtractor={({ id }) => `swimlane.popular-movies.${id}`}
        renderItem={({ item, index }) => <Item item={item} index={index} />}
      />
    </View>
  );
};

export default memo(PopularMoviesSwimlane);
