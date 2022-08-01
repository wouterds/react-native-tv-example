import FastImageBackground from 'components/FastImageBackground';
import ScreenWrapper from 'components/ScreenWrapper';
import React, { memo } from 'react';
import { usePopularMovie } from 'store/popular-movies/hooks';

import styles from './styles';

interface Props {
  route: {
    params: {
      id: number;
    };
  };
}

const MovieScreen = (props: Props) => {
  console.log(props);
  const { movie } = usePopularMovie(props.route.params.id);

  return (
    <ScreenWrapper>
      <FastImageBackground
        style={styles.container}
        source={{ uri: movie?.backdrop_url }}
      />
    </ScreenWrapper>
  );
};

export default memo(MovieScreen);
