import ScreenWrapper from 'components/ScreenWrapper';
import Title from 'components/Title';
import React, { memo } from 'react';
import { View } from 'react-native';

import styles from './styles';

const SettingsScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Title>Settings</Title>
      </View>
    </ScreenWrapper>
  );
};

export default memo(SettingsScreen);
