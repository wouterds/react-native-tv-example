import React, { memo } from 'react';
import { FlatList, Text, TVFocusGuideView } from 'react-native';
import { usePopularTVShows } from 'store/popular-tv-shows/hooks';

import Item from './Item';
import styles from './styles';

interface Props {
  hideTitle?: boolean;
  initialFocus?: boolean;
}

const PopularTVShowsSwimlane = ({ hideTitle, initialFocus }: Props) => {
  const { popularTVShows } = usePopularTVShows();

  return (
    <TVFocusGuideView trapFocusLeft trapFocusRight style={styles.container}>
      {!hideTitle && <Text style={styles.title}>Shows</Text>}
      <FlatList
        contentContainerStyle={styles.flatList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={popularTVShows}
        keyExtractor={({ id }) => `swimlane.popular-tv-shows.${id}`}
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

export default memo(PopularTVShowsSwimlane);
