import { StyleSheet, ViewStyle } from 'react-native';
import { Device } from 'react-native-device-select';

interface Props {
  height: number;
  headerHeight: number;
  top: number;
  bottom: number;
}

const createStyles = ({ height, headerHeight, top, bottom }: Props) => {
  // fighting with react-navigation safe area insets & offsets
  // that behave differently on iOS & Android & TV platforms
  const content: ViewStyle = { minHeight: height - headerHeight };
  if (Device.isMobile && Device.isAndroid) {
    content.minHeight = height - (headerHeight - top - bottom);
  }

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      flex: 1,
    },
    content,
  });
};

export default createStyles;
