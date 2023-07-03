import { StyleSheet } from 'react-native';
import { PADDING, size } from 'styles';

const styles = StyleSheet.create({
  container: {
    marginTop: size(24),
  },
  flatList: {
    paddingHorizontal: PADDING.HORIZONTAL,
    marginHorizontal: -size(2),
    marginVertical: size(6),
  },
  title: {
    paddingHorizontal: PADDING.HORIZONTAL,
    fontSize: size(18),
    fontWeight: '700',
    color: '#fff',
  },
});

export default styles;
