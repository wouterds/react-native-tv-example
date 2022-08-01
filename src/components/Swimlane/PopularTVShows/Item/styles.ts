import { Platform, StyleSheet } from 'react-native';
import { size } from 'utils/styles';

const styles = StyleSheet.create({
  container: Platform.isTV
    ? {
        margin: -size(50),
        padding: size(50),
      }
    : {},
});

export default styles;
