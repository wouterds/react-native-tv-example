import { PixelRatio, Platform } from 'react-native';

export const dynamicPixels = (size: number) => {
  if (!Platform.isTV) {
    return size;
  }

  if (Platform.OS === 'android') {
    return size / PixelRatio.get();
  }

  return (size * 2.25) / PixelRatio.get();
};

export const epgDurationToWidth = (duration: number) => {
  return dynamicPixels(duration * 5);
};
