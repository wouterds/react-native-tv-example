import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { dynamicPixels, epgDurationToWidth } from 'utils/styles';

interface Props {
  duration: number;
  isFocused: boolean;
}

export default ({ duration, isFocused }: Props) => {
  const container: ViewStyle = {
    height: '100%',
    backgroundColor: '#fff',
    marginHorizontal: dynamicPixels(1),
    padding: dynamicPixels(8),
    width: epgDurationToWidth(duration),
  };

  const text: TextStyle = {
    color: '#000',
  };

  if (isFocused) {
    text.color = '#fff';
    container.backgroundColor = '#000';
  }

  return StyleSheet.create({
    container,
    text,
    title: {
      fontWeight: 'bold',
      fontSize: dynamicPixels(16),
    },
    time: {
      fontWeight: 'bold',
      fontSize: dynamicPixels(14),
      opacity: 0.4,
    },
  });
};
