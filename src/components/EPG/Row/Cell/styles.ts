import { StyleSheet } from 'react-native';

interface Props {
  duration: number;
}

export default ({ duration }: Props) => {
  return StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#fff',
      marginHorizontal: 1,
      padding: 8,
      width: duration * 4,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    time: {
      fontWeight: 'bold',
      fontSize: 14,
      opacity: 0.4,
    },
  });
};
