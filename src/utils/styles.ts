import { PixelRatio, Platform } from 'react-native';

export const dynamicPixels = (size: number) => {
  if (Platform.isTV) {
    return (size * 2.3) / PixelRatio.get();
  }

  return size;
};

export const epgDurationToWidth = (duration: number) => {
  return dynamicPixels(duration * 6);
};
