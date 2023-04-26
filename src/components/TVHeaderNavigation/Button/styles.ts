import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { size } from 'utils/styles';

interface Props {
  hasFocus: boolean;
  active: boolean;
}

const createStyles = ({ active, hasFocus }: Props) => {
  const button: ViewStyle = {
    paddingVertical: size(6),
    paddingBottom: Platform.OS === 'android' ? size(7) : size(6),
    paddingHorizontal: size(18),
    borderColor: 'transparent',
    borderWidth: size(2),
    borderRadius: size(25),
    backgroundColor: 'transparent',
  };

  const text: TextStyle = {
    fontSize: size(16),
    fontWeight: '600',
    color: '#FFF',
  };

  if (active) {
    button.backgroundColor = 'rgba(255, 255, 255, 0.05)';
  }

  if (hasFocus) {
    button.borderColor = '#fff';
  }

  return StyleSheet.create({
    container: {
      paddingTop: size(20),
    },
    button,
    text,
  });
};

export default createStyles;
