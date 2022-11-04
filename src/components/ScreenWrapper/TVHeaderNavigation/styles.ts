import { StyleSheet } from 'react-native';
import { size } from 'utils/styles';

export default StyleSheet.create({
  container: {
    paddingTop: size(25),
    paddingBottom: size(15),
    paddingHorizontal: size(20),
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    marginHorizontal: size(5),
  },
  spacer: {
    flex: 1,
  },
});
