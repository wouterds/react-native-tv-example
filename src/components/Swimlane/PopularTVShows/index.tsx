import React, { memo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { usePopularTVShows } from 'store/popular-tv-shows/hooks';
import { Show } from 'store/types/show';

import Item from './Item';
import styles from './styles';

const renderItem = ({ item }: { item: Show | null; index: number }) => {
  return <Item item={item} />;
};

const PopularTVShowsSwimlane = () => {
  const { popularTVShows } = usePopularTVShows();

  return (
    <View style={styles.container}>
      <Text style={[styles.horizontalSpacing, styles.title]}>
        Popular TV Shows
      </Text>
      <FlatList
        data={popularTVShows}
        renderItem={renderItem}
        contentContainerStyle={[styles.horizontalSpacing, styles.flatList]}
        horizontal={true}
        keyExtractor={({ id }) => `swimlane.popular-tv-shows.${id}`}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(PopularTVShowsSwimlane);
