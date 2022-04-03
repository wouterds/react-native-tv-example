import { StyleSheet } from 'react-native';
import { dynamicPixels } from 'utils/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
    height: dynamicPixels(60),
    marginVertical: dynamicPixels(1),
  },
});
