import React, { memo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { usePopularTVShows } from 'store/popular-tv-shows/hooks';

import Item from './Item';
import styles from './styles';

interface Props {
  hideTitle?: boolean;
}

const PopularTVShowsSwimlane = ({ hideTitle }: Props) => {
  const { popularTVShows } = usePopularTVShows();

  return (
    <View style={styles.container}>
      {!hideTitle && <Text style={styles.title}>Shows</Text>}
      <FlatList
        contentContainerStyle={styles.flatList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={popularTVShows}
        keyExtractor={({ id }) => `swimlane.popular-tv-shows.${id}`}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
};

export default memo(PopularTVShowsSwimlane);
