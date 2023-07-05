import React, { memo } from 'react';
import { FlatList, Text, TVFocusGuideView, View } from 'react-native';
import { usePopularMovies } from 'store/popular-movies/hooks';

import Item from './Item';
import styles from './styles';

interface Props {
  hideTitle?: boolean;
}

const PopularMoviesSwimlane = ({ hideTitle }: Props) => {
  const { data, isLoading, isEmpty, hasError } = usePopularMovies({
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
        {!hideTitle && <Text style={styles.title}>Popular movies</Text>}
        <FlatList
          contentContainerStyle={styles.flatList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={isLoading && data.length === 0 ? new Array(6).fill(null) : data}
          renderItem={({ item }) => <Item id={item?.id} />}
        />
      </TVFocusGuideView>
    </View>
  );
};

export default memo(PopularMoviesSwimlane);
