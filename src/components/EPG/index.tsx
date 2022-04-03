import React, { memo } from 'react';
import { View } from 'react-native';

import { EPGContextProvider } from './context';
import Row from './Row';
import styles from './styles';

const EPGGrid = () => {
  return (
    <EPGContextProvider>
      <View style={styles.container}>
        <Row.Headers />
      </View>
    </EPGContextProvider>
  );
};

export default memo(EPGGrid);
