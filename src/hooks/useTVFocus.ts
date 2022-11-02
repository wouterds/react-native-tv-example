import { useIsFocused } from '@react-navigation/native';
import {
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import FocusService from 'services/focus';
import { findNode } from 'utils/node';

export const useTVFocus = <T = ReactNode>(options: {
  first?: boolean;
  last?: boolean;
}) => {
  const isFocused = useIsFocused();

  // We're using a ref in state because if the component renders only once
  // the findNode(ref, first) expressions will return undefined as the ref
  // is not yet available during the initial cycle. Only in subsequent cycles
  // ref will be available, thus we're setting explicitly in state.
  const [ref, setRef] = useState<RefObject<T>>({ current: null });
  const [hasTVPreferredFocus, setHasTVPreferredFocus] = useState(
    FocusService.instance?.focusedTag === findNode(ref),
  );

  useEffect(() => {
    setHasTVPreferredFocus(FocusService.instance?.focusedTag === findNode(ref));
  }, [isFocused, setHasTVPreferredFocus, ref]);

  const nextFocusLeft = useMemo(() => {
    if (!ref?.current) {
      return undefined;
    }

    // focus item itself if it's the first item (to prevent jumping to other UI elements)
    return findNode(ref, options?.first);
  }, [ref, options?.first]);

  const nextFocusRight = useMemo(() => {
    if (!ref?.current) {
      return undefined;
    }

    return findNode(ref, options?.last);
  }, [ref, options?.last]);

  const setRefProxy = useCallback(
    (value: T) => {
      if (ref?.current) {
        return;
      }

      setRef({ current: value });
    },
    [setRef, ref],
  );

  return useMemo(
    () => ({
      ref,
      setRef: setRefProxy,
      hasTVPreferredFocus,
      nextFocusLeft,
      nextFocusRight,
    }),
    [setRefProxy, ref, hasTVPreferredFocus, nextFocusLeft, nextFocusRight],
  );
};
