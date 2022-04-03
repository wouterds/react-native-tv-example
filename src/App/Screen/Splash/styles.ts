import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
    flex: 1,
    width: '100%',
    backgroundColor: '#000',
    paddingTop: 200,
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 128,
    height: 128,
  },
  loader: {
    position: 'absolute',
    bottom: -150,
    color: '#fff',
  },
});
