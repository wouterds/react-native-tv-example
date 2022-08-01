import React, { memo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { usePopularMovies } from 'store/popular-movies/hooks';
import { Movie } from 'store/types/movie';
import { horizontalSpacing } from 'utils/styles';

import Item from './Item';
import styles from './styles';

const renderItem = ({ item }: { item: Movie | null; index: number }) => {
  return <Item item={item} />;
};

const PopularMoviesSwimlane = () => {
  const { popularMovies } = usePopularMovies();

  return (
    <View style={styles.container}>
      <Text style={[horizontalSpacing, styles.title]}>Popular Movies</Text>
      <FlatList
        data={popularMovies}
        renderItem={renderItem}
        contentContainerStyle={[horizontalSpacing, styles.flatList]}
        horizontal={true}
        keyExtractor={({ id }) => `swimlane.popular-movies.${id}`}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(PopularMoviesSwimlane);
