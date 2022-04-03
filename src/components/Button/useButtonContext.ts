import { useContext, useMemo } from 'react';

import { ButtonContext } from './context';

export const useButtonContext = () => {
  const { isActive, type } = useContext(ButtonContext);

  return useMemo(
    () => ({
      isActive,
      type,
    }),
    [isActive, type],
  );
};
