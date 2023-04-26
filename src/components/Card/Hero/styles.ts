import { Platform, StyleSheet } from 'react-native';
import { size } from 'utils/styles';

interface Props {
  bottom: number;
}

const createStyles = ({ bottom }: Props) => {
  return StyleSheet.create({
    header: {
      flex: 1,
    },
    mask: {
      flex: 1,
    },
    gradient: {
      flex: 1,
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
    },
    content: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      paddingBottom: Platform.isTV ? size(32) : bottom,
      paddingHorizontal: size(25),
    },
    spacer: {
      flex: 1,
    },
    details: {
      flexDirection: Platform.isTV ? 'row' : 'column',
    },
    watchTrailer: {
      alignItems: Platform.isTV ? 'center' : undefined,
      justifyContent: Platform.isTV ? 'center' : undefined,
      marginTop: Platform.isTV ? 0 : size(20),
      flex: Platform.isTV ? 1 : 0,
    },
    title: {
      fontSize: size(48),
      fontWeight: 'bold',
      color: 'rgba(255, 255, 255, 0.9)',
    },
    overview: {
      maxWidth: size(640),
      width: '100%',
      marginTop: size(12),
      fontSize: size(16),
      lineHeight: size(16 * 1.4),
      fontWeight: '600',
      color: 'rgba(255, 255, 255, 0.8)',
    },
  });
};

export default createStyles;
