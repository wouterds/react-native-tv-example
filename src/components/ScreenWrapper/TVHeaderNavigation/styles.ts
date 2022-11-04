import { Platform, StyleSheet, ViewStyle } from 'react-native';
import { size } from 'utils/styles';

const container: ViewStyle = {
  marginTop: size(25),
  marginBottom: size(15),
  marginHorizontal: size(20),
  flex: 1,
  flexDirection: 'row',
};

if (Platform.OS === 'ios') {
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
