import { StyleSheet } from 'react-native';
import { size } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    marginVertical: size(7.5),
  },
  flatList: {
    paddingVertical: size(10),
  },
  title: {
    fontSize: size(16),
    fontWeight: '600',
    color: '#fff',
  },
});

export default styles;
