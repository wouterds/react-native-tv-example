import { Platform, StyleSheet } from 'react-native';
import { size } from 'utils/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: !Platform.isTV ? size(20) : 0,
  },
});
