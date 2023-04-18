import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { size } from 'utils/styles';

const width = size(130);

interface Props {
  hasFocus?: boolean;
}

const createStyles = ({ hasFocus }: Props) => {
  const content: ViewStyle = {
    borderRadius: size(8),
    borderWidth: size(2),
    borderColor: 'transparent',
    overflow: 'hidden',
  };

  const title: TextStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: size(13),
    fontWeight: '600',
  };

  if (hasFocus) {
    content.borderColor = '#38eabe';
    title.color = '#38eabe';
  }

  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width,
      marginRight: size(12),
    },
    content,
    image: {
      aspectRatio: 2 / 3,
      width: '100%',
      borderRadius: size(6),
      overflow: 'hidden',
      resizeMode: 'cover',
      backgroundColor: 'rgba(255, 255, 255, 0.075)',
    },
    info: {
      flex: 1,
      width: '100%',
      marginTop: size(6),
      // offset active border
      paddingLeft: size(2),
    },
    title,
  });
};

export default createStyles;
