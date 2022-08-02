import Card from 'components/Card';
import ScreenWrapper from 'components/ScreenWrapper';
import React, { memo } from 'react';
import { usePopularTVShow } from 'store/popular-tv-shows/hooks';

interface Props {
  route: {
    params: {
      id: number;
    };
  };
}

const ShowScreen = (props: Props) => {
  console.log('Render show screen');

  const { show } = usePopularTVShow(props.route.params.id);

  return <ScreenWrapper>{show && <Card.Hero item={show} />}</ScreenWrapper>;
};

export default memo(ShowScreen);
