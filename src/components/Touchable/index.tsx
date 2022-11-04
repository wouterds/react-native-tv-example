import { useIsFocused } from '@react-navigation/native';
import React, {
  forwardRef,
  LegacyRef,
  memo,
  useCallback,
  useState,
} from 'react';
import {
  NativeSyntheticEvent,
  Platform,
  TargetedEvent,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';

import { TouchableContextProvider } from './context';

interface Props extends TouchableOpacityProps, ViewProps {}

export type TouchableProps = Props;

const Touchable = forwardRef(
  ({ onFocus, onBlur, children, ...props }: Props, ref) => {
    const [hasFocus, setHasFocus] = useState(false);
    const isFocused = useIsFocused();

    const onFocusProxy = useCallback(
      (e: NativeSyntheticEvent<TargetedEvent>) => {
        if (!isFocused) {
          return;
        }

        setHasFocus(true);
        onFocus?.(e);
      },
      [onFocus, isFocused],
    );

    const onBlurProxy = useCallback(
      (e: NativeSyntheticEvent<TargetedEvent>) => {
        if (!isFocused) {
          return;
        }

        setHasFocus(false);
        onBlur?.(e);
      },
      [onBlur, isFocused],
    );

    return (
      <TouchableOpacity
        {...props}
        onFocus={onFocusProxy}
        onBlur={onBlurProxy}
        activeOpacity={props.activeOpacity || Platform.isTV ? 1 : 0.7}
        tvParallaxProperties={{ enabled: false }}
        ref={ref as LegacyRef<TouchableOpacity>}>
        <TouchableContextProvider hasFocus={hasFocus}>
          {children}
        </TouchableContextProvider>
      </TouchableOpacity>
    );
  },
);

export default memo(Touchable);
