import { Dimensions, Platform, StyleSheet } from 'react-native';
import { horizontalSpacing, size } from 'utils/styles';

const styles = StyleSheet.create({
  header: {
    height: Dimensions.get('window').height,
  },
  mask: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    paddingVertical: Platform.isTV ? size(32) : 0,
    ...horizontalSpacing,
  },
  title: {
    fontSize: Platform.isTV ? size(48) : size(28),
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  overview: {
    maxWidth: size(600),
    marginTop: size(12),
    fontSize: size(16),
    lineHeight: size(16 * 1.4),
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

export default styles;
