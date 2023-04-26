import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { size } from 'utils/styles';

interface Props {
  hasFocus: boolean;
}

const createStyles = ({ hasFocus }: Props) => {
  const button: ViewStyle = {
    borderColor: 'transparent',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: size(2),
    height: size(Platform.isTV ? 46 : 52),
    paddingHorizontal: size(Platform.isTV ? 23 : 26),
    paddingBottom: Platform.OS === 'android' ? size(1) : 0,
    borderRadius: size(26),
    alignItems: 'center',
    justifyContent: 'center',
    width: Platform.isTV ? 'auto' : '100%',
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
