import React, { memo } from 'react';
import { FlatList, Text, TVFocusGuideView, View } from 'react-native';
import { usePopularMovies } from 'store/popular-movies/hooks';

import ListHeaderLoaderComponent from '../ListHeaderLoaderComponent';
import Item from './Item';
import styles from './styles';

interface Props {
  hideTitle?: boolean;
  hasInitialFocus?: boolean;
}

const PopularMoviesSwimlane = ({ hideTitle, hasInitialFocus }: Props) => {
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
          data={data}
          keyExtractor={({ id }) => `swimlane.popular-movies.${id}`}
          renderItem={({ item, index }) => (
            <Item
              item={item}
              hasTVPreferredFocus={hasInitialFocus && index === 0}
            />
          )}
          ListHeaderComponent={
            isLoading && data.length === 0 ? ListHeaderLoaderComponent : null
          }
        />
      </TVFocusGuideView>
    </View>
  );
};

export default memo(PopularMoviesSwimlane);
