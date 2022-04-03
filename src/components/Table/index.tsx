import React, { ReactNode, useMemo } from 'react';
import { View } from 'react-native';

import Row from './Row';
import createStyles from './styles';

type Props = {
  children: ReactNode;
  fullWidth?: boolean;
};

const Table = ({ children, fullWidth = false }: Props) => {
  const styles = useMemo(() => createStyles({ fullWidth }), [fullWidth]);

  return <View style={styles.container}>{children}</View>;
};

Table.Row = Row;

export default Table;
