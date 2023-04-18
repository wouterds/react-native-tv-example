import ScreenWrapper from 'components/ScreenWrapper';
import Title from 'components/Title';
import Warning from 'components/Warning';
import React, { memo } from 'react';
import { View } from 'react-native';

import styles from './styles';

const SettingsScreen = () => {
  return (
    <ScreenWrapper header>
      <View style={styles.container}>
        <Title>Settings</Title>
        <View style={styles.banner}>
          <Warning>
            Just a placeholder screen to have at least one menu item on the
            right side of the screen.
          </Warning>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default memo(SettingsScreen);
