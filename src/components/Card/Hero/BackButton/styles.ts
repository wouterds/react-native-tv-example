import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { size } from 'utils/styles';

interface Props {
  hasFocus: boolean;
}

const createStyles = ({ hasFocus }: Props) => {
  const button: ViewStyle = {
    borderColor: '#fff',
    borderWidth: size(2),
    width: size(36),
    height: size(36),
    borderRadius: size(18),
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const text: TextStyle = {
    fontSize: size(16),
    color: '#FFF',
  };

  if (Platform.OS === 'ios') {
    button.borderColor = 'transparent';
  }

  if (hasFocus) {
    button.borderColor = '#38eabe';
    text.color = '#38eabe';
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
