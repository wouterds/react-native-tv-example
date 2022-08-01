import { PixelRatio, Platform, ViewStyle } from 'react-native';

export const size = (value: number) => {
  if (Platform.isTV) {
    return (value * 2.3) / PixelRatio.get();
  }

  return value;
};

export const horizontalSpacing: ViewStyle = {
  paddingHorizontal: size(25),
};
