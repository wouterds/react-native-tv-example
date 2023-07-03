import { NavigationProp, useNavigation } from '@react-navigation/native';
import Shimmer from 'components/Shimmer';
import { format } from 'date-fns';
import { withTVSpecific } from 'hocs';
import { Route, RouteParams } from 'navigation';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Easing, Text, TVFocusGuideView, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import FastImage from 'react-native-fast-image';
import { useUpcomingMovies } from 'store/upcoming-movies/hooks';
import { size } from 'styles';

import MoreInfo from './MoreInfo';
import styles from './styles';

const INTERVAL = 20;

const UpcomingMovies = () => {
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();
  const { data, isEmpty, hasError, isLoading } = useUpcomingMovies({
    fetch: true,
  });

  const [index, setIndex] = useState(-1);
  const [nextIndex, setNextIndex] = useState(index);
  const item = useMemo(() => data[index], [data, index]);

  useEffect(() => {
    if (data.length && index === -1) {
      setNextIndex(Math.floor(Math.random() * data.length));
    }
  }, [data.length, index]);

  useEffect(() => {
    if (index !== -1) {
      const timeout = setTimeout(() => {
        setNextIndex((index + 1) % data.length);
      }, INTERVAL * 1000);

      return () => clearTimeout(timeout);
    }
  }, [index, data.length]);

  useEffect(() => {
    if (nextIndex > -1 && nextIndex !== index) {
      setIndex(nextIndex);
    }
  }, [nextIndex, index]);

  const onPress = useCallback(() => {
    navigate(Route.Movie, { id: item.id, title: item.title });
  }, [item, navigate]);

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
          <AnimatedCircularProgress
            style={styles.loader}
            size={size(12)}
            width={size(2)}
            fillLineCap="round"
            tintColor="rgba(255, 255, 255, 0.8)"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            rotation={0}
            fill={nextIndex !== index ? 100 : 0}
            duration={nextIndex !== index ? 0 : INTERVAL * 1000}
            easing={Easing.linear}
          />
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
              <Text style={styles.text} numberOfLines={4}>
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
