import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Device } from 'react-native-device-select';
import { size } from 'styles';

interface Props {
  hasFocus: boolean;
}

const createStyles = ({ hasFocus }: Props) => {
  const button: ViewStyle = {
    borderColor: 'transparent',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: size(2),
    height: size(52),
    paddingHorizontal: size(26),
    paddingBottom: 0,
    borderRadius: size(26),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    ...Device.select({
      tv: {
        height: size(46),
        paddingHorizontal: size(23),
        width: 'auto',
      },
      android: {
        paddingBottom: size(1),
      },
    }),
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
