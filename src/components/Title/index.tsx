import React, { memo } from 'react';
import { Text, TextStyle } from 'react-native';

import styles from './styles';

interface Props {
  children: string;
  style?: TextStyle | TextStyle[];
}

const Title = ({ children, style }: Props) => {
  return (
    <Text
      style={[styles.text, ...(Array.isArray(style) ? style : [style])]}
      numberOfLines={1}>
      {children}
    </Text>
  );
};

export default memo(Title);
