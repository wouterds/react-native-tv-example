import React, { memo } from 'react';
import { FlatList, Text, TVFocusGuideView, View } from 'react-native';
import { useTopRatedMovies } from 'store/top-rated-movies/hooks';

import Item from './Item';
import styles from './styles';

interface Props {
  hideTitle?: boolean;
}

const TopRatedMoviesSwimlane = ({ hideTitle }: Props) => {
  const { data, isLoading, isEmpty, hasError } = useTopRatedMovies({
    fetch: true,
  });

  if (isEmpty) {
    // render empty state?
    return null;
  }

  if (hasError) {
    // render error state?
    return null;
  }

  return (
    <View style={styles.container}>
      <TVFocusGuideView trapFocusLeft trapFocusRight>
        {!hideTitle && <Text style={styles.title}>Top rated movies</Text>}
        <FlatList
          contentContainerStyle={styles.flatList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={isLoading && data.length === 0 ? new Array(6).fill(null) : data}
          keyExtractor={(item, index) =>
            `swimlane.top-rated-movies.${item || `index-${index}`}`
          }
          renderItem={({ item }) => <Item id={item} />}
        />
      </TVFocusGuideView>
    </View>
  );
};

export default memo(TopRatedMoviesSwimlane);
