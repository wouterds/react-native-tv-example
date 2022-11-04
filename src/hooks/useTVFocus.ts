import { useIsFocused } from '@react-navigation/native';
import { ReactNode, RefObject, useCallback, useMemo, useState } from 'react';
import FocusService from 'services/focus';
import { findNode } from 'utils/node';

interface UseTVFocusOptions {
  first?: boolean;
  last?: boolean;
}

export const useTVFocus = <T = ReactNode>(options?: UseTVFocusOptions) => {
  const isFocused = useIsFocused();

  // We're using a ref in state because if the component renders only once
  // the findNodeHandle expression will return undefined as the ref is not
  // yet available during the initial render. Only in subsequent renders
  // ref will be available, thus we're setting explicitly in state.
  const [ref, setRef] = useState<RefObject<T>>({ current: null });

  const hasTVPreferredFocus = useMemo(() => {
    return isFocused && FocusService.instance?.focusedTag === findNode(ref);
  }, [isFocused, ref]);

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
