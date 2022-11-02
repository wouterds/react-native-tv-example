import { PixelRatio, Platform, ViewStyle } from 'react-native';

export const size = (value: number) => {
  if (Platform.isTV) {
    if (Platform.OS === 'android') {
      return (value * 2) / PixelRatio.get();
    }

    return value * 2;
  }

  return value;
};

export const horizontalSpacing: ViewStyle = {
  paddingHorizontal: size(25),
};
