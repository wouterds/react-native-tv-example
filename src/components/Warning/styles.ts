import { StyleSheet } from 'react-native';
import { size } from 'styles';

const styles = StyleSheet.create({
  container: {
    padding: size(8),
    paddingTop: size(24),
    borderWidth: size(2),
    borderRadius: size(8),
    borderColor: '#ff5252',
    backgroundColor: '#ff525230',
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  warning: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#ff5252',
    paddingVertical: size(2),
    paddingHorizontal: size(6),
    borderBottomRightRadius: size(4),
  },
  warningText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: size(12),
  },
  text: {
    color: '#ff5252',
    fontWeight: '500',
    fontSize: size(12),
    lineHeight: size(18),
  },
});

export default styles;
