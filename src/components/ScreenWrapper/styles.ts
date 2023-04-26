import { Platform, StyleSheet } from 'react-native';
import { size } from 'utils/styles';

interface Options {
  bottom: number;
}

const createStyles = ({ bottom }: Options) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      paddingTop: !Platform.isTV ? size(20) : 0,
      paddingBottom: bottom,
    },
  });
};

export default createStyles;
