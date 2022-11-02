import { RefObject } from 'react';
import { findNodeHandle } from 'react-native';

export const findNode = (ref?: RefObject<any>, enabled = true) => {
  if (!enabled) {
    return undefined;
  }

  if (!ref?.current) {
    return undefined;
  }

  return findNodeHandle(ref.current) || undefined;
};
