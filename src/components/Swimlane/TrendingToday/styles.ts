import { StyleSheet } from 'react-native';
import { PADDING, size } from 'styles';

const styles = StyleSheet.create({
  container: {
    marginTop: size(18),
  },
  flatList: {
    paddingHorizontal: PADDING.HORIZONTAL,
    marginHorizontal: -size(2),
    marginVertical: size(8),
  },
  title: {
    paddingHorizontal: PADDING.HORIZONTAL,
    fontSize: size(18),
    fontWeight: '700',
    color: '#fff',
  },
});

export default styles;
