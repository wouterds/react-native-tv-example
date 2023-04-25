import React, { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './styles';

const ListHeaderLoaderComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator size="small" />
  </View>
);

export default memo(ListHeaderLoaderComponent);
