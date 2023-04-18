import React, { memo } from 'react';
import { Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export interface Props {
  children: string | null | Array<string | null>;
}

const Warning = ({ children }: Props) => (
  <View style={styles.container}>
    <View style={styles.warning}>
      <Text style={styles.warningText}>
        <FontAwesome name="warning" style={styles.warningText} /> warning
      </Text>
    </View>
    <Text style={styles.text}>{children}</Text>
  </View>
);

export default memo(Warning);
