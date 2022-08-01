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
  const { show } = usePopularTVShow(props.route.params.id);

  return <ScreenWrapper>{null}</ScreenWrapper>;
};

export default memo(ShowScreen);
