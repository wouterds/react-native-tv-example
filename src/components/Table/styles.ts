import { StyleSheet, ViewStyle } from 'react-native';

interface Props {
  fullWidth: boolean;
}

export default ({ fullWidth }: Props) => {
  const container: ViewStyle = {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
  };

  if (fullWidth) {
    container.borderRadius = 0;
    container.borderTopWidth = container.borderBottomWidth =
      StyleSheet.hairlineWidth;
    container.borderTopColor = container.borderBottomColor = '#C6C6C6';
  }

  return StyleSheet.create({
    container,
  });
};
