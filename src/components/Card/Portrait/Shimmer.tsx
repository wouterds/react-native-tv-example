import Shimmer from 'components/Shimmer';
import { useTouchable } from 'components/Touchable';
import { useComputedStyles } from 'hooks';
import React, { memo } from 'react';
import { View } from 'react-native';

import createStyles from './styles';

const PortraitCardShimmer = () => {
  const { hasFocus } = useTouchable();
  const styles = useComputedStyles(createStyles, { hasFocus });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={[styles.image, styles.imageShimmerContainer]}>
          <Shimmer style={styles.imageShimmer} />
        </View>
      </View>
      <View style={styles.info}>
        <View style={styles.titleShimmerContainer}>
          <Shimmer style={styles.titleShimmer} />
        </View>
      </View>
    </View>
  );
};

export default memo(PortraitCardShimmer);
