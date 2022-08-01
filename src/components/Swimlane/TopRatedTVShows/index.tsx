import React, { memo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useTopRatedTVShows } from 'store/top-rated-tv-shows/hooks';
import { Show } from 'store/types/show';

import Item from './Item';
import styles from './styles';

const renderItem = ({ item }: { item: Show | null; index: number }) => {
  return <Item item={item} />;
};

const TopRatedTVShowsSwimlane = () => {
  const { topRatedTVShows } = useTopRatedTVShows();

  return (
    <View style={styles.container}>
      <Text style={[styles.horizontalSpacing, styles.title]}>
        Top Rated TV Shows
      </Text>
      <FlatList
        data={topRatedTVShows}
        renderItem={renderItem}
        contentContainerStyle={[styles.horizontalSpacing, styles.flatList]}
        horizontal={true}
        keyExtractor={({ id }) => `swimlane.top-rated-tv-shows.${id}`}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(TopRatedTVShowsSwimlane);
