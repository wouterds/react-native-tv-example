import React, { memo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { usePopularTVShows } from 'store/popular-tv-shows/hooks';
import { horizontalSpacing } from 'utils/styles';

import Item from './Item';
import styles from './styles';

const PopularTVShowsSwimlane = () => {
  const { popularTVShows } = usePopularTVShows();

  return (
    <View style={styles.container}>
      <Text style={[horizontalSpacing, styles.title]}>Popular TV Shows</Text>
      <FlatList
        contentContainerStyle={[horizontalSpacing, styles.flatList]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={popularTVShows}
        keyExtractor={({ id }) => `swimlane.popular-tv-shows.${id}`}
        renderItem={({ item, index }) => <Item item={item} index={index} />}
      />
    </View>
  );
};

export default memo(PopularTVShowsSwimlane);
