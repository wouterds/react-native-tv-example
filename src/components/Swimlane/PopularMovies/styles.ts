import { StyleSheet } from 'react-native';
import { size } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    marginVertical: size(7.5),
  },
  flatList: {
    paddingVertical: size(7.5),
    paddingHorizontal: size(25),
    marginHorizontal: -size(2),
  },
  title: {
    paddingHorizontal: size(25),
    fontSize: size(18),
    fontWeight: '500',
    color: '#fff',
  },
});

export default styles;
