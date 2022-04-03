import EPG from 'components/EPG';
import React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <EPG />
    </SafeAreaView>
  );
};

export default HomeScreen;
