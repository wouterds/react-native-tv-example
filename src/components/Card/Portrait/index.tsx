import FastImageBackground from 'components/FastImageBackground';
import { useTouchable } from 'components/Touchable';
import { useComputedStyles } from 'hooks';
import React, { memo, MemoExoticComponent } from 'react';
import { Text, View } from 'react-native';
import { MediaAsset } from 'store/types/media';
import { Movie } from 'store/types/movie';
import { Show } from 'store/types/show';

import PortraitCardShimmer from './Shimmer';
import Shimmer from './Shimmer';
import createStyles from './styles';

interface Props {
  item: MediaAsset;
}

const PortraitCard = memo(({ item }: Props) => {
  const { hasFocus } = useTouchable();
  const styles = useComputedStyles(createStyles, { hasFocus });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FastImageBackground
          source={{
            uri: item.poster_url,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {item.type === 'movie' ? (item as Movie).title : null}
          {item.type === 'show' ? (item as Show).name : null}
        </Text>
      </View>
    </View>
  );
}) as MemoExoticComponent<(props: Props) => JSX.Element> & {
  Shimmer: typeof PortraitCardShimmer;
};

PortraitCard.Shimmer = Shimmer;

export default PortraitCard;
