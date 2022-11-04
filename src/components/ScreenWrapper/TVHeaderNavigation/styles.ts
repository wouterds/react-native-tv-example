import { StyleSheet } from 'react-native';
import { size } from 'utils/styles';

export default StyleSheet.create({
  container: {
    marginTop: size(30),
    marginBottom: size(15),
    marginHorizontal: size(15),
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    marginHorizontal: size(10),
  },
  spacer: {
    flex: 1,
  },
});
