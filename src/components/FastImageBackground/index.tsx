import React, { memo, ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import FastImage, { ResizeMode, Source } from 'react-native-fast-image';

import styles from './styles';

export interface Props {
  source: Source | number | null;
  resizeMode?: ResizeMode;
  style?: ViewStyle;
  children?: ReactNode;
}

const FastImageBackground = ({ source, style, children }: Props) => {
  return (
    <View style={[styles.container, style]}>
      {!!source && <FastImage source={source} style={styles.image} />}
      {children || null}
    </View>
  );
};

export default memo(FastImageBackground);
