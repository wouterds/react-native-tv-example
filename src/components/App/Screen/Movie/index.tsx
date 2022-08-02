import Card from 'components/Card';
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
  console.log('Render movie screen');

  const { movie } = usePopularMovie(props.route.params.id);

  return <ScreenWrapper>{movie && <Card.Hero item={movie} />}</ScreenWrapper>;
};

export default memo(MovieScreen);
