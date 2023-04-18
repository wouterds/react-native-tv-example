import { StyleSheet } from 'react-native';
import { size } from 'utils/styles';

const styles = StyleSheet.create({
  container: {
    padding: size(8),
    paddingTop: size(24),
    borderWidth: size(2),
    borderRadius: size(8),
    borderColor: '#FC2947',
    backgroundColor: '#FC294750',
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  warning: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#FC2947',
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
    color: '#FC2947',
    fontWeight: '500',
    fontSize: size(12),
    lineHeight: size(18),
  },
});

export default styles;
