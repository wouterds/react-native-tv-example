import { StyleSheet } from 'react-native';
import { size } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    marginVertical: size(10),
  },
  flatList: {
    paddingVertical: size(10),
    marginHorizontal: -size(2),
  },
  title: {
    fontSize: size(16),
    fontWeight: '600',
    color: '#fff',
  },
});

export default styles;
