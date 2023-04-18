import { Platform, StyleSheet, ViewStyle } from 'react-native';
import { size } from 'utils/styles';

const container: ViewStyle = {
  marginBottom: size(10),
  paddingHorizontal: size(20),
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
