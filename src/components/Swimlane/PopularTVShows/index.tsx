import React, { memo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { usePopularTVShows } from 'store/popular-tv-shows/hooks';
import { Show } from 'store/types/show';
import { horizontalSpacing } from 'utils/styles';

import Item from './Item';
import styles from './styles';

const renderItem = ({ item, index }: { item: Show | null; index: number }) => {
  return <Item item={item} index={index} />;
};

const PopularTVShowsSwimlane = () => {
  const { popularTVShows } = usePopularTVShows();

  return (
    <View style={styles.container}>
      <Text style={[horizontalSpacing, styles.title]}>Popular TV Shows</Text>
      <FlatList
        data={popularTVShows}
        renderItem={renderItem}
        contentContainerStyle={[horizontalSpacing, styles.flatList]}
        horizontal={true}
        keyExtractor={({ id }) => `swimlane.popular-tv-shows.${id}`}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(PopularTVShowsSwimlane);
