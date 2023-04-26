import { StyleSheet } from 'react-native';

interface Props {
  height: number;
  headerHeight: number;
}

const createStyles = ({ height, headerHeight }: Props) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      flex: 1,
    },
    content: {
      minHeight: height - headerHeight,
    },
  });

export default createStyles;
