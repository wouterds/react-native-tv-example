import React, { memo } from 'react';
import { FlatList, Text, TVFocusGuideView } from 'react-native';
import { usePopularMovies } from 'store/popular-movies/hooks';

import Item from './Item';
import styles from './styles';

interface Props {
  hideTitle?: boolean;
  initialFocus?: boolean;
}

const PopularMoviesSwimlane = ({ hideTitle, initialFocus }: Props) => {
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
        renderItem={({ item, index }) => (
          <Item
            // when initialFocus is true, we want to focus the first item in the list
            hasTVPreferredFocus={index === 0 && initialFocus}
            item={item}
          />
        )}
      />
    </TVFocusGuideView>
  );
};

export default memo(PopularMoviesSwimlane);
