import EPG from 'components/EPG';
import React, { memo } from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <EPG />
    </SafeAreaView>
  );
};

export default memo(HomeScreen);
