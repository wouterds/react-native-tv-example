import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { size } from 'styles';

const width = size(132);

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
    content.borderColor = '#fff';
    title.color = '#fff';
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
    imageShimmerContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    imageShimmer: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    info: {
      flex: 1,
      width: '100%',
      marginTop: size(6),
      // offset active border
      paddingLeft: size(2),
    },
    title,
    titleShimmerContainer: {
      height: title.fontSize,
      borderRadius: size(6),
      overflow: 'hidden',
      resizeMode: 'cover',
      maxWidth: '80%',
      marginTop: size(1.5),
      marginBottom: size(1.5),
      ...Platform.select({
        android: {
          marginBottom: size(3.5),
        },
      }),
    },
    titleShimmer: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
  });
};

export default createStyles;
