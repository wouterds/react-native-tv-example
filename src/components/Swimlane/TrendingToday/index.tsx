import React, { memo } from 'react';
import { FlatList, Text, TVFocusGuideView, View } from 'react-native';
import { useTrendingToday } from 'store/trending-today/hooks';

import Item from './Item';
import styles from './styles';

interface Props {
  hideTitle?: boolean;
  hasInitialFocus?: boolean;
}

const TrendingTodaySwimlane = ({ hideTitle, hasInitialFocus }: Props) => {
  const { trendingToday } = useTrendingToday();

  return (
    <View style={styles.container}>
      <TVFocusGuideView trapFocusLeft trapFocusRight>
        {!hideTitle && <Text style={styles.title}>Trending today</Text>}
        <FlatList
          contentContainerStyle={styles.flatList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={trendingToday}
          keyExtractor={({ id }) => `swimlane.trending-today.${id}`}
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

export default memo(TrendingTodaySwimlane);
