import Shimmer from 'components/Shimmer';
import { format } from 'date-fns';
import { withTVSpecific } from 'hocs';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Alert, Text, TVFocusGuideView, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useUpcomingMovies } from 'store/upcoming-movies/hooks';

import MoreInfo from './MoreInfo';
import styles from './styles';

const UpcomingMovies = () => {
  const { data, isEmpty, hasError, isLoading } = useUpcomingMovies({
    fetch: true,
  });

  const [index, setIndex] = useState(-1);
  const item = useMemo(() => data[index], [data, index]);

  useEffect(() => {
    if (index === -1 && !isLoading && !isEmpty && !hasError && data.length) {
      setIndex(Math.floor(Math.random() * data.length));
    }
  }, [data, index, isLoading, isEmpty, hasError]);

  useEffect(() => {
    if (index !== -1) {
      setTimeout(() => {
        setIndex((index + 1) % data.length);
      }, 20000);
    }
  }, [index, data.length]);

  const onPress = useCallback(() => {
    Alert.alert('TODO');
  }, []);

  if (isEmpty) {
    // render empty state?
    return null;
  }

  if (hasError) {
    // render error state?
    return null;
  }

  return (
    <TVFocusGuideView style={styles.container}>
      <View style={styles.col}>
        <View style={styles.box}>
          {isLoading && !item ? (
            <Shimmer style={styles.image} />
          ) : (
            <FastImage
              source={{ uri: item?.backdrop_url }}
              style={styles.image}
            />
          )}
        </View>
      </View>
      <View style={styles.col}>
        <View style={styles.box}>
          <View style={styles.content}>
            {isLoading && !item ? (
              <View>
                <Shimmer style={styles.subTitleShimmer} />
              </View>
            ) : (
              <Text style={styles.subTitle}>
                Coming to theaters on{' '}
                {format(item?.release_date || new Date(), 'MMMM do')}
              </Text>
            )}

            {isLoading && !item ? (
              <View style={styles.title}>
                <Shimmer style={styles.titleShimmer} />
              </View>
            ) : (
              <Text style={styles.title} numberOfLines={1}>
                {item?.title}
              </Text>
            )}

            {isLoading && !item ? (
              <View>
                <Shimmer style={styles.textShimmer} />
                <Shimmer style={styles.textShimmer} />
                <Shimmer style={styles.textShimmer} />
              </View>
            ) : (
              <Text style={styles.text} numberOfLines={3}>
                {item?.overview}
              </Text>
            )}
            <View style={styles.more}>
              <MoreInfo onPress={onPress} />
            </View>
          </View>
        </View>
      </View>
    </TVFocusGuideView>
  );
};

export default memo(withTVSpecific(UpcomingMovies));
