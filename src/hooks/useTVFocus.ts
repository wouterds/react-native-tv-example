import { useIsFocused } from '@react-navigation/native';
import { ReactNode, RefObject, useCallback, useMemo, useState } from 'react';
import FocusService from 'services/focus';
import { findNode } from 'utils/node';

interface UseTVFocusOptions {
  first?: boolean;
  last?: boolean;
  hasInitialFocus?: boolean;
}

export const useTVFocus = <T = ReactNode>(options?: UseTVFocusOptions) => {
  const isFocused = useIsFocused();

  // We're using a ref in state because if the component renders only once
  // the findNodeHandle expression will return undefined as the ref is not
  // yet available during the initial render. Only in subsequent renders
  // ref will be available, thus we're setting it explicitly in state.
  // NOT IDEAL.
  const [ref, setRef] = useState<RefObject<T>>({ current: null });

  const hasTVPreferredFocus = useMemo(() => {
    if (!isFocused) {
      return false;
    }

    if (!FocusService.instance?.focusedTag) {
      if (options?.hasInitialFocus) {
        if (options?.first === false) {
          return false;
        }

        return true;
      }

      return false;
    }

    return FocusService.instance?.focusedTag === findNode(ref);
  }, [isFocused, ref, options?.hasInitialFocus, options?.first]);

  const nextFocusLeft = useMemo(() => {
    if (!ref?.current) {
      return undefined;
    }

    return findNode(ref, options?.first);
  }, [ref, options?.first]);

  const nextFocusRight = useMemo(() => {
    if (!ref?.current) {
      return undefined;
    }

    return findNode(ref, options?.last);
  }, [ref, options?.last]);

  const setRefProxy = useCallback(
    (value: RefObject<T>) => {
      if (ref?.current) {
        return;
      }

      setRef(value);
    },
    [setRef, ref],
  );

  return useMemo(
    () => ({
      set ref(value: RefObject<T>) {
        setRefProxy(value);
      },
      get ref() {
        return ref;
      },
      hasTVPreferredFocus,
      nextFocusLeft,
      nextFocusRight,
    }),
    [setRefProxy, ref, hasTVPreferredFocus, nextFocusLeft, nextFocusRight],
  );
};
