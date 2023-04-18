import { useMemo } from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const useComputedStyles = <
  T extends NamedStyles<T> | NamedStyles<any>,
  P extends object,
>(
  createStyles: (props: P) => T,
  props?: P,
) => {
  return useMemo(() => {
    return createStyles(props || <P>{});
  }, [props, createStyles]);
};
