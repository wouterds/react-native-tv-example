import { StyleSheet } from 'react-native';
import { size } from 'styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#20232a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: size(128),
    aspectRatio: 533 / 463,
  },
  loader: {
    position: 'absolute',
    bottom: -size(96),
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
