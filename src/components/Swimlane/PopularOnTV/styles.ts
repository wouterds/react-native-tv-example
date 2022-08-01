import { StyleSheet } from 'react-native';
import { size } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    paddingVertical: size(25),
  },
  horizontalSpacing: {
    paddingHorizontal: size(25),
  },
  title: {
    fontSize: size(16),
    fontWeight: '600',
    color: '#fff',
    marginBottom: size(12),
  },
});

export default styles;
