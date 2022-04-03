import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import styles from './styles';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView style={styles.content}>
        <Text style={styles.text}>Hello world</Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
