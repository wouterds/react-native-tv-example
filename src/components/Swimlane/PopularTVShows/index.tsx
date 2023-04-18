import React, { memo } from 'react';
import { FlatList, Text, TVFocusGuideView, View } from 'react-native';
import { usePopularTVShows } from 'store/popular-tv-shows/hooks';

import Item from './Item';
import styles from './styles';

interface Props {
  hideTitle?: boolean;
  hasInitialFocus?: boolean;
}

const PopularTVShowsSwimlane = ({ hideTitle, hasInitialFocus }: Props) => {
  const { popularTVShows } = usePopularTVShows();

  return (
    <View style={styles.container}>
      <TVFocusGuideView trapFocusLeft trapFocusRight>
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
              item={item}
              hasTVPreferredFocus={hasInitialFocus && index === 0}
            />
          )}
        />
      </TVFocusGuideView>
    </View>
  );
};

export default memo(PopularTVShowsSwimlane);
