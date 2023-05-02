import { StyleSheet } from 'react-native';
import { size } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    marginTop: size(12),
    marginHorizontal: -size(10),
    flexDirection: 'row',
    paddingHorizontal: size(25),
  },
  col: {
    flex: 1,
    padding: size(10),
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    aspectRatio: 16 / 9,
  },
  box: {
    flex: 1,
    aspectRatio: 16 / 9,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: size(6),
    overflow: 'hidden',
  },
  content: {
    margin: size(25),
    flex: 1,
  },
  subTitle: {
    fontSize: size(14),
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.5)',
    marginBottom: size(4),
  },
  title: {
    fontSize: size(32),
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: size(8),
  },
  text: {
    fontSize: size(12),
    lineHeight: size(18),
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  spacer: {
    flex: 1,
  },
  more: {
    flex: 1,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default styles;
