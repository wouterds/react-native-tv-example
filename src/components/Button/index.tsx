import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { Pressable, PressableProps, ViewStyle } from 'react-native';

import { ButtonContextProvider } from './context';
import createStyles from './styles';
import ButtonText from './Text';

export enum ButtonType {
  Default = 'button.default',
  Primary = 'button.primary',
}

interface Props extends PressableProps {
  type?: ButtonType;
  style?: ViewStyle;
}

const Button = (props: Props) => {
  const { children, onPress, style, type = ButtonType.Default } = props;
  const [isActive, setIsActive] = useState(false);
  const styles = useMemo(
    () => createStyles({ ...props, type, isActive }),
    [props, type, isActive],
  );

  const onPressIn = useCallback(() => {
    setIsActive(true);
  }, []);

  const onPressOut = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <ButtonContextProvider isActive={isActive} type={type}>
      <Pressable
        {...props}
        style={[styles.button, style]}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}>
        {typeof children === 'string' ? (
          <ButtonText>{children}</ButtonText>
        ) : (
          children
        )}
      </Pressable>
    </ButtonContextProvider>
  );
};

Button.Text = ButtonText;

export default Button;
