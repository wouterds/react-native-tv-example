import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { size } from 'utils/styles';

interface Props {
  hasFocus: boolean;
}

const createStyles = ({ hasFocus }: Props) => {
  const button: ViewStyle = {
    borderColor: 'transparent',
    backgroundColor: '#fff',
    borderWidth: size(2),
    height: size(52),
    paddingHorizontal: size(26),
    borderRadius: size(26),
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  };

  const text: TextStyle = {
    fontSize: size(16),
    fontWeight: '600',
    color: '#000',
  };

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
