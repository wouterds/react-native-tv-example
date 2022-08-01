import { PixelRatio, Platform } from 'react-native';

export const size = (value: number) => {
  if (Platform.isTV) {
    return (value * 2.3) / PixelRatio.get();
  }

  return value;
};
