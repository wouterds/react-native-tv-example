import React, { memo } from 'react';
import { FlatList, Text, TVFocusGuideView, View } from 'react-native';
import { useTopRatedTVShows } from 'store/top-rated-tv-shows/hooks';

import Item from './Item';
import styles from './styles';

interface Props {
  hideTitle?: boolean;
}

const TopRatedTVShowsSwimlane = ({ hideTitle }: Props) => {
  const { data, isLoading, isEmpty, hasError } = useTopRatedTVShows({
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
        {!hideTitle && <Text style={styles.title}>Top rated shows</Text>}
        <FlatList
          contentContainerStyle={styles.flatList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={isLoading && data.length === 0 ? new Array(6).fill(null) : data}
          keyExtractor={(item, index) =>
            `swimlane.top-rated-tv-shows.${item?.id || index}`
          }
          renderItem={({ item }) => <Item item={item} />}
        />
      </TVFocusGuideView>
    </View>
  );
};

export default memo(TopRatedTVShowsSwimlane);
