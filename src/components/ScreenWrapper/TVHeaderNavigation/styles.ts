import { Platform, StyleSheet, ViewStyle } from 'react-native';
import { size } from 'utils/styles';

const container: ViewStyle = {
  marginBottom: size(5),
  paddingHorizontal: size(20),
  flex: 1,
  flexDirection: 'row',
};

if (Platform.OS === 'ios' && !Platform.isTV) {
  container.marginBottom = size(25);
}

export default StyleSheet.create({
  container,
  item: {
    marginHorizontal: size(5),
  },
  spacer: {
    flex: 1,
  },
});
