import { StyleSheet, ViewStyle } from 'react-native';
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

  if (hasFocus) {
    focusArea.borderColor = '#000';
  }

  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      width: width + size(2) * 2,
      marginRight: size(8),
    },
    focusArea,
    coverImage: {
      width,
      height,
      borderRadius: size(6),
      overflow: 'hidden',
      resizeMode: 'cover',
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    info: {
      flex: 1,
      width: '100%',
      marginTop: size(8),
      // offset active border
      paddingLeft: size(2),
    },
    title: {
      color: '#000',
      fontSize: size(14),
    },
  });
};

export default createStyles;
