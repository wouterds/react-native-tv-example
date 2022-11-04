import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { size } from 'utils/styles';

interface Props {
  hasFocus: boolean;
  active: boolean;
}

const createStyles = ({ active, hasFocus }: Props) => {
  const container: ViewStyle = {
    paddingVertical: size(7),
    paddingHorizontal: size(15),
    borderColor: 'transparent',
    borderWidth: size(2),
    borderRadius: size(25),
  };

  const text: TextStyle = {
    fontSize: size(16),
    fontWeight: '500',
    color: '#FFF',
  };

  if (active) {
    container.borderColor = '#fff';
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
