import { useTouchable, withTouchable } from 'components/Touchable';
import { useComputedStyles } from 'hooks';
import React, { memo } from 'react';
import { Text, View } from 'react-native';

import createStyles from './styles';

type Props = {
  children: string;
  active?: boolean;
};

const Button = (props: Props) => {
  const { hasFocus } = useTouchable();
  const active = props.active || false;
  const styles = useComputedStyles(createStyles, { hasFocus, active });

  if (!props.children) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </View>
  );
};

export default memo(withTouchable(Button));
