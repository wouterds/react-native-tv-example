import { Platform, StyleSheet } from 'react-native';
import { size } from 'styles';

interface Props {
  bottom: number;
}

const createStyles = ({ bottom }: Props) =>
  StyleSheet.create({
    container: {
      paddingTop: size(8),
      paddingBottom: bottom,
      ...Platform.select({
        android: {
          paddingBottom: bottom + size(12),
        },
      }),
    },
  });

export default createStyles;
