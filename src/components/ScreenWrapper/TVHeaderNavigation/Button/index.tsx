import { useTouchable } from 'components/Touchable/useTouchable';
import { withTouchable } from 'components/Touchable/withTouchable';
import React, { memo, useMemo } from 'react';
import { Text, View } from 'react-native';

import createStyles from './styles';

type Props = {
  children: string;
  active?: boolean;
};

const Button = (props: Props) => {
  const { hasFocus } = useTouchable();
  const active = props.active || false;
  const styles = useMemo(
    () => createStyles({ hasFocus, active }),
    [hasFocus, active],
  );

  if (!props.children) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

export default memo(withTouchable(Button));
