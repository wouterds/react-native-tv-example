import { StyleSheet } from 'react-native';
import { PADDING, size } from 'styles';

const styles = StyleSheet.create({
  container: {
    marginTop: size(18),
    marginHorizontal: -size(10),
    flexDirection: 'row',
    paddingHorizontal: PADDING.HORIZONTAL,
  },
  col: {
    flex: 1,
    padding: size(10),
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    aspectRatio: 16 / 9,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  loader: {
    position: 'absolute',
    top: size(12),
    right: size(12),
  },
  box: {
    flex: 1,
    aspectRatio: 16 / 9,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: size(6),
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  content: {
    margin: size(24),
    flex: 1,
  },
  subTitle: {
    fontSize: size(14),
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.5)',
    marginBottom: size(4),
  },
  subTitleShimmer: {
    height: size(18),
    borderRadius: size(4),
    marginBottom: size(4),
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  title: {
    fontSize: size(32),
    fontWeight: 'bold',
    color: '#fff',
    height: size(43),
  },
  titleShimmer: {
    borderRadius: size(4),
    minWidth: '70%',
    marginTop: size(6),
    height: size(36),
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  text: {
    fontSize: size(12),
    lineHeight: size(18),
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  textShimmer: {
    borderRadius: size(4),
    minWidth: '80%',
    marginTop: size(6),
    height: size(12),
    overflow: 'hidden',
    resizeMode: 'cover',
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
