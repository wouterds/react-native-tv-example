import React, { memo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { usePopularOnTV } from 'store/popular-on-tv/hooks';
import { Show } from 'store/popular-on-tv/types';

import Item from './Item';
import styles from './styles';

const renderItem = ({ item }: { item: Show | null; index: number }) => {
  return <Item item={item} />;
};

const PopularOnTVSwimlane = () => {
  const { popularOnTV } = usePopularOnTV();

  return (
    <View style={styles.container}>
      <Text style={[styles.horizontalSpacing, styles.title]}>
        Popular on TV
      </Text>
      <FlatList
        data={popularOnTV}
        renderItem={renderItem}
        contentContainerStyle={styles.horizontalSpacing}
        horizontal={true}
        keyExtractor={({ id }) => `swimlane.popular-on-tv.${id}`}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(PopularOnTVSwimlane);
