import { NavigationProp, useNavigation } from '@react-navigation/native';
import Shimmer from 'components/Shimmer';
import { format } from 'date-fns';
import { withTVSpecific } from 'hocs';
import ms from 'ms';
import { Route, RouteParams } from 'navigation';
import React, { memo } from 'react';
import { Easing, Text, TVFocusGuideView, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import FastImage from 'react-native-fast-image';
import { useMovie } from 'store/movies/hooks';
import { useUpcomingMovies } from 'store/upcoming-movies/hooks';
import { size } from 'styles';

import MoreInfo from './MoreInfo';
import styles from './styles';
import { useRandomUpcomingMovieId } from './useRandomUpcomingMovieId';

const REFRESH_INTERVAL = ms('20 seconds');

const UpcomingMovies = () => {
  const { navigate } = useNavigation<NavigationProp<RouteParams>>();
  const { isLoading, isEmpty, hasError } = useUpcomingMovies();
  const { movieId, nextMovieId } = useRandomUpcomingMovieId(REFRESH_INTERVAL);
  const movie = useMovie(movieId);

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
          {isLoading && !movie ? (
            <Shimmer style={styles.image} />
          ) : (
            <FastImage
              source={{ uri: movie?.backdrop_url }}
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
            fill={nextMovieId !== movieId ? 100 : 0}
            duration={nextMovieId !== movieId ? 0 : REFRESH_INTERVAL}
            easing={Easing.linear}
          />
        </View>
      </View>
      <View style={styles.col}>
        <View style={styles.box}>
          <View style={styles.content}>
            {isLoading && !movie ? (
              <View>
                <Shimmer style={styles.subTitleShimmer} />
              </View>
            ) : (
              <Text style={styles.subTitle}>
                Coming to theaters on{' '}
                {format(movie?.release_date || new Date(), 'MMMM do')}
              </Text>
            )}

            {isLoading && !movie ? (
              <View style={styles.title}>
                <Shimmer style={styles.titleShimmer} />
              </View>
            ) : (
              <Text style={styles.title} numberOfLines={1}>
                {movie?.title}
              </Text>
            )}

            {isLoading && !movie ? (
              <View>
                <Shimmer style={styles.textShimmer} />
                <Shimmer style={styles.textShimmer} />
                <Shimmer style={styles.textShimmer} />
              </View>
            ) : (
              <Text style={styles.text} numberOfLines={4}>
                {movie?.overview}
              </Text>
            )}
            <View style={styles.more}>
              <MoreInfo
                onPress={() => {
                  if (movie) {
                    navigate(Route.Movie, { id: movie.id, title: movie.title });
                  }
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </TVFocusGuideView>
  );
};

export default memo(withTVSpecific(UpcomingMovies));
