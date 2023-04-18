import { StyleSheet } from 'react-native';
import { size } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    marginTop: size(12),
  },
  flatList: {
    paddingHorizontal: size(25),
    marginHorizontal: -size(2),
    marginVertical: size(6),
  },
  title: {
    paddingHorizontal: size(25),
    fontSize: size(18),
    fontWeight: '700',
    color: '#fff',
  },
});

export default styles;
