import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Props {
  duration: number;
  isFocused: boolean;
}

export default ({ duration, isFocused }: Props) => {
  const container: ViewStyle = {
    height: '100%',
    backgroundColor: '#fff',
    marginHorizontal: 1,
    padding: 8,
    width: duration * 4,
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
      fontSize: 16,
    },
    time: {
      fontWeight: 'bold',
      fontSize: 14,
      opacity: 0.4,
    },
  });
};
