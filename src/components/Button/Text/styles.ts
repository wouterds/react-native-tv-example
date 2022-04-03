import { StyleSheet, TextStyle } from 'react-native';

import { ButtonType } from '../index';

type Props = {
  type: ButtonType;
};

export default (props: Props) => {
  const text: TextStyle = {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#007CFF',
  };

  if (props.type === ButtonType.Primary) {
    text.color = '#fff';
  }

  return StyleSheet.create({
    text,
  });
};
