import { StyleSheet } from 'react-native';
import { dynamicPixels } from 'utils/styles';

export default StyleSheet.create({
  container: {
    height: dynamicPixels(60),
    marginVertical: dynamicPixels(1),
    flexDirection: 'row',
  },
  imageContainer: {
    paddingLeft: dynamicPixels(16),
    paddingRight: dynamicPixels(16),
    backgroundColor: '#fff',
    height: '100%',
    justifyContent: 'center',
    marginRight: dynamicPixels(1),
  },
  image: {
    height: dynamicPixels(50),
    width: dynamicPixels(68),
  },
  events: {
    flex: 1,
  },
});
