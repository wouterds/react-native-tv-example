import { StyleSheet } from 'react-native';
import { size } from 'utils/styles';

export default StyleSheet.create({
  container: {
    marginTop: size(25),
    marginBottom: size(15),
    marginHorizontal: size(20),
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
