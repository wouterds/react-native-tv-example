import { useTouchable, withTouchable } from 'components/Touchable';
import { useComputedStyles } from 'hooks';
import React, { memo } from 'react';
import { Text, View } from 'react-native';

import createStyles from './styles';

const MoreInfo = () => {
  const { hasFocus } = useTouchable();
  const styles = useComputedStyles(createStyles, { hasFocus });

  return (
    <View style={styles.button}>
      <Text style={styles.text}>More info</Text>
    </View>
  );
};

export default memo(withTouchable(MoreInfo));
