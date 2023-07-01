import { StyleSheet } from 'react-native';
import { Device } from 'react-native-device-select';
import { size } from 'utils/styles';

interface Props {
  bottom: number;
}

const createStyles = ({ bottom }: Props) => {
  return StyleSheet.create({
    header: { flex: 1 },
    mask: { flex: 1 },
    gradient: { flex: 1 },
    image: { flex: 1, resizeMode: 'cover' },
    content: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      paddingBottom: bottom,
      paddingHorizontal: size(32),
      ...Device.select({
        tv: {
          paddingBottom: size(32),
        },
      }),
    },
    spacer: { flex: 1 },
    details: {
      flexDirection: 'column',
      ...Device.select({
        tv: {
          flexDirection: 'row',
        },
      }),
    },
    watchTrailer: {
      marginTop: size(20),
      ...Device.select({
        tv: {
          alignItems: 'flex-end',
          justifyContent: 'center',
          marginTop: 0,
          flex: 1,
        },
      }),
    },
    title: {
      fontSize: size(48),
      fontWeight: 'bold',
      color: 'rgba(255, 255, 255, 0.9)',
    },
    overview: {
      maxWidth: size(640),
      width: '100%',
      marginTop: size(16),
      fontSize: size(16),
      lineHeight: size(16 * 1.4),
      fontWeight: '600',
      color: 'rgba(255, 255, 255, 0.8)',
    },
  });
};

export default createStyles;
