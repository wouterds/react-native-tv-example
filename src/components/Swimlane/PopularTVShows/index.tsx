import React, { memo, useEffect, useState } from 'react';
import { FlatList, Text, TVFocusGuideView, View } from 'react-native';
import { usePopularTVShows } from 'store/popular-tv-shows/hooks';

import Item from './Item';
import styles from './styles';

interface Props {
  hideTitle?: boolean;
}

const PopularTVShowsSwimlane = ({ hideTitle }: Props) => {
  const { data, isLoading, isEmpty, hasError } = usePopularTVShows({
    fetch: true,
  });

  const [forceShimmers, setForceShimmers] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setForceShimmers(!forceShimmers);
    }, Math.random() * 5000 + 2000);

    return () => clearTimeout(timeout);
  }, [forceShimmers]);

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
        {!hideTitle && <Text style={styles.title}>Popular shows</Text>}
        <FlatList
          contentContainerStyle={styles.flatList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={
            forceShimmers || (isLoading && data.length === 0)
              ? new Array(6).fill(null)
              : data
          }
          keyExtractor={(item, index) =>
            `swimlane.popular-tv-shows.${item?.id || index}`
          }
          renderItem={({ item }) => <Item item={item} />}
        />
      </TVFocusGuideView>
    </View>
  );
};

export default memo(PopularTVShowsSwimlane);
