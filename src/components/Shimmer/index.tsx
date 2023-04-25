import React from 'react';
import { ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

interface Props {
  style?: ViewStyle | ViewStyle[];
}

const Shimmer = (props: Props) => (
  <ShimmerPlaceholder
    isInteraction={false}
    LinearGradient={LinearGradient}
    shimmerColors={[
      'rgba(255, 255, 255, 0.03)',
      'rgba(255, 255, 255, 0.06)',
      'rgba(255, 255, 255, 0.03)',
    ]}
    style={props.style}
  />
);

export default Shimmer;
