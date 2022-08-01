import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { size } from 'utils/styles';

const aspectRatio = 1.5;
const width = size(120);
const height = width * aspectRatio;

interface Props {
  hasFocus?: boolean;
}

const createStyles = ({ hasFocus }: Props) => {
  const focusArea: ViewStyle = {
    borderRadius: size(8),
    borderWidth: size(2),
    borderColor: 'transparent',
    overflow: 'hidden',
    width: width + size(2) * 2,
  };

  const title: TextStyle = {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: size(13),
    fontWeight: '500',
  };

  if (hasFocus) {
    focusArea.borderColor = '#32ff7e';
    title.color = '#32ff7e';
  }

  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      width: width + size(2) * 2 + size(6),
      marginRight: size(8),
    },
    focusArea,
    coverImage: {
      width,
      height,
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
