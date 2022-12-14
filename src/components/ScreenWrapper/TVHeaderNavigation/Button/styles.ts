import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { size } from 'utils/styles';

interface Props {
  hasFocus: boolean;
  active: boolean;
}

const createStyles = ({ active, hasFocus }: Props) => {
  const container: ViewStyle = {
    paddingVertical: size(6),
    paddingHorizontal: size(18),
    borderColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: size(2),
    borderRadius: size(25),
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  };

  const text: TextStyle = {
    fontSize: size(16),
    fontWeight: '500',
    color: '#FFF',
  };

  if (Platform.OS === 'ios') {
    container.borderColor = 'transparent';
  }

  if (active) {
    text.color = '#38eabe';
  }

  if (hasFocus) {
    container.borderColor = '#38eabe';
  }

  return StyleSheet.create({
    container,
    text,
  });
};

export default createStyles;
