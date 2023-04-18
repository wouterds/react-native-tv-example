import React, { memo } from 'react';
import { FlatList, Text, TVFocusGuideView } from 'react-native';
import { usePopularMovies } from 'store/popular-movies/hooks';

import Item from './Item';
import styles from './styles';

interface Props {
  hideTitle?: boolean;
}

const PopularMoviesSwimlane = ({ hideTitle }: Props) => {
  const { popularMovies } = usePopularMovies();

  return (
    <TVFocusGuideView trapFocusLeft trapFocusRight style={styles.container}>
      {!hideTitle && <Text style={styles.title}>Movies</Text>}
      <FlatList
        contentContainerStyle={styles.flatList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={popularMovies}
        keyExtractor={({ id }) => `swimlane.popular-movies.${id}`}
        renderItem={({ item }) => <Item item={item} />}
      />
    </TVFocusGuideView>
  );
};

export default memo(PopularMoviesSwimlane);
