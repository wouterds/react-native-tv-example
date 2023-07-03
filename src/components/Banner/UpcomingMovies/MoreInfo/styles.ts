import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { size } from 'styles';

interface Props {
  hasFocus: boolean;
}

const createStyles = ({ hasFocus }: Props) => {
  const button: ViewStyle = {
    borderColor: 'transparent',
    backgroundColor: 'rgba(255, 255, 255, 0.075)',
    borderWidth: size(2),
    height: size(40),
    paddingHorizontal: size(20),
    paddingBottom: 0,
    borderRadius: size(20),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  };

  const text: TextStyle = {
    fontSize: size(16),
    fontWeight: '600',
    color: '#fff',
  };

  if (hasFocus) {
    button.borderColor = '#fff';
  }

  return StyleSheet.create({
    button,
    text,
  });
};

export default createStyles;
