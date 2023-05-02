import { format } from 'date-fns';
import { withTVSpecific } from 'hocs';
import React, { memo, useCallback, useMemo } from 'react';
import { Alert, Text, TVFocusGuideView, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useUpcomingMovies } from 'store/upcoming-movies/hooks';

import MoreInfo from './MoreInfo';
import styles from './styles';

const UpcomingMovies = () => {
  const { data, isEmpty, hasError } = useUpcomingMovies({
    fetch: true,
  });

  const item = useMemo(() => {
    if (!data) {
      return null;
    }

    return data[Math.floor(Math.random() * data.length)];
  }, [data]);

  const onPress = useCallback(() => {
    Alert.alert("This doesn't do anything (yet)", '¯\\_(ツ)_/¯');
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
    <TVFocusGuideView style={styles.container} autoFocus>
      <View style={styles.col}>
        <View style={styles.box}>
          <FastImage
            source={{ uri: item?.backdrop_url }}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.col}>
        <View style={styles.box}>
          <View style={styles.content}>
            <Text style={styles.subTitle}>
              Coming to theaters on{' '}
              {format(item?.release_date || new Date(), 'MMMM Mo')}
            </Text>
            <Text style={styles.title} adjustsFontSizeToFit numberOfLines={1}>
              {item?.title}
            </Text>
            <Text style={styles.text} numberOfLines={4}>
              {item?.overview}
            </Text>
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
