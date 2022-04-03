import EPG from 'components/EPG';
import React, { memo } from 'react';
import { Platform, SafeAreaView } from 'react-native';

import styles from './styles';

const HomeScreen = () => {
  if (Platform.isTV) {
    return <EPG />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <EPG />
    </SafeAreaView>
  );
};

export default memo(HomeScreen);
