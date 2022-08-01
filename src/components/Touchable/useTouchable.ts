import { useContext, useMemo } from 'react';

import { TouchableContext } from './context';

export const useTouchable = () => {
  const { hasFocus } = useContext(TouchableContext);

  return useMemo(() => {
    return { hasFocus };
  }, [hasFocus]);
};
