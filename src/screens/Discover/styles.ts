import { StyleSheet } from 'react-native';

interface Props {
  bottom: number;
}

const createStyles = ({ bottom }: Props) =>
  StyleSheet.create({
    container: {
      paddingBottom: bottom,
    },
  });

export default createStyles;
