import ScreenWrapper from 'components/ScreenWrapper';
import React, { memo } from 'react';
import { usePopularMovie } from 'store/popular-movies/hooks';

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

  console.log(movie);

  return <ScreenWrapper>{null}</ScreenWrapper>;
};

export default memo(MovieScreen);
