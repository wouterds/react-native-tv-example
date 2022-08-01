import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { size } from 'utils/styles';

interface Props {
  fps: number;
  average: number;
}

const createStyles = ({ fps, average }: Props) => {
  const container: ViewStyle = {
    position: 'absolute',
    top: 0,
    right: size(14),
    zIndex: 999999999,
  };

  const text: TextStyle = {
    fontSize: size(12),
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
    color: '#fff',
  };

  const fpsStyle: TextStyle = {
    color: '#0f0',
  };

  const averageStyle: TextStyle = {
    color: '#0f0',
  };

  if (Platform.isTV) {
    container.top = size(12);
    text.fontSize = size(10);
  }

  if (fps < 45) {
    fpsStyle.color = '#ff0';
  }

  if (fps < 25) {
    fpsStyle.color = '#f00';
  }

  if (average < 45) {
    averageStyle.color = '#ff0';
  }

  if (average < 25) {
    averageStyle.color = '#f00';
  }

  return StyleSheet.create({
    container,
    content: {
      flexDirection: 'row',
    },
    text,
    fps: fpsStyle,
    average: averageStyle,
  });
};

export default createStyles;
