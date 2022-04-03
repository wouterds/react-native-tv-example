import { StyleSheet } from 'react-native';
import { dynamicPixels } from 'utils/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: dynamicPixels(60),
    marginVertical: dynamicPixels(1),
  },
});
