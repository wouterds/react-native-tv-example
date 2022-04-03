import React from 'react';
import { ReactNode, useMemo } from 'react';
import { Text, TextStyle } from 'react-native';

import { useButtonContext } from '../useButtonContext';
import createStyles from './styles';

type Props = {
  children: string | ReactNode;
  style?: TextStyle;
};

const ButtonText = ({ children, style }: Props) => {
  const { type } = useButtonContext();
  const styles = useMemo(() => createStyles({ type }), [type]);

  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default ButtonText;
